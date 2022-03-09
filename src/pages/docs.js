import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import styles from "./docs.module.css";

export default function Docs() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>
          <Link to="/docs/dart_vlc">dart_vlc</Link>
        </h1>
        <h1>
          <Link to="/docs/flutter_acrylic">flutter_acrylic</Link>
        </h1>
        <h1>
          <Link to="/docs/windows_taskbar">windows_taskbar</Link>
        </h1>
      </div>
    </Layout>
  );
}