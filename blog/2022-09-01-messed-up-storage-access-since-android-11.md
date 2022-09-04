---
slug: messed-up-storage-access-since-android-11
authors: alexmercerind
title: Messed up storage access since Android 11
tags: [flutter, android, scoped-storage, storage-access-framework, media-store, saf]
---

Android recently introduced [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage) with things like [Storage Access Framework](https://developer.android.com/guide/topics/providers/document-provider) & [MediaStore](https://developer.android.com/reference/android/provider/MediaStore).

To put it simply, it's entirely messed up. There are number of use-cases which haven't been covered, I've seen users struggling after Android 10 & developers even more.

<!--truncate-->

## The Situation

To begin with, first of all, I won't call myself an Android developer because I never target Android primarily from my codebase. I'm instead a [Flutter](http://flutter.dev/) developer, a specialized framework which allows to build cross-platform applications from a single codebase, while leveraging native functionalities like permissions, notifications & media playback etc. through a mechanism we refer as [platform channels](https://docs.flutter.dev/development/platform-integration/platform-channels).
Flutter is a framework in/for Dart programming language, which also allows native-interop with C/C++ through [FFI](https://dart.dev/guides/libraries/c-interop), after-all not having C/C++ interop capability for any language/framework will be a really annoying thing.

Now to the actual mess, before Android 10 i.e. Android 9 or lower, any app that you install on your system could access your phone's storage, the directories & various files in it, without any consent (obviously not very privacy friendly).

## History & Present

- During API 28 or lower (Android 9 or lower), a developer had access to file system.
- After API 29 (Android 10), file system access is disabled by default everything is interpreted as `content://` URI instead of `file://`. During this time they provided a special flag to opt out of this scoped storage & use good-old file system methods. See: [`requestLegacyExternalStorage`](https://developer.android.com/training/data-storage/use-cases#opt-out-in-production-app).
- After API 30 (Android 11+), you can no longer access `file://` or file-system at all, unless you keep targetting API 29.

This has been done for "user privacy", but please continue reading till [Here's The Point](#heres-the-point).

Google & Android team thought, it's not fun enough so they entirely removed the capability to access, list or read a file/directory using it's path. I know it's still possible to use file paths using some trickery, but for the most part it has been told by the official documentation to not use file paths at all, when referencing any media or file on the storage. So, what are they recommending? [Scoped Storage](https://www.androidcentral.com/what-scoped-storage) with things like [Storage Access Framework](https://developer.android.com/guide/topics/providers/document-provider) & [MediaStore](https://developer.android.com/reference/android/provider/MediaStore). Let's cover these in detail.

**NOTE:** Android still allows accessing all of the filesystem (on API 31 or higher), using [`MANAGE_EXTERNAL_STORAGE`](https://support.google.com/googleplay/android-developer/answer/10467955?hl=en). But the chances are, your app will be definitely disqualified from entering Play Store. Only file managers, anti-viruses & backup utilities etc. will be allowed with this permission.

And you never know, what if they even remove [`MANAGE_EXTERNAL_STORAGE`](https://support.google.com/googleplay/android-developer/answer/10467955?hl=en) in future updates.

In summary, here are few core points:

- You cannot access `Android/data` & `Android/obb` of other applications.
- You can no longer access any file or directory on user's storage without permissions, especially if it's not made/created by your app. For sure, a good thing, ask for permission. But, it'll just get worse from this point on.
- You can no longer ask user to pick a folder & read it's contents permanently for displaying inside app. See [ACTION_OPEN_DOCUMENT_TREE](https://developer.android.com/training/data-storage/shared/documents-files#grant-access-directory).
  - Even if user gives the permission, you CANNOT access:
    - `Downloads` folder. Are you crazy?
    -  Internal storage or SD card's root directory. How do I look for content matching my app's compatibility & requirement?
    - Those `Android/data` & `Android/obb` folders.
  - Once the user gives you permission, even with above restrictions, it's not permanent. How do I update the things inside the app next time user wants to just browse his music library inside my app.
- If you want to access any media from user's storage, you need to use [MediaStore](https://developer.android.com/reference/android/provider/MediaStore). BUT:
  - Google has decided which mime & format is "audio", which mime & format is a picture, what if it's a image in [Quite OK image format](https://github.com/phoboslab/qoi) & I want to show users all photos inside user's phone including this format.
  - Last time I looked-up, even OGG (OPUS) was not being recognized as an "audio".
  - It's like you're restricting the creativity. Thinking of your "common use-cases" as the only possibility in this universe.
- According to official team, even if you use file paths & copy etc. operations, they are still delegated to [MediaStore](https://developer.android.com/reference/android/provider/MediaStore) internally, to fuck performance & unnecessarily ruining the speeds.

## What's Not Good

I work on [Harmonoid](https://github.com/harmonoid/harmonoid), a music library manager & player for Windows, Linux & Android. You can expect a lot of internal logic is shared accross all platforms especially related to media indexing & file system handling.
After Android's this migration to it's "specialized" APIs, it renders application obsolete for Android & I have to write same implementation in Kotlin separately along-side existing file-system based implementation to target Android. Not to forget, application still uses a small (~200 lines) of native Kotlin code to invoke [`MediaMetadataRetriever`](https://developer.android.com/reference/android/media/MediaMetadataRetriever) to extract audio data & album arts.

- What if I wish to use [taglib](https://github.com/taglib/taglib), a well known tagging libraries in C++ used by VLC & more. Does Android, the open source operating system restricts it's usage because it doesn't interpret Android's stupidity about files/directories?
- Currently, one of the unique features of [Harmonoid](https://github.com/harmonoid/harmonoid) is that I have added ability to select multiple folders & include inside music library. This is because no-one wants to see their audio recordings or WhatsApp audios inside a music app, I also hated it.
- Most media players lookup for fallback album arts (when an audio file doesn't have an embedded one) inside the song's directory. See [these lines of VLC's C source code](https://code.videolan.org/videolan/vlc/-/blob/master/modules/meta_engine/folder.c#L40-55). Now that file system is gone on Android, how do I handle this.
- A core feature of [Harmonoid](https://github.com/harmonoid/harmonoid) is to show available lyrics for the song, this happens by either one of the two:
  - Selecting [`.LRC` file](https://en.wikipedia.org/wiki/LRC_(file_format)) manually for a song present inside app. Yeah, it's annoying. [Storage Access Framework](https://developer.android.com/guide/topics/providers/document-provider) could likely still support it, since it requires explicit file picking from user & copying to local cache dir.
  - Looking for the `.LRC` inside audio file's folder (having same name) & loading automatically.
- There is no way to efficiently use [MediaStore](https://developer.android.com/reference/android/provider/MediaStore) inside Flutter, even if I wish to switch away from current massively stable & efficient implementation of [package:media_library](https://github.com/alexmercerind/media_library.git). Accessing files, reading metadata tags & displaying album arts in a way that it supports all platforms? Likely impossible according to Android team. See: [flutter/flutter#57380](https://github.com/flutter/flutter/issues/57380).
- To make matters worse, both Flutter & Android are from Google & share no "compatiblity". 

**I'm sure there are many many other awesome & creative apps (which utilise a common thing as filesystem to build a unique experience), will all be kicked out of Play Store now. Thinking uniquely is slowly being disregarded on this planet now.**


## Here's The Point

_Google & it's Android is the REAL THREAT TO USER PRIVACY, not some passionate application developer building a good digital experience for users while not even possibly requesting internet permission. I never know when my microphone or camera is active or being recorded to feed your advertising system._

One of the biggest reasons I liked Android over iOS was it's open-ness & ability to anything. Looks like there's going to be a big demand of [Linux smartphones](https://itsfoss.com/linux-phones/) in the market soon. I don't want yet another iOS.

- Stop (Android OS & Google) deciding which file/format extension is for what usage.
- Stop deciding what's a media format & what's not.
- Stop abstracting file system, directories & files. Everyone has great idea of how files work, both users & developers.

Okay, privacy is a good thing. BUT, why on earth is it implemented using [Storage Access Framework](https://developer.android.com/guide/topics/providers/document-provider) & [MediaStore](https://developer.android.com/reference/android/provider/MediaStore). I don't want these garbage services to run in background & iterate over my file directories to update their entries of available media automatically. Why you couldn't:

**Just restrict access to file contents or file system unless user consented (probably based on mime or file-extension), while keeping filesystem API usage available. As simple as that.**

What an actual API desigining... 🤓

As a user, I think everyone quite literally understands & knows what a directory structure & file system looks like. I cannot comprehend what's the necessity to build these unnecessary abstractions over the normal file-system access like every operating system provides.
Not providing developers access to thing as common as file-system, you're simply breaking the norm. This simply means that you can't use your existing logic, code & libraries which you use for other platforms. Since I'm a Flutter developer, I believe in unifying the APIs & being as less platform specific as possible.

## Side Effects

Just wanted to include this section & it's bit of personal too (just like this blogging page).

- If you recently observed, images & videos from WhatsApp are no longer visible in your Phone's gallery & there is no `WhatsApp` folder in your storage either (where it used to).
  - [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage) is the cause. I can no longer copy/move the documents my friends/college sent me.
  - To make matters worse, it's quite literally impossible to select multiple documents from WhatsApp & attach it to an e-mail.
  - You gotta go through those [`ACTION_OPEN_DOCUMENT`](https://developer.android.com/guide/topics/providers/document-provider)s couple of times.
- One of my friend plays the game [Mobile Legends](https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en_IN&gl=US).
  - According to him, the game fetches a large numer of in-game assets (around 5-6 GB) for skins, textures etc.
  - Since downloading these files on every device is redundant & essentially wastage of internet connection, he & his friends used to share these "assets" & copy at required locations on multiple devices from one device (where it was downloaded).
  - This is no longer possible, atleast the copy speeds are really slow as compared to pre API 29.
  - This essentially shows, how in-efficient & unfriendly this redundantly made implementation built into the operating system is.

What a degradation.


## End Notes

As I said at the beginning of this, I'm actually a Flutter developer & mainly I have experience in Windows & Linux application development & their native APIs.

From my experience (so far) working with other Flutter developers & being part of community, I don't think average or even intermediate Flutter developer has any knowledge of device-specific APIs & garbage like [Storage Access Framework](https://developer.android.com/guide/topics/providers/document-provider) & [MediaStore](https://developer.android.com/reference/android/provider/MediaStore) at all (because these are part of Android SDK).

This means re-writing all the functionality specifically for Android separately because APIs from [`dart:io`](https://api.flutter.dev/flutter/dart-io/dart-io-library.html) or libraries written completely in Dart or leveraging FFI likely won't work at all for your purpose.

Working with Android SDK has always been painful, deprecated APIs left & right after every release. As someone who never was into Android development specifically, you have no clear idea where to begin & where to end. Jetpack Compose, XML, Kotlin, Java alongside these random things like content-provider, content-resolver, media-store, SAF being added for no reason, while core things like file system handling being removed from the operating system & API.

For now, I have zero motivation to migrate to this "new & better" API which will take away many cool features of my application. Let's see if I have to open Android Studio & contribute to global warming while running it.

Thanks for reading! No features this year, just refactor.
