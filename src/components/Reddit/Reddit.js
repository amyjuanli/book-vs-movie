import React from 'react'

export default function Reddit({reddit, className}) {
  return (
    <div className={className}>
    <span style={{display: 'block', fontWeight: '600', fontSize: '2em'}}>{reddit.title}</span>
    <span style={{display: 'block'}}>{reddit.description}</span>
    </div>
  )
}
