import React, { useState, useEffect } from "react";
import { StarIcon, RepoForkedIcon, EyeIcon } from "@primer/octicons-react";

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
      ⭐ <a href={`https://github.com/${repository}`}>Please give us a star on GitHub</a> | 👍 {type == "pub.dev" ? <a href={`https://pub.dev/packages/${repository.split('/')[repository.split('/').length - 1]}`} >Consider liking us on pub.dev</a> : <a href={`https://pypi.org/project/${repository.split('/')[repository.split('/').length - 1]}`} >pypi.org</a>}
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