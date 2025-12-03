import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gifts from './pages/Gifts/Gifts';

export default function App() {
return ( <Router> <div className={styles.app}> <Header />

    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gifts" element={<Gifts />} />
      </Routes>
    </main>

    <Footer />
  </div>￼

</Router>

);
}
