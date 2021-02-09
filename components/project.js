import {useEffect, useState} from 'react';

import ProjectTile from '../components/projecttile';
import styles from '../styles/Project.module.css';

export default function Project({maintainer, repository, achievements, links, images}) {
  const [achievementElements, setAchievementElements] = useState(null);
  const [linkElements, setLinkElements] = useState(null);
  let elements;

  useEffect(() => {
    elements = [];
    for (let achievement of achievements)
      elements.push(
        <div className={styles.Achievement}>{' • ' + achievement}</div>
      );
    setAchievementElements(elements);
    elements = [];
    for (let label of Object.keys(links))
      elements.push(
        <a href={links[label]} className={styles.Link}>{label}</a>
      );
    setLinkElements(elements);
  }, []);

  return <div className={styles.Project}>
    <ProjectTile images={images} maintainer={maintainer} repository={repository} />
    <div className={styles.Summary}>
      {achievementElements}
      <div className={styles.Links}>
        {linkElements}
      </div>
    </div>
  </div>
}