// Styles
import styles from '../styles/quoteCard.module.css';

export default function QuoteCard({ text, author }) {
    return(
        <div className={ styles.quoteCard }>
            <p className={ styles.quoteText }>"{ text }"</p>
            <p className={ styles.quoteAuthor }>{ author }</p>
        </div>
    );
}