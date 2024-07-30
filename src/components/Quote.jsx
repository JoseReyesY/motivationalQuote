// Styles
import styles from '../styles/quote.module.css';

// Functions
import splitTextAtComma from '../logic/SplitText.js';

// Others
import { motion } from "framer-motion";

// Component to load the quote
export default function Quote({ quotes }) {
    // Getting a random quote
    const min = 0;
    const max = quotes.length;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    const quote = quotes[random];

    // Cleaning the author name
    let author = "";

    if (quote != null) {
        author = quote.author;
    }

    const newAuthor = splitTextAtComma(author);
    
    if(quote != null) return(
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
                </div>
            </motion.div>
            
        </div>
    );
}