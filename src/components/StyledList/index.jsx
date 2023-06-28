import React from 'react'
import '../../styles/StyledList.css'

export const StyledList = () => {
  return (
    <ul className="styled-list">
      <li>
        <div className="black-dot"></div>
        <span>Business Demo</span>
      </li>
      <li>
        <div className="black-dot"></div>
        <span>Community Demo</span>
      </li>
      <li>
        <div className="black-dot"></div>
        <span>Online Documentation</span>
      </li>
      <li>
        <div className="black-dot"></div>
        <span>Request Support</span>
      </li>
    </ul>
  )
}
