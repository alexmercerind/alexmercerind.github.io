import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Profile from "@site/src/components/Profile";
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
            <p data-aos="fade-up" data-aos-delay="500" className={styles.tagline}>I'm a Flutter (+ FFI, Platform channels, BLoC, Provider) &amp; React.js (+ React Router, React Native) developer.<br />I mainly write C++, Dart, Python &amp; JavaScript. I love solving people's problems &amp; built a number of open source libraries &amp; apps while doing this. Hopefully, few of my libraries &amp; projects are well loved by community &amp; I appreciate everyone who is using those in their apps &amp; other projects. I also enjoy writing native C++ Windows &amp; Linux code (as used in my Flutter plugins &amp; other libraries), dealing with media playback, reverse engineering APIs &amp; webscraping.</p>
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
      <main>
        <HomepageHeader />
      </main>
      <Profile />
    </Layout>
  );
}
