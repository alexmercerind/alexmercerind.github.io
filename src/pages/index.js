import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Profile from "@site/src/components/Profile";
import Project from "@site/src/components/Project";
import AOS from "aos";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.hero)}>
      <div className={styles.header}>
        <div className={styles.infobar}>
          <div className={styles.tooltip}>Here for the projects? Jump to the <a className={styles.jump} onClick={() => document.getElementById("projects").scrollIntoView({ "behavior": "smooth" })}>Projects</a>.</div>
          <div className={styles.tooltip}>Here for the libraries' docs? Go to the <Link className={styles.jump} to="/docs">Docs</Link>.</div>
        </div>
        <div className={styles.row}>
          <div className={styles.profile}>
            <img className={styles.image} src="https://avatars.githubusercontent.com/u/28951144"></img>
          </div>
          <div className={styles.container}>
            <h1 data-aos="fade-up" className={styles.title}>Hitesh Kumar Saini</h1>
            <p data-aos="fade-up" className={styles.subtitle}>Dehradun, India</p>
            <p data-aos="fade-up" data-aos-delay="500" className={styles.tagline}>I'm a Flutter (+ FFI, platform channels, BLoC, Provider) &amp; React.js (+ React Router) developer.<br />I mainly write C++, Dart, Python &amp; JavaScript. I love solving people's problems &amp; built a number of open source libraries &amp; apps while doing this. Hopefully, few of my libraries &amp; projects are well loved by community &amp; I appreciate everyone who is using those in their apps &amp; other projects. I have good knowledge of object oriented &amp; asynchronous programming. I also enjoy writing native C++ Windows &amp; Linux code (as used in my Flutter plugins &amp; other libraries), dealing with media playback, reverse engineering APIs &amp; webscraping.</p>
          </div>
        </div>
      </div>
    </header >
  );
}

export default function Home() {
  useEffect(() => {
    document.getElementsByClassName('header-discord-link').item(0).onclick = () => alert('You may make me your friend on alexmercerind#3898. 😄');
    AOS.init({
      once: false,
      mirror: true,
      delay: 200,
    });
  }, []);

  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from Hitesh`}
      description={"Libraries, apps & other projects."}>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.scrollable}>
        <main>
          <HomepageHeader />
        </main>
        <Profile />
        <br id="projects" />
        <br />
        <Project
          index={0}
          maintainer={"harmonoid"}
          repository={"harmonoid"}
          description="Plays & manages your music library. Looks beautiful & juicy. Playlists, visuals, synced lyrics, pitch shift, volume boost & more."
          links={{
            "Website": "https://harmonoid.com/",
            "Download": "https://harmonoid.com/downloads",
            "mpv": "https://mpv.io/",
            "Google Play (recently published)": "https://play.google.com/store/apps/details?id=com.alexmercerind.harmonoid",
          }}
          images={[
            "https://github.com/harmonoid/harmonoid/blob/assets/windows/0.webp?raw=true",
            "https://github.com/harmonoid/harmonoid/blob/assets/windows/1.webp?raw=true",
            "https://github.com/harmonoid/harmonoid/blob/assets/windows/2.webp?raw=true",
            "https://github.com/harmonoid/harmonoid/blob/assets/windows/3.webp?raw=true",
            "https://github.com/harmonoid/harmonoid/blob/assets/windows/4.webp?raw=true",
          ]}
          extraLanguages={["Dart", "C"]}
          achievements={[
            "I made this in Flutter / Dart & very strictly follows Material Design animation & UI guidelines.",
            "Indexes & updates music into albums, artists, genres based on metadata tags. Capable of indexing 50 songs/second & future caching.",
            "mpv based music playback for strong format support (on Linux & Windows) using dart:ffi.",
            "Taskbar controls, context-menu integration & System Media Transport Controls for Windows.",
            "Pitch shifting, speed change, .lrc lyrics support, volume boost, Discord RPC, gapless playback.",
            "YouTube support, MPRIS controls for Linux & more.",
            "I worked hard to make project work on all 3 platforms, Windows, Linux & Android.",
            "I used Provider for state management & code has singletons at places.",
            "Internally used packages & plugins are unit tested. Has over ~40k downloads combining Windows, Linux & Android."
          ]}
        />
        <Project
          index={1}
          maintainer={"alexmercerind"}
          repository={"dart_vlc"}
          description="Flutter audio/video playback, broadcast &amp; recording library for Windows, Linux &amp; macOS with playlist control. Native C/C++ &amp; libvlc."
          links={{
            "pub.dev": "https://pub.dev/packages/dart_vlc",
            "VideoLAN retweet": "https://twitter.com/videolan/status/1371774126080286722",
            "libVLC++": "https://github.com/videolan/libvlcpp",
          }}
          images={[
            require('@site/static/img/dart_vlc/0.webp').default,
            require('@site/static/img/dart_vlc/1.webp').default,
          ]}
          extraLanguages={["C++"]}
          achievements={[
            "First ever media playback library for Flutter and Dart apps on Windows, Linux & macOS.",
            "I wrote a C++ based wrapper around libVLC++ & libVLC.",
            "Uses FFI & dart_api.h for calling libVLC APIs & platform channels for texture registrar APIs.",
            "Most libVLC APIs are exposed to Dart in a nice high-level style.",
          ]}
        />
        <Project
          index={2}
          maintainer={"alexmercerind"}
          repository={"flutter_acrylic"}
          description="Flutter library for window acrylic, mica &amp; transparency effects (Windows, macOS &amp; Linux)."
          links={{
            "pub.dev": "https://pub.dev/packages/flutter_acrylic",
            "Rafael Rivera": "https://github.com/riverar",
          }}
          images={[
            require("@site/static/img/flutter_acrylic.jpg").default,
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
          description="Flutter plugin serving utilities related to Windows taskbar."
          links={{
            "pub.dev": "https://pub.dev/packages/windows_taskbar",
            "ITaskbarList3": "https://docs.microsoft.com/en-us/windows/win32/api/shobjidl_core/nn-shobjidl_core-itaskbarlist3",
          }}
          images={[
            require("@site/static/img/windows_taskbar.jpg").default,
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
          description="A Flutter plugin to read metadata of media files. Supports Windows, Linux, macOS, Android, iOS &amp; Web."
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
          description="Discord Rich Presence for Flutter &amp; Dart."
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
          description="[Deprecated] A Dart FFI package to send toasts on Windows. Written in C++, based on WinToast."
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
            "Uses WinToast.",
          ]}
        />
        <Project
          index={7}
          maintainer={"harmonoid"}
          repository={"libwinmedia"}
          description="[Deprecated] A cross-platform simple media playback library for C/C++."
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
          description="[Deprecated] Search for YouTube videos, channels &amp; playlists. Get video &amp; playlist info using link. Get search suggestions. WITHOUT YouTube Data API v3."
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
          description="[Deprecated] An audio playback library for Flutter Desktop. Supports Windows &amp; Linux. Based on miniaudio."
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
        <Project
          index={3}
          maintainer={"alexmercerind"}
          repository={"image_palette_generator"}
          description="Generate a color palette from an image or find dominant color."
          links={{
            "Repository": "https://github.com/alexmercerind/image_palette_generator",
            "exoquant": "https://github.com/exoticorn/exoquant",
            "stb_image.h": "https://github.com/nothings/stb/blob/master/stb_image.h",
          }}
          images={[
            require("@site/static/img/image_palette_generator.jpg").default,
          ]}
          achievements={[
            "Extracts a vibrant color palette (using image quantization), color tones (based on averaging) or dominant color from image.",
            "Object oriented & friendly to use.",
            "Capable of loading encoded image formats using stb_image.h",
            "Performant & efficient. Rescales large images to a smaller size before processing.",
          ]}
        />
      </div>
    </Layout >
  );
}
