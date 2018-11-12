import React, { Component } from 'react';
import { quotes } from '../../data/quotes';
import { Link } from 'react-router-dom';
import Quote from './Quote';

class Home extends Component {
constructor(props) {
  super(props)

  this.state = {
     quotes:[],
  }
}

randomQuote =() => {
 const randomIdx1 = Math.floor(Math.random() * quotes.length);
 const randomIdx2 = Math.floor(Math.random() * quotes.length);
  this.setState({
    quotes:[quotes[randomIdx1], quotes[randomIdx2]],
  })
 
}
componentDidMount = () => {
  this.randomQuote();
}


  render() {
    return (
      <div className="home">
        <div className="grid-container">
         <div className="grid-item1"></div>
        {
          this.state.quotes.map((quote, idx) => (
              <Quote key = {idx} className="grid-item" quote={quote}></Quote>
          ))
        }
        <div className="grid-item4"><Link to="/reddit"><i className="fa fa-angle-double-right arrow-icon"></i> Reddit</Link></div>
        <div className="grid-item5"><img src="http://4.bp.blogspot.com/--vVGyhWo610/VLcuSaQZROI/AAAAAAAAADg/6mYoDt05hJg/s1600/booksvsmovies.jpg" alt="movie vs book"/></div>
        </div>
      
      </div>
    );
  }
}

export default Home;
