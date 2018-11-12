import React, { Component } from 'react'

export default class Youtube extends Component {

    getVideo = (id) => (
    `  <iframe id="ytplayer" type="text/html" width="640" height="360"
    src="https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com"
    frameborder="0"></iframe>`
    )
  
  render() {
      const {videoId, title, thumbnail} = this.props;
      const iframeContent = this.getVideo(videoId);
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: iframeContent}}>
            </div>
            <div>
                <img src={thumbnail.url} />
                <div class="details">
                    <h4>{title}</h4>
                    <p>{'description'}</p>
                </div>
            </div>

        </div>

    )
  }
}
