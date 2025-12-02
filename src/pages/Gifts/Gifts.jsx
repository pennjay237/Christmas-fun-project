import styles from './Gifts.module.css';

export default function Gifts() {
const gifts = [
'🎁 Wrapped Surprise Box',
'🧸 Christmas Teddy Bear',
'🍪 Holiday Cookie Basket',
'🕯️ Festive Candle Set'
];

return ( <div className={styles.container}> <h2>Christmas Gifts 🎁</h2>

  <ul className={styles.list}>
    {gifts.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>

);
}
