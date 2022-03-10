import React, { useState, useEffect } from "react";
import { StarIcon, RepoForkedIcon, EyeIcon } from "@primer/octicons-react";
import Head from "@docusaurus/Head";

import styles from "./styles.module.css";

export default function DocsHeader({ repository, type }) {
  const [repositoryJSON, setRepositoryJSON] = useState(null);
  useEffect(async () => {
    let response = await fetch(`https://api.github.com/repos/${repository}`);
    let responseJSON = await response.json();
    setRepositoryJSON(responseJSON);
  }, []);

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <a target="_blank" href={`https://github.com/${repository}`}>GitHub</a> • {type == "pub.dev" ? <a target="_blank" href={`https://pub.dev/packages/${repository.split('/')[repository.split('/').length - 1]}`} >pub.dev</a> : <a target="_blank" href={`https://pypi.org/project/${repository.split('/')[repository.split('/').length - 1]}`} >PyPI.org</a>} • Give us a ⭐ on GitHub.
      <div className={styles.iconBar}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <StarIcon size="small" />
          </div>
          <div className={styles.iconLabel}>
            {(repositoryJSON?.stargazers_count ?? "Unknown") + " Stars"}
          </div>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <RepoForkedIcon size="small" />
          </div>
          <div className={styles.iconLabel}>
            {(repositoryJSON?.forks_count ?? "Unknown") + " Forks"}
          </div>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <EyeIcon size="small" />
          </div>
          <div className={styles.iconLabel}>
            {(repositoryJSON?.subscribers_count ?? "Unknown") + " Watchers"}
          </div>
        </div>
      </div>
    </div>
  );
}