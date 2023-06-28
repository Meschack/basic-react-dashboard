import React from 'react'
import { Link } from 'react-router-dom'

export const DropDownLink = ({ linkInfos }) => {
  return (
    <li className="dropdown-link">
      <div
        className="div"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: linkInfos.color,
        }}
      ></div>
      <Link to={linkInfos.path}>{linkInfos.label}</Link>
    </li>
  )
}
