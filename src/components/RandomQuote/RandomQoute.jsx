import { useState, useEffect } from 'react';
import styles from './RandomQuote.module.css';

export default function RandomQuote() {
const [quote, setQuote] = useState(null);

const fetchQuote = async () => {
try {
const res = await fetch('/src/data/data.json');
if (!res.ok) throw new Error('Failed to load quotes');
const data = await res.json();
const randomIndex = Math.floor(Math.random() * data.length);
setQuote(data[randomIndex]);
} catch (err) {
setQuote({ text: 'Unable to load quote.', author: '' });
console.error(err);
}
};

useEffect(() => {
fetchQuote();
}, []);

const handleNewQuote = () => {
fetchQuote();
};

if (!quote) return <p className={styles.quote}>Loading quote…</p>;

return ( <div className={styles.quoteBox}> <p className={styles.text}>"{quote.text}"</p> <p className={styles.author}>— {quote.author}</p> <button className={styles.button} onClick={handleNewQuote}>
New Quote </button> </div>
);
}
