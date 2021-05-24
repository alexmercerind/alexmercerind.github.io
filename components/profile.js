import styles from '../styles/Profile.module.css';

export default function Profile() {
  return <div className={styles.ProfileCard}>
    <div className={styles.Profile}>
      <div className={styles.Picture}>
        <img className={styles.Image} src={'https://avatars.githubusercontent.com/u/28951144'} />
      </div>
      <div className={styles.Title}>Hitesh Kumar Saini</div>
      <div className={styles.Description}>India</div>
      <br />
      <div className={styles.Description}>My projects below show my skills.</div>
      <br />
      <div className={styles.Description}>I'm an 18 year old information technology student at <a target={'__blank'} href={'https://gbpuat.ac.in'}>GBPUAT</a>.</div>
      <div className={styles.Description}>I have primary interest in cross-platform &amp; web development, along with native code.</div>
      <div className={styles.Description}>I like to build experiences that people &amp; other developers like.</div>
      <div>
        <div>
          <div className={styles.SubHeader}>Frameworks &amp; Tools</div>
          <div className={styles.Description}>Flutter (Apps &amp; Plugins)</div>
          <div className={styles.Description}>Provider, GetX, Riverpod</div>
          <div className={styles.Description}>React.js, React Router, Next.js</div>
          <div className={styles.Description}>HTML/JS/CSS</div>
          <div className={styles.Description}>Node.js, express.js</div>
          <div className={styles.Description}>Git</div>
          <div className={styles.Description}>Flask, FastAPI</div>
          <div className={styles.Description}>Firebase, Heroku</div>
          <div className={styles.Description}>Visual Studio Code, Visual Studio, Android Studio, Sublime</div>
          <div className={styles.Description}>Asynchronous &amp; object oriented programming in C++, Python &amp; JS.</div>
        </div>
        <div>
          <div className={styles.SubHeader}>Languages</div>
          <div className={styles.Description}>C++</div>
          <div className={styles.Description}>Dart</div>
          <div className={styles.Description}>Python</div>
          <div className={styles.Description}>JavaScript/TypeScript</div>
        </div>
        <div>
          <div className={styles.SubHeader}>Experience</div>
          <div className={styles.Description}><a target={'__blank'} href={'https://hzplayer.com'}>SYQEL</a> • Intern • May 2021 - Present<br /></div>
          <div className={styles.Description}>Flutter developer • Writing cross platform music player with beautiful UI &amp; amazing features.</div>
          <div className={styles.Description}><a target={'__blank'} href={'https://petgroomers.in'}>PetGroomers</a> • Intern • April 2021 - Present</div>
          <div className={styles.Description}>Flutter developer • Writing client app with Firebase integration, RazorPay payments & cool UI.</div>
        </div>
      </div>
      <div className={styles.Divider} />
      <div className={styles.SubHeader}>Support My Work</div>
      <div className={styles.Description}>Don't forget to mention the project you like. 😉</div>
      <div className={styles.Contacts}>
        <a href={'https://www.buymeacoffee.com/alexmercerind'}>Buy me a coffee</a>
        <a href={'https://paypal.me/alexmercerind'}>PayPal</a>
      </div>
      <div className={styles.SubHeader}>Contact</div>
      <div className={styles.Description}>Want to hire me or wanna give me feedback? Contact me below.</div>
      <div className={styles.Contacts}>
        <a target={'__blank'} href={'mailto:saini123hitesh@gmail.com'}>saini123hitesh@gmail.com</a>
        <a target={'__blank'} href={'mailto:alexmercerind@gmail.com'}>alexmercerind@gmail.com</a>
        <a target={'__blank'} href={'https://github.com/alexmercerind'}>GitHub</a>
        <a target={'__blank'} href={'https://twitter.com/alexmercerind'}>Twitter</a>
        <a target={'__blank'} href={'https://www.linkedin.com/in/hitesh-kumar-saini-78b4a3209/'}>LinkedIn</a>
      </div>
    </div>
  </div>
}
