import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import ProjectTile from "@site/src/components/ProjectTile";
import styles from "./index.module.css";
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
        <h1 className={styles.docs}>Docs</h1>
        <div className={styles.container}>
          <ProjectTile
            type={'docs'}
            key={0}
            index={0}
            maintainer={"alexmercerind"}
            repository={"dart_vlc"}
            extraLanguages={["C++"]}
            achievements={[]}
            links={{}}
          />
        </div>
        <div className={styles.container}>
          <ProjectTile
            type={'docs'}
            key={1}
            index={1}
            maintainer={"alexmercerind"}
            repository={"flutter_acrylic"}
            extraLanguages={["Dart"]}
            achievements={[]}
            links={{}}
          />
        </div>
        <div className={styles.container}>
          <ProjectTile
            type={'docs'}
            key={2}
            index={2}
            maintainer={"alexmercerind"}
            repository={"flutter_media_metadata"}
            extraLanguages={["Dart"]}
            achievements={[]}
            links={{}}
          />
        </div>
        <div className={styles.container}>
          <ProjectTile
            type={'docs'}
            key={3}
            index={3}
            maintainer={"alexmercerind"}
            repository={"windows_taskbar"}
            extraLanguages={["Dart"]}
            achievements={[]}
            links={{}}
          />
        </div>
      </div>
      <div style={{ height: 16 }}>
      </div>
    </Layout>
  );
}