import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Reddit from './Reddit';


const URL1 = 'https://www.reddit.com/r/books/comments/92q3ta/what_movies_are_better_than_the_books_they_are/.json';
const LIMIT = '2';


export default class index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         reddits: [
         ]
      }
    }
    
    getReddit1 = () => {
        axios.get(`${URL1}`).then(response => {
            // console.log(response.data[0].data.children[0].data.selftext);
          this.setState({
            reddits: [...this.state.reddits, {title: response.data[0].data.children[0].data.title, description: response.data[0].data.children[0].data.selftext}]
          })
        })
      }

  componentDidMount() {
      this.getReddit1();
  }
  render() {
    const arrowIconStyle = {
      textAlign: 'left',
  }
    return (
      <div className="home">
      <div className="grid-container-reddit">
      <div className="grid-item1-reddit">
      <Link to="/">Home</Link>
      <i className="fa fa-angle-double-left arrow-icon"></i></div>
        <div>
        {
            this.state.reddits.map((reddit, idx) => (
                <Reddit key = {idx} reddit={reddit} className="grid-item-reddit"></Reddit>
            ))
        }
        </div>
        <div className="grid-item4-reddit"><Link to="/youtube"><i className="fa fa-angle-double-right arrow-icon" style={arrowIconStyle}></i> Youtube</Link></div>
        </div>
      </div>
    )
  }
}
