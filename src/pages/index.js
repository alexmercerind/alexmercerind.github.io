import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Profile from "@site/src/components/Profile";
import Project from "@site/src/components/Project";
import AOS from "aos";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.hero)}>
      <div className={styles.header}>
        <div className={styles.infobar}>
          <div className={styles.tooltip}>Here for the libraries' docs? Go to the <a className={styles.jump} href="#">Docs</a>.</div>
          <div className={styles.tooltip}>Here for the projects? Jump to the <a className={styles.jump} href="#">Projects</a>.</div>
        </div>
        <div className={styles.row}>
          <div className={styles.profile}>
            <img className={styles.image} src="https://avatars.githubusercontent.com/u/28951144"></img>
          </div>
          <div className={styles.container}>
            <h1 data-aos="fade-up" className={styles.title}>Hitesh Kumar Saini</h1>
            <p data-aos="fade-up" className={styles.subtitle}>Dehradun, India</p>
            <p data-aos="fade-up" data-aos-delay="500" className={styles.tagline}>I'm a Flutter (+ FFI, platform channels, BLoC, Provider) &amp; React.js (+ React Router) developer.<br />I mainly write C++, Dart, Python &amp; JavaScript. I love solving people's problems &amp; built a number of open source libraries &amp; apps while doing this. Hopefully, few of my libraries &amp; projects are well loved by community &amp; I appreciate everyone who is using those in their apps &amp; other projects. I also enjoy writing native C++ Windows &amp; Linux code (as used in my Flutter plugins &amp; other libraries), dealing with media playback, reverse engineering APIs &amp; webscraping.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      delay: 200,
    });
  }, []);

  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"></link>
      </head>
      <main>
        <HomepageHeader />
      </main>
      <Profile />
      <Project
        index={0}
        maintainer={"alexmercerind"}
        repository={"harmonoid"}
        links={{
          "Download": "https://github.com/harmonoid/harmonoid/releases/latest",
          "libmpv": "https://mpv.io/",
        }}
        images={[
          require('@site/static/img/harmonoid/0.webp').default,
          require('@site/static/img/harmonoid/1.webp').default,
          require('@site/static/img/harmonoid/2.webp').default,
          require('@site/static/img/harmonoid/3.webp').default,
          require('@site/static/img/harmonoid/5.webp').default,
          require('@site/static/img/harmonoid/0.jpeg.webp').default,
          require('@site/static/img/harmonoid/1.jpeg.webp').default,
        ]}
        extraLanguages={["C"]}
        achievements={[
          "Indexes updates music into albums, artists based on metadata tags. Capable of indexing 20 songs per second & caching.",
          "Made in Flutter & very strictly follows Material Design animation & UI guidelines.",
          "Uses libmpv C API through dart:ffi for music playback.",
          "Taskbar controls, context-menu integration & System Media Transport Controls for Windows.",
          "MPRIS controls for Linux, Discord RPC, gapless playback, YouTube support & other features.",
          "Currently working on Windows, Linux & Android.",
        ]}
      />
      <Project
        index={1}
        maintainer={"alexmercerind"}
        repository={"dart_vlc"}
        links={{
          "pub.dev": "https://pub.dev/packages/dart_vlc",
          "videoLAN retweet": "https://twitter.com/videolan/status/1371774126080286722",
          "libVLC++": "https://github.com/videolan/libvlcpp",
        }}
        images={[
          "https://github.com/alexmercerind/dart_vlc/blob/assets/dart_vlc_6.png?raw=true",
          "https://github.com/alexmercerind/dart_vlc/blob/assets/dart_vlc_7.png?raw=true",
        ]}
        extraLanguages={["C++"]}
        achievements={[
          "First ever media playback library for Flutter and Dart apps on Windows, Linux & macOS.",
          "Has C++ based wrapper around libVLC++ & libVLC.",
          "Uses FFI & dart_api.h for calling libVLC APIs & platform channels for texture registrar APIs.",
          "Most libVLC APIs are exposed to Dart in a nice high-level style.",
        ]}
      />
      <Project
        index={2}
        maintainer={"alexmercerind"}
        repository={"flutter_acrylic"}
        links={{
          "pub.dev": "https://pub.dev/packages/flutter_acrylic",
          "Rafael Rivera": "https://github.com/riverar",
        }}
        images={[
          "https://github.com/alexmercerind/flutter_acrylic/raw/assets/mug8J4efWu.gif?raw=true",
        ]}
        extraLanguages={["Dart"]}
        achievements={[
          "Window acrylic, mica & transparency effects on Windows, macOS & Linux.",
          "Uses new DwmSetWindowAttribute API on modern Windows 11 versions & undocumented SetWindowCompositionAttribute API on previous Windows versions (founded by Rafael Rivera).",
          "Uses cairo on Linux.",
        ]}
      />
      <Project
        index={3}
        maintainer={"alexmercerind"}
        repository={"windows_taskbar"}
        links={{
          "pub.dev": "https://pub.dev/packages/windows_taskbar",
          "ITaskbarList3": "https://docs.microsoft.com/en-us/windows/win32/api/shobjidl_core/nn-shobjidl_core-itaskbarlist3",
        }}
        images={[
          "https://github.com/alexmercerind/windows_taskbar/raw/assets/bMebejv57F.gif?raw=true",
          "https://github.com/alexmercerind/windows_taskbar/raw/assets/OdzgD1yqEO.gif?raw=true",
        ]}
        extraLanguages={["Dart"]}
        achievements={[
          "Exposes ITaskbarList3 APIs to Flutter & Dart.",
          "Offers many taskbar related functions for usage in client code.",
        ]}
      />
      <Project
        index={4}
        maintainer={"alexmercerind"}
        repository={"flutter_media_metadata"}
        links={{
          "pub.dev": "https://pub.dev/packages/flutter_media_metadata",
        }}
        images={[
          "https://github.com/alexmercerind/flutter_media_metadata/blob/assets/windows_active.png?raw=true",
          "https://github.com/alexmercerind/flutter_media_metadata/blob/assets/linux_active.png?raw=true",
        ]}
        extraLanguages={["Dart"]}
        achievements={[
          "Retrieves metadata of media files.",
          "Works on Windows, Linux & Android.",
          "Uses MediaMetadataRetriever API on Android & libmediainfo on Linux."
        ]}
      />
      <Project
        index={5}
        maintainer={"alexmercerind"}
        repository={"dart_discord_rpc"}
        links={{
          "pub.dev": "https://pub.dev/packages/dart_discord_rpc",
        }}
        extraLanguages={["Dart"]}
        achievements={[
          "Discord RPC bindings to Dart.",
          "Not major work, a lot of stuff was generated using ffigen.",
          "Gives developers ability to set user's Discord presence from their app.",
        ]}
      />
      <Project
        index={6}
        maintainer={"alexmercerind"}
        repository={"desktoasts"}
        links={{
          "pub.dev": "https://pub.dev/packages/desktoasts",
          "WinToast": "https://github.com/mohabouje/WinToast",
        }}
        images={[
          "https://github.com/alexmercerind/desktoasts/raw/assets/Capture01.PNG?raw=true",
          "https://github.com/alexmercerind/desktoasts/raw/assets/Capture02.PNG?raw=true",
          "https://github.com/alexmercerind/desktoasts/raw/assets/Capture03.PNG?raw=true"
        ]}
        extraLanguages={["Dart"]}
        achievements={[
          "A simple Flutter plugin to send notifications on Windows.",
          "Badly written old-school C++ code.",
          "Uses WinToast.",
        ]}
      />
      <Project
        index={7}
        maintainer={"harmonoid"}
        repository={"libwinmedia"}
        links={{
          "libwinmedia": "https://github.com/harmonoid/libwinmedia",
          "libwinmedia-py": "https://github.com/mytja/libwinmedia-py",
          "libwinmedia.dart": "https://github.com/harmonoid/libwinmedia/tree/master/flutter",
          "just_audio": "https://github.com/ryanheise/just_audio/tree/master/just_audio"
        }}
        extraLanguages={["C"]}
        achievements={[
          "Cross-platform media playback library for C and C++.",
          "Permissively MIT licensed & I built to power my music app, Harmonoid.",
          "Exposes C++/WinRT media playback APIs on Windows & WebKit GTK on Linux to a C-like API.",
          "Used by famous just_audio Flutter plugin.",
          "Has community built bindings to Python & Flutter.",
        ]}
      />
      <Project
        index={8}
        maintainer={"alexmercerind"}
        repository={"youtube-search-python"}
        links={{
          "PyPI": "https://github.com/alexmercerind",
        }}
        achievements={[
          "Over 2M downloads on PyPI.",
          "Searches & gets information from YouTube without official rate limiting API.",
          "Has asynchronous support.",
          "Added additional features other than searching after requests from dependents. First project to reach 100 stars.",
        ]}
      />
      <Project
        index={9}
        maintainer={"alexmercerind"}
        repository={"flutter_audio_desktop"}
        links={{
          "dart_vlc": "https://pub.dev/packages/dart_vlc",
          "miniaudio": "https://github.com/mackron/miniaudio",
          "Medium Article": "https://medium.com/flutter/announcing-flutter-windows-alpha-33982cd0f433",
        }}
        extraLanguages={["Dart"]}
        achievements={[
          "Superseded by dart_vlc, based on libVLC.",
          "Got mentioned in the official Flutter medium article about Flutter for Windows.",
          "One of the very first plugins ever made for Flutter Windows.",
          "Uses miniaudio in C++ for low level cross platform audio playback APIs."
        ]}
      />
    </Layout>
  );
}
