import styles from './Home.module.css';
import Snowfall from '../../components/Snowfall/Snowfall';
import ChristmasCard from '../../components/ChristmasCard/ChristmasCard';
import RandomQuote from '../../components/RandomQuote/RandomQoute';
import QuestionAnswer from '../../components/questionAnswer/questionAnswer'; 
import ChristmasCountdown from '../../components/ChristmasCountdown/ChristmasCountdown';

export default function Home() {
  return (
    <div className={styles.container}>
      <Snowfall />

      <ChristmasCountdown />

      <h2 className={styles.heading}>Welcome to the Holiday Spirit! 🎅✨</h2>

      <RandomQuote />

      <ChristmasCard text="Have a magical Christmas! 🎄" />
      <ChristmasCard text="Wishing you joy and warmth! ❄️" />

      <QuestionAnswer />
    </div>
  );
}
