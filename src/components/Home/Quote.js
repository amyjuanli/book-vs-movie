import React from 'react'

const quoteBoxStyle = {
  padding: '20px',
  margin: '10vh auto',
  backgroundColor: '#ded6bc',
  borderRadius: '20px',
}
const textStyle = {
  fontSize: '1em',
  padding: '20px',
  textAlign: 'left',
}
const authorStyle = {
  padding: '20px',
  textAlign: 'right',
  fontStyle: 'italic',
}
const buttonsStyle = {
  padding:'20px',
}

export default function Quote({quote, className}) {
  return (
    <div id="quote-box" style={quoteBoxStyle} className={className}>
     <div id="text" style={textStyle}>
        <span>{quote.quote}</span>
      </div>
      <div id="author" style={authorStyle}>
        <span>{quote.author}</span>
      </div>
      <div id="buttons" style={buttonsStyle}>
        <a href={`https://twitter.com/share?url=&text=${quote.quote} By ${quote.author}`}target="_blank" id="tweet-quote">
          <button className="btn btn-info pull-bottom">Tweet!</button>
        </a>
      </div>
  </div> 
  )
}
