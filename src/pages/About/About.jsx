import styles from './About.module.css';

export default function About() {
return ( <div className={styles.container}> <h2 className={styles.heading}>About This Christmas App 🎄✨</h2>

  <p className={styles.text}>
    This Christmas Fun App was created as a playful project to explore and
    practice different <strong>React</strong> and <strong>JavaScript</strong> skills while building a
    festive experience for users. Every page, feature, and animation is designed 
    to bring a little more Christmas joy to the screen.
  </p>

  <p className={styles.text}>
    The app includes multiple interactive components such as a live
    <strong> Christmas Countdown</strong> that shows the days, hours, minutes, and seconds 
    left until Christmas Day. It updates every second using real–time 
    JavaScript date calculations.
  </p>

  <p className={styles.text}>
    You’ll also find a <strong>Random Christmas Quote Generator</strong>, which pulls a
    different holiday-themed message from a local <code>data.json</code> file each time the page 
    loads—or whenever the user clicks “New Quote.” This feature originally tried using an 
    online API, but after running into issues, it was replaced with a faster and more 
    reliable local data file.
  </p>

  <p className={styles.text}>
    The Home page includes festive components like snowfall animations,
    Christmas cards, and a fun <strong>Q&A section</strong> where users can show or hide 
    answers to holiday-themed questions. Each feature uses React’s state 
    management and event handling to create smooth interactions.
  </p>

  <p className={styles.text}>
    Navigation between pages—Home, About, and Gifts—is handled using 
    <code>react-router-dom</code>, allowing for a simple yet effective multi–page experience.
  </p>

  <p className={styles.text}>
    This project is still evolving every day. New components, features,
    animations, and ideas are continuously added as part of a fun 
    learning journey. The goal is not just to build a Christmas-themed 
    website, but to experiment with different React JSX approaches, 
    styling techniques, and problem–solving exercises in real time.
  </p>

  <p className={styles.text}>
    Whether you are here to explore Christmas gifts, enjoy some festive 
    quotes, or simply watch the countdown tick away, this app is meant 
    to spread cheer—while also sharpening React development skills along 
    the way. 🎄🎁
  </p>
</div>

);
}
