// Styles
import styles from '../styles/quotesContainer.module.css';

export default function QuotesContainer({ children }) {
    return(
        <div className={ styles.quotesContainer }>
            { children }
        </div>
    );
}