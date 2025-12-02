import styles from './Home.module.css';
import Snowfall from '../../components/Snowfall/Snowfall';
import ChristmasCard from '../../components/ChristmasCard/ChristmasCard';


export default function Home() {
return (
<div className={styles.container}>
<Snowfall />
<h2 className={styles.heading}>Welcome to the Holiday Spirit! ❄️</h2>
<ChristmasCard text="Have a magical Christmas!" />
</div>
);
}