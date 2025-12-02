import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🎄 Christmas Wonderland 🎅</h1>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About Christmas</Link>
        <Link to="/gifts">Gifts</Link>
      </nav>
    </header>
  );
}
