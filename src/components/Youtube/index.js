import React, { Component } from 'react'
import axios from 'axios';
import Youtube from './Youtube';

const URL = 'https://www.googleapis.com/youtube/v3/serach?';
const KEY = 'AIzaSyDq3kPPoW_ZkOIUKaFHTWhgeZXwi-k_8rg';
// let playlistId = 'PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc';
const QUERY = 'safeSearch=moderate&order=relevance&part=snippet&q=book+and+movie+which+is+better&maxResults=5';
export default class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       videos: []
    }
  }
  loadVids = () => {
    // https://www.googleapis.com/youtube/v3/search?safeSearch=moderate&order=relevance&part=snippet&q=book-movie&maxResults=5&key=AIzaSyDq3kPPoW_ZkOIUKaFHTWhgeZXwi-k_8rg

    axios.get(`https://www.googleapis.com/youtube/v3/search?safeSearch=moderate&order=relevance&part=snippet&q=book-movie&maxResults=5&key=${KEY}`).then(response => {
      console.log(response.data.items);
    
      this.setState({
        videos: response.data.items
      })
    })
  }
  

  componentDidMount() {
    console.log('component mount')
    this.loadVids();
  }
  
  render() {
    let videos = this.state.videos;
    // let videoId = videos.videoId;
    // let title = videos.snippet.title;
    // let thumbnail = videos.snippet.thumbnails.default;
    // let thumbnailUrl = thumbnail.url;
    // let thumbnailWidth = thumbnail.width;
    // let thumbnailHeight = thumbnail.height;
    return (
      <div>
      {this.state.videos.map((video, idx) => (
        <Youtube key={idx} videoId={video.id.videoId} title ={video.snippet.title} thumbnail= {video.snippet.thumbnails.default} />
      ))}
        
      </div>
    )
  }
}
