// Components
import Quote from "./components/Quote";
import QuotesContainer from "./components/QuotesContainer";

// Styles
import './index.css';

// React imports
import { useEffect, useState } from "react";

// API URL
const URL = 'https://type.fit/api/quotes';

function App() {
  // State to save the quotes
  const [ quotes, setQuotes ] = useState([]);

  // Fetch to get the quotes
  useEffect(() => {
      async function fetchQuotes () {
          const response = await fetch(URL);
          const data = await response.json();

          setQuotes(data);
      }
      fetchQuotes();
  }, []);

  return (
    <>
      <Quote
        quotes={ quotes }
      />
      <QuotesContainer 
        quotes={ quotes }
      />
    </>
  );
}

export default App
