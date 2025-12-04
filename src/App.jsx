import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gifts from "./pages/Gifts/Gifts";
import styles from "./App.module.css";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.app} ${theme === "dark" ? styles.dark : styles.light}`}>
      <Router>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gifts" element={<Gifts />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
