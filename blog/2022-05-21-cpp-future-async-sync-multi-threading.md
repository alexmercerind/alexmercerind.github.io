---
slug: alexmercerind
title: C++'s <future>, making async C callbacks functions sync & enjoyable multi-threading
tags: [c++, std::async, multi-threading, async]
---

I use [`<future>`](https://cplusplus.com/reference/future) header in C++ very-very often in my code everywhere at this point & wanted to share what's so cool in it.

<!--truncate-->

Generally, I don't really like classic way of handling `Thread`s, so much to worry about, spawning, running or joining.

What I find more elegant is:

- C#/.NET's `async`, `await` or `Task`
- JavaScript's `async`, `await` or `Promise` (I know JS is single-threaded, but still)
- Dart's `async`, `await` or `Future` (again, not actually "multi-threading").

I got to know about `std::future` and `std::promise` in C++ 11 few years back & they're quite the same in terms of how they're used in code. My happiness couldn't be greater.

Just see how elegant this looks:

### Code

Use `std::async` function to spawn a new thread and pass a function to it.

```cpp
#include <future>
#include <iostream>

int32_t main() {

  auto future = std::async([&]() {
    std::cout << "A std::future came to life!\n";
    std::this_thread::sleep_for(std::chrono::seconds(2));
    std::cout << "Hello from std::future & I'm 2 seconds late!\n";
  });

  std::this_thread::sleep_for(std::chrono::seconds(1));
  std::cout << "Hey, I'll be first on the console!\n";
  return 0;
}
```

Don't late that capturing lambda confuse you.

Something like this will be up on your terminal:

```cmd
A std::future came to life!
Hey, I'll be first on the console!
Hello from std::future & I'm 2 seconds late!
a_variable_declared_outside: 69420
```

:::warning

Always keep a reference accessible to yo to the `std::future` returned by the `std::async`.
Otherwise, your function passed will not launch on separate thread & just execute sync-ly.

The other day, I was spawning `std::future`s to do various things concurrently in a `for-loop` and noticed that everything was being executed synchronously. Then I came to know that I need to store their reference somewhere to be able to access them later. Added a `std::vector<std::future<void>>` in my case (where I pushed all returned `std::future`s).

Here let's just remove the `future` variable from above code:

```cpp
#include <future>
#include <iostream>

int32_t main() {
  std::async([&]() {
    std::cout << "A std::future came to life!\n";
    std::this_thread::sleep_for(std::chrono::seconds(2));
    std::cout << "Hello from std::future & I'm 2 seconds late!\n";
  });

  std::this_thread::sleep_for(std::chrono::seconds(1));
  std::cout << "Hey, I'll be first on the console!\n";
  return 0;
}
```

Notice how "Hey, I'll be first on the console!" came in last. Something we didn't expect.

Takes away the whole purpose.

```
A std::future came to life!
Hello from std::future & I'm 2 seconds late!
a_variable_declared_outside: 69420
Hey, I'll be first on the console!
```

:::

### Equivalents in HLL Dart or JavaScript

**How simple is that.** A separate thread launched with `std::async` & do whatever with it. This syntax is quite nice & familiar to how I'm trained with Dart/JavaScript.

Take equivalent Dart for example:

```dart
void main() async {
  () async {
    print('An async function came to life!');
    await Future.delayed(const Duration(seconds: 2));
    print('Hello from async function & I\'m 2 seconds late!');
  }();
  await Future.delayed(const Duration(seconds: 1));
  print('Hey, I\'ll be first on the console!');
}
```

```
An async function came to life!
Hey, I'll be first on the console!
Hello from async function & I'm 2 seconds late!
```

This [`std::future`](https://cplusplus.com/reference/future/future/) stuff in C++ now may seem really cool to you, but I still haven't noticed any analog of [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) from JavaScript in it yet.

Though, simple thread create/start/join API, is also good in some situations like doing event-polling in background or just spinning up something consistently while UI is visible. Other than that, it just becomes a pain in my opinion to handle if we have a lot of async operations to worry about & handling of tasks.

### Making a C async callback based function sync

If you've written JavaScript, I think you know how some libraries still ask for a function as argument and call it back once some heavy/network-related operation is done. This reminds me of `fs` (callback based filesystem API) and `fs/promise` (`Promise`s based filesystem API) from Node.js. Converting a old callback based API into shiny new async API is something I would do to sooth my soul.

An equivalent for this exists in Dart to make a function sync: [Completer](https://api.dartlang.org/stable/dart-async/Completer-class.html).

I had a similar situation in C/C++, [where I needed to "wait" for some async operation to finish before I could return the result from my function](https://github.com/alexmercerind/dart_vlc/blob/3b0571743f0ed2f90aa52ab92e955b55cd10d0dd/core/media_source/media.cc#L84-L87). I didn't know any solution but [`std::promise`](https://en.cppreference.com/w/cpp/thread/promise) from [`<future>`](https://cplusplus.com/reference/future/) came in very-very handy.

**Let's take this code:**

We want to wait for the value that is being returned from `a_long_running_function_that_returns_result_in_callback` inside callback from another thread before proceeding to print `"This should not execute early!!!\n"` on console.

```cpp
#include <future>
#include <iostream>

// Let's say we have this function which takes a lot of time to execute &
// returns the final result in the passed [callback] from another thread.
// I'm sure a lot of C/C++ librares like this are in existence.
//
// We need to wait for the result outside the passed callback.
//
// A place to demonstrate awesomeness of `std::promise`.
void a_long_running_function_that_returns_result_in_callback(
    void (*callback)(int)) {
  std::thread([=]() {
    std::this_thread::sleep_for(std::chrono::seconds(1));
    callback(69420);
  }).detach();
}

void print_the_value(int value) {
  std::cout << "The value is: " << value << "\n";
}

void main() {
  a_long_running_function_that_returns_result_in_callback(print_the_value);
  std::cout << "This should not execute early!!!\n";
  std::cin.get();
}
```

Output of this on your terminal will be:

```
This should not execute early!!!
The value is: 69420
```

The order is clearly messed up.

**Let's bring [`std::promise`](https://en.cppreference.com/w/cpp/thread/promise) to the rescue:**

```cpp
#include <future>
#include <iostream>

// Don't kill me for using global variables. C'mon it's C API that we're trying
// to wrap.
auto g_promise = std::promise<int>();

// Let's say we have this function which takes a lot of time to execute &
// returns the final result in the passed [callback] from another thread.
// I'm sure a lot of C/C++ librares like this are in existence.
//
// We need to wait for the result outside the passed callback.
//
// A place to demonstrate awesomeness of `std::promise`.
void a_long_running_function_that_returns_result_in_callback(
    void (*callback)(int)) {
  std::thread([=]() {
    std::this_thread::sleep_for(std::chrono::seconds(1));
    callback(69420);
  }).detach();
}

void print_the_value(int value) {
  std::cout << "The value is: " << value << "\n";
  // Set the value to the `std::future` corresponding to the promise.
  // Cause the wait to be over.
  g_promise.set_value(value);
}

void main() {
  a_long_running_function_that_returns_result_in_callback(print_the_value);
  // Wait until the promise is resolved.
  g_promise.get_future().wait();
  std::cout << "This should not execute early!!!\n";

  std::cin.get();
}
```

Notice how `std::promise::set_value` is called from the callback.
Then, `std::future::wait` is called from the main thread to wait for the promise to be resolved.

Such a nice syntax. If you wish to get the value inside [`std::promise`](https://en.cppreference.com/w/cpp/thread/promise) from the callback, you can use [`std::future::get`](https://en.cppreference.com/w/cpp/thread/future/get) instead of the [`std::future::wait`](https://en.cppreference.com/w/cpp/thread/future/wait).

```cpp
int a_long_running_function_that_returns_same_result_without_callback() {
  a_long_running_function_that_returns_result_in_callback(print_the_value);
  // Wait until the promise is resolved & return from this wrapper function.
  return g_promise.get_future().get();
}

void main() {
  std::cout
      << "Returned value: "
      << a_long_running_function_that_returns_same_result_without_callback()
      << "\n";
  std::cin.get();
}
```

There are also following things to note, which one may find useful:

- [`std::future::wait_for`](https://en.cppreference.com/w/cpp/thread/future/wait_for).
- [`std::future::wait_until`](https://en.cppreference.com/w/cpp/thread/future/wait_until).

Don't spam Rust is better in comments (oh, there are no comments right now). I'm staying with C++ for now.
