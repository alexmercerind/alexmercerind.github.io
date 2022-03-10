import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import styles from "./docs.module.css";

export default function Docs() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 data-aos="fade-up" data-aos-delay="100">
          <Link to="/docs/dart_vlc">dart_vlc</Link>
        </h1>
        <h1 data-aos="fade-up" data-aos-delay="200">
          <Link to="/docs/flutter_acrylic">flutter_acrylic</Link>
        </h1>
        <h1 data-aos="fade-up" data-aos-delay="300">
          <Link to="/docs/windows_taskbar">windows_taskbar</Link>
        </h1>
      </div>
    </Layout>
  );
}