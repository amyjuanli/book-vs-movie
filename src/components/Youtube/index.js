import React from 'react'
import { Link } from 'react-router-dom';

export default function Youtube() {
  return (
    <div>
      Youtube vides in here
        <Link to="/reddit">Reddit</Link>
        <i className="fa fa-angle-double-left arrow-icon"></i> 
        <i className="fa fa-angle-double-right arrow-icon"></i> 
        <Link to="/">Home</Link>
    </div>
  )
}
