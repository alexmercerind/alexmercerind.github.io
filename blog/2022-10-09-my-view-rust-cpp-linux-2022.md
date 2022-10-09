---
slug: my-view-rust-cpp-linux-2022
authors: alexmercerind
title: "My View: Rust, C++, Linux Kernel & 2022"
tags: [rust, linux, linux-kernel, cpp, c, 2022, windows]
---

Rust is actually a better "systems programming language", helps developers to write safer code & has better compile-time warnings.
BUT, here's my point...

<!--truncate-->

If you came to read this page, I'm pretty sure you already know me & you also know that I have a ton of C/C++ code in my public repositories & libraries/packages.

I mainly only write C or C++ when there is no other choice, like for exposing some operating system API or any other native library to Flutter or Dart. So that I can use that functionality in my app.

Considering all Windows APIs either WinRT (Windows Runtime Library or [C++/WinRT](https://github.com/microsoft/cppwinrt)) or Win32 are in C/C++ anyway, I don't find any point in bringing yet another layer of Rust in between.

One can argue that there's a new [Windows crate for Rust](https://crates.io/crates/windows) now, however isn't that still calling those same "unsafe" APIs?
I think this crate is only useful when your app itself is in Rust, maybe [Tauri](https://tauri.app/) or [Iced](https://github.com/iced-rs/iced)?

This can give Rust developers a starting point for consuming Windows APIs (like [C++/WinRT](https://github.com/microsoft/cppwinrt) does for C++, _ahem, ahem_ Standard C++). And, both [Windows crate for Rust](https://crates.io/crates/windows) & [C++/WinRT](https://github.com/microsoft/cppwinrt) are made by [Kenny Kerr](https://github.com/kennykerr), Engineer on the Windows team at Microsoft. 

## Actual Point

I don't ever write C/C++ because _I enjoy it_ but because I want to:

- Do some low level stuff where performance is critical. Rust is good choice here, but it's going to be a very common situation where you'll have to depend on some existing C/C++ library.
- Use some core operating system API to leverage some feature in my app. It's a shame Windows OS's whole Win32 API or even the new Windows Runtime Library is in C++, while [Microsoft's own Azure CTO bashes C/C++](https://twitter.com/markrussinovich/status/1571995117233504257). They recently made a new Windows crate for Rust, but guess what ... It's still going to be a wrapper around that core UNsAFe API. Same for GTK (if we talk Linux), there are Rust bindings & that's all.
- Use any other native library which is already written in C e.g. libVLC, Qt, OpenCV etc. etc.

It's a massive infrastructure that's been built over the years & ton of work has gone into creating these libraries & utilities, which we cannot just abandon. There's no way going back and doing everything again. And, even if every company decides to afford this cost of rewrite, I'm pretty sure the new "safer" Rust re-factored codebases will actually bring more regressions, which will take more time to get patched.

On the other hand, you can make most new C/C++ compilers similarly strict as Rust compiler by setting the warning level anyway. If we're talking memory safety, we have smart pointers.

Rust is still a decent language, use it if you can. But you can't forget the fact that you'll still need to depend upon existing C/C++ stuff/libraries (atleast from my vision). Migrate to Rust if your company can afford it, maybe we can't get there slowly. But, I believe there is a very thin chance this will ever happen.

History has been written, this isn't the first attempt to knock off C/C++.

If Rust really takes off, I'd also make the switch. However, for now I don't see any obvious point.

If Linux kernel / driver developers get an option to use a language enjoy writing more, then why not!
