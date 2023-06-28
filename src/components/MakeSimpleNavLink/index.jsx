import React from 'react'
import { Link } from 'react-router-dom'

export const MakeSimpleNavLink = ({ path, label, icon }) => {
  return (
    <li>
      <i className={`fas ${icon}`}></i>
      <Link to={path}>{label}</Link>
    </li>
  )
}
