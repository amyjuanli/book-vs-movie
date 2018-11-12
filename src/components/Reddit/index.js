import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Reddit from './Reddit';

const URLbook = 'https://www.reddit.com/r/books/comments/';
const item1 = '92q3ta/what_movies_are_better_than_the_books_they_are';
const item2 = '1t972v/movies_vs_books';

const URL1 = 'https://www.reddit.com/r/books/comments/92q3ta/what_movies_are_better_than_the_books_they_are/.json';
// const LIMIT = '2';

// const URL2 = 
export default class index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         reddits: [
         ]
      }
    }
    
    getReddit1 = () => {
        axios.get(`${URLbook}${item1}/.json`).then(response => {
           let data =response.data[0].data.children[0].data; 
           let subcomments = response.data[1].data.children;
          //  console.log(subcomments);
          this.setState({
            reddits: [
              ...this.state.reddits, 
              {title: data.title,
                description: data.selftext,
                url: data.url,
                author: data.author,
                subcomments: subcomments
              }]
          })
        })
      }

      getReddit2 = () => {
        axios.get(`${URLbook}${item2}/.json`).then(response => {
          // console.log(response)
          let data =response.data[0].data.children[0].data; 
          let subcomments = response.data[1].data.children;
          // console.log(subcomments);
         this.setState({
           reddits: [
             {title: data.title,
               description: data.selftext,
               url: data.url,
               author: data.author,
               subcomments: subcomments
              }]
         })
       })
      }

  componentDidMount() {
      this.getReddit1();
  }
  render() {
    return (
      <div className="home">
      <div className="page-logo">
        <img style={{width: '200px'}} 
        src="https://i.redd.it/11xxd4ji9e311.png">
        </img>
        <a href="#" className="btn btn-blue" onClick={this.getReddit2}>Next topic</a>
      </div>
        <div className="grid-container-reddit">
        <div className="grid-item1-reddit">
        <Link to="/">Home </Link>
        <i className="fa fa-angle-double-left arrow-icon"></i></div>
          <div>
          {
              this.state.reddits.map((reddit, idx) => (
                // console.log(JSON.stringify(reddit))
                <Reddit key={idx} reddit={reddit} className="grid-item-reddit"></Reddit>
               
              ))
          }
          </div>
          <div className="grid-item4-reddit"><Link to="/youtube"><i className="fa fa-angle-double-right arrow-icon"></i> Youtube</Link></div>
        </div>
      </div>
    )
  }
}
