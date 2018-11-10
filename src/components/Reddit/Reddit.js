import React from 'react'

export default function Reddit({reddit}) {
  return (
    <div>
      <img src={reddit.data.header_img} />
      <span>{reddit.data.selftext}</span>
    </div>
  )
}
