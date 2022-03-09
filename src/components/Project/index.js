import React, { useEffect, useState } from "react";

import ProjectTile from "../ProjectTile";
import styles from "./styles.module.css";

export default function Project({ index, maintainer, repository, achievements, links, images, extraLanguages = [] }) {
  const [achievementElements, setAchievementElements] = useState(null);
  const [linkElements, setLinkElements] = useState(null);
  let elements;

  useEffect(() => {
    elements = [];
    for (let achievement of achievements)
      elements.push(
        <li className={styles.achievement}>{achievement}</li>
      );
    setAchievementElements(elements);
    elements = [];
    for (let label of Object.keys(links))
      elements.push(
        <a href={links[label]} className={styles.link}>{label}</a>
      );
    setLinkElements(elements);
  }, []);

  return <div className={styles.project}>
    <ProjectTile index={index} images={images} maintainer={maintainer} repository={repository} extraLanguages={extraLanguages} />
    <div className={styles.summary}>
      {achievementElements}
      <div className={styles.links}>
        {linkElements}
      </div>
    </div>
  </div>
}