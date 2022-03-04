import React from 'react';

const QuoteBox = ({quote, author, changeQuote, color }) => {
    return (
        <div className="quoteBox">
            <h4 style={{color}}><i className="fas fa-quote-left"></i>{quote}</h4>
            <h5 style={{color}}>{author}</h5>
            <button style= {{background:color}} onClick={changeQuote}><i className="fas fa-angle-right"></i></button>
            
        </div>
    );
};

export default QuoteBox;