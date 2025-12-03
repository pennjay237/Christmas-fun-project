import { useState } from 'react';
import styles from './questionAnswer.module.css';

const categories = {
"General Knowledge": [
{ question: "When is Christmas celebrated?", answer: "Christmas is celebrated on December 25th each year." },
{ question: "Why do people celebrate Christmas?", answer: "People celebrate Christmas to commemorate the birth of Jesus Christ and for cultural festivities." },
{ question: "What is the origin of Christmas?", answer: "Christmas originated as a Christian holiday, later influenced by Roman winter festivals like Saturnalia." },
{ question: "Who is Santa Claus?", answer: "Santa Claus is a legendary figure who delivers gifts to children, inspired by Saint Nicholas and folklore." },
{ question: "Why is Christmas on December 25th?", answer: "December 25 was chosen in the 4th century, coinciding with Roman festivals such as Sol Invictus." },
{ question: "What are some traditional Christmas symbols?", answer: "Common symbols include Christmas trees, lights, wreaths, mistletoe, gifts, and Santa Claus." }
],
"Traditions & Customs": [
{ question: "Why do people decorate Christmas trees?", answer: "Decorating trees comes from pagan winter solstice traditions symbolizing life, later adopted by Christians." },
{ question: "What is the significance of Christmas lights?", answer: "Lights represent Jesus as the 'light of the world' and the joy of the season." },
{ question: "Why do people exchange gifts?", answer: "Gift-giving symbolizes the gifts given to Jesus by the Magi and spreading goodwill." },
{ question: "What is the story behind Christmas stockings?", answer: "Stockings are said to originate from a legend of Saint Nicholas providing gold to a poor family." },
{ question: "Why do people hang wreaths and mistletoe?", answer: "Wreaths symbolize eternity; mistletoe is a symbol of love and friendship." },
{ question: "What are traditional Christmas foods in different countries?", answer: "Examples include roast turkey in the US, panettone in Italy, and mince pies in the UK." }
],
"Religious Questions": [
{ question: "What is the Christian meaning of Christmas?", answer: "It celebrates the birth of Jesus Christ, the Son of God." },
{ question: "Who were the Three Wise Men?", answer: "The Magi, or Three Wise Men, brought gifts to baby Jesus according to the Bible." },
{ question: "Why is Jesus’ birth celebrated at Christmas?", answer: "To honor and remember the nativity of Christ." },
{ question: "What is the significance of Advent?", answer: "Advent is the period of preparation leading up to Christmas." },
{ question: "What is the difference between Christmas Eve and Christmas Day?", answer: "Christmas Eve is the night before Christmas; Christmas Day celebrates the birth itself." }
],
"Fun & Pop Culture": [
{ question: "When did Santa Claus become popular in the U.S.?", answer: "Santa became widely popular in the 19th century, influenced by literature and illustrations." },
{ question: "Why does Santa wear red?", answer: "The red suit became iconic largely due to Coca-Cola advertising in the 1930s." },
{ question: "Where does Santa live?", answer: "Santa Claus is said to live at the North Pole." },
{ question: "How do reindeer fly?", answer: "According to legend, Santa’s reindeer are magical and can fly to deliver gifts." },
{ question: "What are famous Christmas songs and movies?", answer: "Songs: 'Jingle Bells', 'Silent Night'; Movies: 'Home Alone', 'Elf', 'The Grinch'." },
{ question: "What are unusual Christmas traditions around the world?", answer: "For example, Catalonia has 'Tió de Nadal', Japan eats KFC, and Iceland has 13 Yule Lads." }
]
};

export default function QuestionAnswer() {
const [selectedCategory, setSelectedCategory] = useState("");
const [visibleAnswers, setVisibleAnswers] = useState({});

const handleCategoryChange = (e) => {
setSelectedCategory(e.target.value);
setVisibleAnswers({});
};

const toggleAnswer = (index) => {
setVisibleAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
};

return ( <div className={styles.container}> <h2 className={styles.heading}>Frequently Asked Questions About Christmas</h2>
  <p className={styles.introParagraph}>Click on the select a category drop down bellow and choose a category to know about Christmas.</p>
  <select onChange={handleCategoryChange} value={selectedCategory} className={styles.select}>
    <option value="">Select a category</option>
    {Object.keys(categories).map((cat, idx) => (
      <option key={idx} value={cat}>{cat}</option>
    ))}
  </select>

  {selectedCategory && (
    <div className={styles.questions}>
      {categories[selectedCategory].map((item, idx) => (
        <div key={idx} className={styles.qnaItem}>
          <p className={styles.question}>{item.question}</p>
          <button className={styles.button} onClick={() => toggleAnswer(idx)}>
            {visibleAnswers[idx] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers[idx] && <p className={styles.answer}>{item.answer}</p>}
        </div>
      ))}
    </div>
  )}
</div>

);
}