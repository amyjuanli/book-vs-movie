import React from 'react'
import Subcomment from './Subcomment'

export default function Reddit({reddit, className}) {
  return (
    <div className={className}>

    <h2 style={{textAlign: 'center'}}><a target="_blank" href={reddit.url}>{reddit.title}</a></h2>
    <p style={{textAlign: 'center'}}>
    {'- ' + reddit.author}
    </p>
    <p>{reddit.description}
    </p>
    <ul>
      {reddit.subcomments.map((subcomment, index) => (
        <li key={index}>
        <Subcomment key = {index} author={subcomment.data.author} body={subcomment.data.body} />
        </li>
      ))}
    </ul>
    </div>

  )
}