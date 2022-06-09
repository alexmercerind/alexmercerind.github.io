"use strict";(self.webpackChunkalexmercerind_github_io=self.webpackChunkalexmercerind_github_io||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"alexmercerind","metadata":{"permalink":"/blog/alexmercerind","source":"@site/blog/2022-05-21-cpp-future-async-sync.md","title":"C++\'s <future>, making async C callbacks functions sync & enjoyable asynchronous programming","description":"I use `` header in C++ quite-quite often in my code everywhere at this point & wanted to share what\'s so cool in it.","date":"2022-05-21T00:00:00.000Z","formattedDate":"May 21, 2022","tags":[{"label":"c++","permalink":"/blog/tags/c"},{"label":"std::async","permalink":"/blog/tags/std-async"},{"label":"multi-threading","permalink":"/blog/tags/multi-threading"},{"label":"async","permalink":"/blog/tags/async"}],"readingTime":5.815,"truncated":true,"authors":[],"frontMatter":{"slug":"alexmercerind","title":"C++\'s <future>, making async C callbacks functions sync & enjoyable asynchronous programming","tags":["c++","std::async","multi-threading","async"]}},"content":"I use [`<future>`](https://cplusplus.com/reference/future) header in C++ quite-quite often in my code everywhere at this point & wanted to share what\'s so cool in it.\\n\\n\x3c!--truncate--\x3e\\n\\nGenerally, I don\'t really like classic way of handling `Thread`s, so much to worry about, spawning, running or joining.\\n\\nWhat I find more elegant is:\\n\\n- C#/.NET\'s `async`, `await` or `Task`\\n- JavaScript\'s `async`, `await` or `Promise` (I know JS is single-threaded, but still)\\n- Dart\'s `async`, `await` or `Future` (again, not actually \\"multi-threading\\").\\n\\nI got to know about `std::future` and `std::promise` in C++ 11 few years back & they\'re quite the same in terms of how they\'re used in code. My happiness couldn\'t be greater.\\n\\nJust see how elegant this looks:\\n\\n### Code\\n\\nUse `std::async` function to spawn a new thread and pass a function to it.\\n\\n```cpp\\n#include <future>\\n#include <iostream>\\n\\nint32_t main() {\\n\\n  auto future = std::async([&]() {\\n    std::cout << \\"A std::future came to life!\\\\n\\";\\n    std::this_thread::sleep_for(std::chrono::seconds(2));\\n    std::cout << \\"Hello from std::future & I\'m 2 seconds late!\\\\n\\";\\n  });\\n\\n  std::this_thread::sleep_for(std::chrono::seconds(1));\\n  std::cout << \\"Hey, I\'ll be first on the console!\\\\n\\";\\n  return 0;\\n}\\n```\\n\\nDon\'t late that capturing lambda confuse you.\\n\\nSomething like this will be up on your terminal:\\n\\n```cmd\\nA std::future came to life!\\nHey, I\'ll be first on the console!\\nHello from std::future & I\'m 2 seconds late!\\na_variable_declared_outside: 69420\\n```\\n\\n:::warning\\n\\nAlways keep a reference accessible to yo to the `std::future` returned by the `std::async`.\\nOtherwise, your function passed will not launch on separate thread & just execute sync-ly.\\n\\nThe other day, I was spawning `std::future`s to do various things concurrently in a `for-loop` and noticed that everything was being executed synchronously. Then I came to know that I need to store their reference somewhere to be able to access them later. Added a `std::vector<std::future<void>>` in my case (where I pushed all returned `std::future`s).\\n\\nHere let\'s just remove the `future` variable from above code:\\n\\n```cpp\\n#include <future>\\n#include <iostream>\\n\\nint32_t main() {\\n  std::async([&]() {\\n    std::cout << \\"A std::future came to life!\\\\n\\";\\n    std::this_thread::sleep_for(std::chrono::seconds(2));\\n    std::cout << \\"Hello from std::future & I\'m 2 seconds late!\\\\n\\";\\n  });\\n\\n  std::this_thread::sleep_for(std::chrono::seconds(1));\\n  std::cout << \\"Hey, I\'ll be first on the console!\\\\n\\";\\n  return 0;\\n}\\n```\\n\\nNotice how \\"Hey, I\'ll be first on the console!\\" came in last. Something we didn\'t expect.\\n\\nTakes away the whole purpose.\\n\\n```\\nA std::future came to life!\\nHello from std::future & I\'m 2 seconds late!\\na_variable_declared_outside: 69420\\nHey, I\'ll be first on the console!\\n```\\n\\n:::\\n\\n### Equivalents in HLL Dart or JavaScript\\n\\n**How simple is that.** A separate thread launched with `std::async` & do whatever with it. This syntax is quite nice & familiar to how I\'m trained with Dart/JavaScript.\\n\\nTake equivalent Dart for example:\\n\\n```dart\\nvoid main() async {\\n  () async {\\n    print(\'An async function came to life!\');\\n    await Future.delayed(const Duration(seconds: 2));\\n    print(\'Hello from async function & I\\\\\'m 2 seconds late!\');\\n  }();\\n  await Future.delayed(const Duration(seconds: 1));\\n  print(\'Hey, I\\\\\'ll be first on the console!\');\\n}\\n```\\n\\n```\\nAn async function came to life!\\nHey, I\'ll be first on the console!\\nHello from async function & I\'m 2 seconds late!\\n```\\n\\nThis [`std::future`](https://cplusplus.com/reference/future/future/) stuff in C++ now may seem really cool to you, but I still haven\'t noticed any analog of [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) from JavaScript in it yet.\\n\\nThough, simple thread create/start/join API, is also good in some situations like doing event-polling in background or just spinning up something consistently while UI is visible. Other than that, it just becomes a pain in my opinion to handle if we have a lot of async operations to worry about & handling of tasks.\\n\\n### Making a C async callback based function sync\\n\\nIf you\'ve written JavaScript, I think you know how some libraries still ask for a function as argument and call it back once some heavy/network-related operation is done. This reminds me of `fs` (callback based filesystem API) and `fs/promise` (`Promise`s based filesystem API) from Node.js. Converting a old callback based API into shiny new async API is something I would do to sooth my soul.\\n\\nAn equivalent for this exists in Dart to make a function sync: [Completer](https://api.dartlang.org/stable/dart-async/Completer-class.html).\\n\\nI had a similar situation in C/C++, [where I needed to \\"wait\\" for some async operation to finish before I could return the result from my function](https://github.com/alexmercerind/dart_vlc/blob/3b0571743f0ed2f90aa52ab92e955b55cd10d0dd/core/media_source/media.cc#L84-L87). I didn\'t know any solution but [`std::promise`](https://en.cppreference.com/w/cpp/thread/promise) from [`<future>`](https://cplusplus.com/reference/future/) came in very-very handy.\\n\\n**Let\'s take this code:**\\n\\nWe want to wait for the value that is being returned from `a_long_running_function_that_returns_result_in_callback` inside callback from another thread before proceeding to print `\\"This should not execute early!!!\\\\n\\"` on console.\\n\\n```cpp\\n#include <future>\\n#include <iostream>\\n\\n// Let\'s say we have this function which takes a lot of time to execute &\\n// returns the final result in the passed [callback] from another thread.\\n// I\'m sure a lot of C/C++ librares like this are in existence.\\n//\\n// We need to wait for the result outside the passed callback.\\n//\\n// A place to demonstrate awesomeness of `std::promise`.\\nvoid a_long_running_function_that_returns_result_in_callback(\\n    void (*callback)(int)) {\\n  std::thread([=]() {\\n    std::this_thread::sleep_for(std::chrono::seconds(1));\\n    callback(69420);\\n  }).detach();\\n}\\n\\nvoid print_the_value(int value) {\\n  std::cout << \\"The value is: \\" << value << \\"\\\\n\\";\\n}\\n\\nvoid main() {\\n  a_long_running_function_that_returns_result_in_callback(print_the_value);\\n  std::cout << \\"This should not execute early!!!\\\\n\\";\\n  std::cin.get();\\n}\\n```\\n\\nOutput of this on your terminal will be:\\n\\n```\\nThis should not execute early!!!\\nThe value is: 69420\\n```\\n\\nThe order is clearly messed up.\\n\\n**Let\'s bring [`std::promise`](https://en.cppreference.com/w/cpp/thread/promise) to the rescue:**\\n\\n```cpp\\n#include <future>\\n#include <iostream>\\n\\n// Don\'t kill me for using global variables. C\'mon it\'s C API that we\'re trying\\n// to wrap.\\nauto g_promise = std::promise<int>();\\n\\n// Let\'s say we have this function which takes a lot of time to execute &\\n// returns the final result in the passed [callback] from another thread.\\n// I\'m sure a lot of C/C++ librares like this are in existence.\\n//\\n// We need to wait for the result outside the passed callback.\\n//\\n// A place to demonstrate awesomeness of `std::promise`.\\nvoid a_long_running_function_that_returns_result_in_callback(\\n    void (*callback)(int)) {\\n  std::thread([=]() {\\n    std::this_thread::sleep_for(std::chrono::seconds(1));\\n    callback(69420);\\n  }).detach();\\n}\\n\\nvoid print_the_value(int value) {\\n  std::cout << \\"The value is: \\" << value << \\"\\\\n\\";\\n  // Set the value to the `std::future` corresponding to the promise.\\n  // Cause the wait to be over.\\n  g_promise.set_value(value);\\n}\\n\\nvoid main() {\\n  a_long_running_function_that_returns_result_in_callback(print_the_value);\\n  // Wait until the promise is resolved.\\n  g_promise.get_future().wait();\\n  std::cout << \\"This should not execute early!!!\\\\n\\";\\n\\n  std::cin.get();\\n}\\n```\\n\\nNotice how `std::promise::set_value` is called from the callback.\\nThen, `std::future::wait` is called from the main thread to wait for the promise to be resolved.\\n\\nSuch a nice syntax. If you wish to get the value inside [`std::promise`](https://en.cppreference.com/w/cpp/thread/promise) from the callback, you can use [`std::future::get`](https://en.cppreference.com/w/cpp/thread/future/get) instead of the [`std::future::wait`](https://en.cppreference.com/w/cpp/thread/future/wait).\\n\\n```cpp\\nint a_long_running_function_that_returns_same_result_without_callback() {\\n  a_long_running_function_that_returns_result_in_callback(print_the_value);\\n  // Wait until the promise is resolved & return from this wrapper function.\\n  return g_promise.get_future().get();\\n}\\n\\nvoid main() {\\n  std::cout\\n      << \\"Returned value: \\"\\n      << a_long_running_function_that_returns_same_result_without_callback()\\n      << \\"\\\\n\\";\\n  std::cin.get();\\n}\\n```\\n\\nThere are also following things to note, which one may find useful:\\n\\n- [`std::future::wait_for`](https://en.cppreference.com/w/cpp/thread/future/wait_for).\\n- [`std::future::wait_until`](https://en.cppreference.com/w/cpp/thread/future/wait_until).\\n\\nDon\'t spam Rust is better in comments (oh, there are no comments right now). I\'m staying with C++ for now."}]}')}}]);