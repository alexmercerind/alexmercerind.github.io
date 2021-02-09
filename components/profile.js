import styles from '../styles/Profile.module.css';

export default function Profile() {
  return <div className={styles.ProfileCard}>
    <div className={styles.Profile}>
      <div className={styles.Picture}>
        <img className={styles.Image} src={'https://avatars.githubusercontent.com/u/28951144'} />
      </div>
      <div className={styles.Title}>Hitesh Kumar Saini</div>
      <div className={styles.Description}>India</div>
      <div className={styles.Description}>I'm an 18 year old developer, with primary interest in web &amp; cross platform development.<br />You may see few of my projects below.</div>
      <div className={styles.Row}>
        <div>
          <div className={styles.SubHeader}>Used Technologies</div>
          <div className={styles.Description}>Flutter (Apps &amp; Plugins)</div>
          <div className={styles.Description}>React.js</div>
          <div className={styles.Description}>HTML/JS/CSS</div>
          <div className={styles.Description}>Flask, FastAPI</div>
          <div className={styles.Description}>Node.js, express.js</div>
          <div className={styles.Description}>Git, GitHub, Visual Studio Code</div>
        </div>
        <div>
          <div className={styles.SubHeader}>Programming Languages</div>
          <div className={styles.Description}>C/C++</div>
          <div className={styles.Description}>Python</div>
          <div className={styles.Description}>JavaScript</div>
          <div className={styles.Description}>Dart</div>
          <div className={styles.Description}>C#</div>
        </div>
      </div>
      <div className={styles.Divider} />
      <a className={styles.SubHeader}>Contact</a>
      <div className={styles.Description}><br />Got some feedback or work for me?</div>
      <div className={styles.Contacts}>
        <a href={'mailto:saini123hitesh@gmail.com'}>saini123hitesh@gmail.com</a>
        <a href={'mailto:alexmercerind@gmail.com'}>alexmercerind@gmail.com</a>
        <a href={'https://github.com/alexmercerind'}>GitHub</a>
        <a href={'https://twitter.com/alexmercerind'}>Twitter</a>
        <a href={'https://instagram.com/alexmercerind'}>Instagram</a>
      </div>
    </div>
  </div>
}