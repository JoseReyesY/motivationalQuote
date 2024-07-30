// Styles
import styles from '../styles/quoteCard.module.css';

// Functions
import splitTextAtComma from '../logic/SplitText.js';

export default function QuoteCard({ text, author }) {
    const newAuthor = splitTextAtComma(author);

    return(
        <div className={ styles.quoteCard }>
            <p className={ styles.quoteText }>"{ text }"</p>
            <p className={ styles.quoteAuthor }>{ newAuthor }</p>
        </div>
    );
}