import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import AOS from "aos";

import styles from "./docs.module.css";

export default function Docs() {
  let i = 0;

  useEffect(() => {
    document.getElementsByClassName('header-discord-link').item(0).onclick = () => alert('You may make me your friend on alexmercerind#3898. 😄');
    AOS.init({
      once: false,
      mirror: true,
      delay: 200,
    });
  }, []);

  return (
    <Layout
      title={`Docs`}
      description={"Docs for various libraries, modules & plugins."}
    >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.container}>
        <div className={styles.card}>
          {
            [
              "dart_vlc",
              "flutter_acrylic",
              "flutter_media_metadata",
              "windows_taskbar"
            ].map((e) => {
              i++;
              return <Link key={i} to={`/docs/${e}`}><h1 className={styles.project} data-aos="fade-up" data-aos-delay={`${i * 100}`}>{e}</h1></Link>;
            })
          }
        </div>
      </div>
    </Layout>
  );
}