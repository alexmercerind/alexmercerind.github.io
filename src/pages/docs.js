import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import ProjectSection from "@site/src/components/ProjectSection";
import styles from "./docs.module.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    document.getElementsByClassName('header-discord-link').item(0).onclick = () => alert('You may make me your friend on alexmercerind#3898. 😄');
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Layout
      title={"Docs"}
      description={"Docs for various libraries, modules & plugins."}
    >
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.scrollable}>
        <div className={styles.container}>
          <ProjectSection

            key={0}
            index={0}
            maintainer={"alexmercerind"}
            description={"Flutter audio/video playback, broadcast & recording library for Windows, Linux & macOS with playlist control. Native C/C++ & libvlc."}
            repository={"dart_vlc"}
            extraLanguages={["C++"]}

          />
        </div>
        <div className={styles.container}>
          <ProjectSection

            key={1}
            index={1}
            maintainer={"alexmercerind"}
            description={"Flutter library for window acrylic, mica & transparency effects (Windows, macOS & Linux)."}
            repository={"flutter_acrylic"}
            extraLanguages={["Dart"]}

          />
        </div>
        <div className={styles.container}>
          <ProjectSection

            key={2}
            index={2}
            maintainer={"alexmercerind"}
            repository={"flutter_media_metadata"}
            description={"A Flutter plugin to read metadata of media files. Supports Windows, Linux, macOS, Android, iOS & Web."}
            extraLanguages={["Dart"]}

          />
        </div>
        <div className={styles.container}>
          <ProjectSection

            key={2}
            index={2}
            maintainer={"alexmercerind"}
            repository={"flutter_native_view"}
            description={"Embedding native windows directly into Flutter window (scrolling support & Flutter widgets placement on-top). [WIP]"}
            extraLanguages={["Dart"]}

          />
        </div>
        <div className={styles.container}>
          <ProjectSection

            key={3}
            index={3}
            maintainer={"alexmercerind"}
            repository={"windows_taskbar"}
            description={"Flutter plugin serving utilities related to Windows taskbar."}
            extraLanguages={["Dart"]}

          />
        </div>
      </div>
      <div style={{ height: 16 }}>
      </div>
    </Layout>
  );
}