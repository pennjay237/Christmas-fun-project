/** @format */

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Header.module.css";

export default function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>🎄 Christmas Wonderland 🎅</h1>

			<nav className={styles.nav}>
				<Link to="/">Home</Link>
				<Link to="/about">About This App</Link>
				<Link to="/gifts">Gifts</Link>
			</nav>

			<button className={styles.themeButton} onClick={toggleTheme}>
				{theme === "light" ? "🌙 Dark Mode" : "❄️ Light Mode"}
			</button>
		</header>
	);
}
