import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Youtube from './Youtube';

let count = 0; // video object index in the array

const KEY = 'AIzaSyDq3kPPoW_ZkOIUKaFHTWhgeZXwi-k_8rg';

export default class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       videos: [],
       video: {
        videoId: "DYsNzgCDX64",
        title: "The Jungle Book || Full Movie in Hindi 2016 Tarzan Ka Beta",
        thumbnail: {
          url: "https://i.ytimg.com/vi/DYsNzgCDX64/default.jpg"
        }
       },
    }
  }

  loadVids = () => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?safeSearch=moderate&order=relevance&part=snippet&q=book-movie&maxResults=5&key=${KEY}`).then(response => {
      // console.log(response.data.items);
      this.setState({
        videos: response.data.items,
      })
    })
  }

  // initState = () => {
  //   this.setState((prevState) => ({
  //     video: {
  //       videoId: prevState.videos[0].id.videoId,
  //       title: prevState.videos[0].snippet.title,
  //       thumbnail: prevState.videos[0].snippet.thumbnail.default 
  //     }
  //   }))
  // }

  getNextVideo = () => {
    if(count < this.state.videos.length) {
      let videoObj = this.state.videos[count];
      this.setState({
        video: {
          videoId: videoObj.id.videoId, 
          title: videoObj.snippet.title,
          thumbnail: videoObj.snippet.thumbnails.default, 
        }
      })
      count++;
    } else {
      count = 0;
    }
   
  }

  componentDidMount() {
    // console.log('component mount')
    this.loadVids();
  }
  
  render() {
    const {videoId, title, thumbnail} = this.state.video;
    // console.log('id', videoId)
    return (
      <div className="home">
        <div className="page-logo">
          <img style={{width: '200px'}} 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" 
          alt="Youtube logo" />
          <a href="#" className="btn btn-blue" onClick={this.getNextVideo}>Next video</a>
          <div className="grid-container-youtube">
            <div className="grid-item1-youtube">
        <Link to="/reddit">Reddit </Link>
        <i className="fa fa-angle-double-left arrow-icon"></i></div>
        <div>
        <Youtube videoId={videoId} title ={title} thumbnail= {thumbnail}/>
        </div>
        <div className="grid-item4-youtube"><Link to="/home"><i className="fa fa-angle-double-right arrow-icon"></i> Home</Link></div>
        </div>
      </div>
      </div>
    )
  }
}
