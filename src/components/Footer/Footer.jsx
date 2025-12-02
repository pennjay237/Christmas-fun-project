import styles from './Footer.module.css';

export default function Footer() {
return ( <footer className={styles.footer}> <p>❄️ Made with love for Christmas ❄️</p> <p>© {new Date().getFullYear()} Christmas Wonderland</p> </footer>
);
}
