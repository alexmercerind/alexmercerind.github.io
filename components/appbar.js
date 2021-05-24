import styles from '../styles/AppBar.module.css';
import { MarkGithubIcon } from '@primer/octicons-react';

export default function AppBar({title, subtitle}) {
  return <nav className={styles.AppBar}>
    <div className={styles.AppBarContent}>
      <div className={styles.AppBarTitle}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.SubTitle}>{subtitle}</div>
      </div>
      <a target={'__blank'} className={styles.Icon} href={`https://github.com/${title}`}>
        <MarkGithubIcon className={styles.GitHubIcon} size='small' />
      </a>
    </div>
  </nav>
}
