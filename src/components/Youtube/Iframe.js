import React from 'react'

export default function Iframe() {
  return (
    <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  )
}
