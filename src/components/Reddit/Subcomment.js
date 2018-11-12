import React from 'react'

export default function Subcomment({author, body}) {
  return (
   <div>
   {body + ' - ' + author}
   </div>

  )
}
