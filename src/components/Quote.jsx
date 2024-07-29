// Icons
import { FaHeart } from "react-icons/fa";

// Styles
import styles from '../styles/quote.module.css';

// React imports
import { useEffect, useState } from "react";

// Others
import { motion } from "framer-motion";

const URL = 'https://type.fit/api/quotes';

// Component to load the quote
export default function Quote() {
    // State to save the quotes
    const [ quote, setQuote ] = useState([]);
    const [ like, setLike ] = useState(false);
    const author = quote.author;

    // Fetch to get the quotes
    useEffect(() => {
        async function fetchQuotes () {
            const response = await fetch(URL);
            const data = await response.json();

            const min = 0;
            const max = data.length;
            const random = Math.floor(Math.random() * (max - min + 1) + min);

            setQuote(data[random]);
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

    const newAuthor = splitTextAtComma(author);
    const activeHeart = like ? styles.activeHeart : styles.heart;
    
    return(
        <div className={ styles.mainContainer }>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0, 0.6, 0.5, 1.01]
                }}
                className={ styles.quoteContainer }
            >
                <p className={ styles.quote }>"{ quote.text }"</p>
            
                <div className={ styles.infoContainer }>
                <p className={ styles.quoteAuthor }>- { newAuthor }</p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                >
                    <button className={ styles.likeButton } onClick={ () => setLike(!like) }>
                            <FaHeart className={[`${ styles.heart }, ${ activeHeart }`]} />
                    </button>
                </motion.div>
                </div>
            </motion.div>
            
        </div>
    );
}