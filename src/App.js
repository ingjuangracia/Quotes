import './App.css';
import quotes from './quotes.json';
import { useState } from 'react';
import QuoteBox from './component/QuoteBox';

function App() {

  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

  const getNumber = max => Math.floor(Math.random() * max);

  const [sentence, setSentence] = useState(quotes[getNumber(quotes.length)]);

  const [background, setBackground] = useState(colors[getNumber(colors.length)]);


  const handleQuote = () => {

    const index = getNumber(quotes.length);
    setSentence(quotes[index]);
    setBackground(colors[getNumber(colors.length)]);
  }

  return (
    <div className="app" style={{ background }}>
      <QuoteBox
        quote={sentence.quote}
        author={sentence.author}
        changeQuote={handleQuote}
        color={background}
      />
    </div>
  );
}


export default App;