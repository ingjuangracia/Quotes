import React from 'react';

const QuoteBox = ({quote, author, changeQuote, color }) => {
    return (
        <div className="quoteBox">
            <h2 style={{color}}><i className="fas fa-quote-left"></i> {quote}</h2>
            <h3 style={{color}}>{author}</h3>
            <button style= {{background:color}} onClick={changeQuote}><i className="fas fa-angle-right"></i></button>
            
        </div>
    );
};

export default QuoteBox;