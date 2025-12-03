import { useState, useEffect } from "react";
import styles from "./ChristmasCountdown.module.css";

export default function ChristmasCountdown() {
  const calculateTimeLeft = () => {
    const christmasDate = new Date("December 25, 2025 00:00:00");
    const now = new Date();
    const difference = christmasDate - now;

    if (difference <= 0) return {};

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft.days && !timeLeft.hours) {
    return <p>🎄 Christmas is here! Merry Christmas! 🎅</p>;
  }

  return (
    <div className={styles.countdownContainer}>
      <span className={styles.icon}>🎄</span>

      <div className={styles.countdownItem}>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>Days</span>
      </div>

      <div className={styles.countdownItem}>
        <span className={styles.number}>{timeLeft.hours}</span>
        <span className={styles.label}>Hours</span>
      </div>

      <div className={styles.countdownItem}>
        <span className={styles.number}>{timeLeft.minutes}</span>
        <span className={styles.label}>Minutes</span>
      </div>

      <div className={styles.countdownItem}>
        <span className={styles.number}>{timeLeft.seconds}</span>
        <span className={styles.label}>Seconds</span>
      </div>

      <span className={styles.icon}>🎁</span>
    </div>
  );
}
