// Components
import QuoteCard from './QuoteCard';

// Styles
import styles from '../styles/quotesContainer.module.css';

// React imports
import { useEffect, useState } from "react";

const URL = 'https://type.fit/api/quotes';

export default function QuotesContainer() {
    // State to save the quotes
    const [ quotes, setQuotes ] = useState([]);

    // Fetch to get the quotes
    useEffect(() => {
        async function fetchQuotes () {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            setQuotes(data);
        }
        fetchQuotes();
    }, []);

    function splitTextAtComma(str) {
        if (!str) {
            return 'Anonym';
        } else if(str === 'type.fit') {
            return 'Anonym';
        }
    
        const parts = str.split(',');
        return parts[0].trim();
    }

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