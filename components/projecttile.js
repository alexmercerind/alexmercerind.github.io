import React, {useEffect, useState} from 'react';
import {StarIcon, RepoForkedIcon, EyeIcon, RepoIcon} from '@primer/octicons-react';
import styles from '../styles/ProjectTile.module.css';

const LANGUAGE_COLORS = {
  'Dart': '#00B4AB',
  'Python': '#3572A5',
  'C': '#555555',
  'C++': '#F34B7D',
  'C#': '#178600',
  'Java': '#B07219',
  'JavaScript': '#F1E05A',
  'TypeScript': '#2B7489',
  'HTML': '#E44B23',
  'CSS': '#563D7C',
}

export default function ProjectTile({maintainer, repository, images}) {
  
  const [repositoryJSON, setRepositoryJSON] = useState(null);
  const [imageElements, setImagesElements] = useState(null);

  useEffect( async () => {
    if (images !== undefined) {
      let imageElements = [];
      for (let image of images) {
        imageElements.push(
          <img style={{maxWidth: `${100 / images.length}%`, height: 'auto'}} src={image}></img>
        )
      }
      setImagesElements(imageElements);
    }
    let response = await fetch(`https://api.github.com/repos/${maintainer}/${repository}`);
    let responseJSON = await response.json();
    setRepositoryJSON(responseJSON);
  }, []);

  return <div className={styles.Card}>
    <div className={styles.Images}>
      {imageElements}
    </div>
    <div className={styles.CardContent}>
      <div className={styles.LanguageBar}>
        <div className={styles.Icon}>
          <RepoIcon size='medium' />
        </div>
        <a href={repositoryJSON?.html_url} target={'__blank'} className={styles.Title}>
          {repository}
        </a>
      </div>
      <div className={styles.IconBar}>
        <div className={styles.IconContainer}>
          <div className={styles.Icon}>
            <StarIcon size='small' />
          </div>
          <div className={styles.IconLabel}>
            {(repositoryJSON?.stargazers_count ?? 'Unknown') + ' Stars'}
          </div>
        </div>
        <div className={styles.IconContainer}>
          <div className={styles.Icon}>
            <RepoForkedIcon size='small' />
          </div>
          <div className={styles.IconLabel}>
            {(repositoryJSON?.forks_count ?? 'Unknown') + ' Forks'}
          </div>
        </div>
        <div className={styles.IconContainer}>
          <div className={styles.Icon}>
            <EyeIcon size='small' />
          </div>
          <div className={styles.IconLabel}>
            {(repositoryJSON?.subscribers_count ?? 'Unknown') + ' Watchers'}
          </div>
        </div>
      </div>
      <div className={styles.Divider}></div>
      <div className={styles.Description}>
        {repositoryJSON?.description?.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '')}
      </div>
      <div className={styles.LanguageBar}>
        <div style = {{borderRadius: '50%', marginRight: 8, height: 16, width: 16, backgroundColor: LANGUAGE_COLORS[repositoryJSON?.language]}}></div>
        <div className={styles.IconLabel}>
          {repositoryJSON?.language}
        </div>
      </div>
      <div className={styles.ButtonBar}>
        <a className={styles.Button} target={'__blank'} href={repositoryJSON?.html_url}>
          {'REPOSITORY'}
        </a>
      </div>
    </div>
  </div>
}