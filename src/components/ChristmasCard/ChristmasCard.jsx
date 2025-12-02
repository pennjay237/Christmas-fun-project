import styles from './ChristmasCard.module.css';

export default function ChristmasCard({ text }) {
return ( <div className={styles.card}> <p>{text}</p> </div>
);
}
