import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { quotes } from '../../data/quotes';
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
    const arrowIconStyle = {
        textAlign: 'left',
    }
    return (
      <div className="home">
        <div className="grid-container">
        {
          this.state.quotes.map((quote, idx) => (
              <Quote key = {idx} className="grid-item" quote={quote}></Quote>
          ))
        }
        <div className="grid-item3"><img src="http://4.bp.blogspot.com/--vVGyhWo610/VLcuSaQZROI/AAAAAAAAADg/6mYoDt05hJg/s1600/booksvsmovies.jpg" alt="movie vs book"/></div>
      
        </div>
      <i className="fa fa-angle-double-right arrow-icon" style={arrowIconStyle}></i> <Link to="/reddit">Reddit</Link>
      </div>
    );
  }
}

export default Home;
