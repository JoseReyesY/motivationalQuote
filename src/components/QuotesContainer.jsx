// Components
import QuoteCard from './QuoteCard';

// Styles
import styles from '../styles/quotesContainer.module.css';

export default function QuotesContainer({ quotes }) {
    return(
        <div className={ styles.quotesContainer }>
            {
                quotes.map(quote => (
                    <QuoteCard 
                        key={ quote.text }
                        text={ quote.text }
                        author={ quote.author }
                    />
                ))
            }
        </div>
    );
}