import React from 'react'

export default function Iframe() {
  return (
    <div>
    <iframe width="600" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
    </div>
  )
}
