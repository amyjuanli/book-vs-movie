import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Reddit from './Reddit';

const URL = 'http://www.reddit.com/r/books/comments/new.json';
const LIMIT = '2';

export default class index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         reddits: []
      }
    }
    
    getReddit = () => {
        axios.get(`${URL}?&limit=${LIMIT}`).then(response => {
            console.log(response.data.data.children);
          this.setState({
            reddits: response.data.data.children,
          })
        })
  
      }
  componentDidMount() {
      this.getReddit();
  }
  render() {
    return (
      <div className="home">
        <div>
        {
            this.state.reddits.map((reddit, idx) => (
                <Reddit key = {idx} reddit={reddit}></Reddit>
            ))
        }
        </div>
        <button className="btn btn-info pull-bottom" onClick={this.getReddit}>Another Reddit</button>
        <Link to="/">Home</Link>
        <i className="fa fa-angle-double-left arrow-icon"></i> 
        <i className="fa fa-angle-double-right arrow-icon"></i> 
        <Link to="/youtube">Youtube</Link>
      </div>
    )
  }
}
