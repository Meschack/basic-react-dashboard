import { useState } from 'react'
import { DropDownLink } from '../DropDownLink'

const makeDropDownLink = (subElements) => {
  return (
    subElements.length !== 0 && (
      <ul>
        {subElements.map((link) => (
          <DropDownLink linkInfos={link} key={link.path} />
        ))}
      </ul>
    )
  )
}

export const MakeDropDownNavLink = ({ label, icon, subElementsArray }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(() => {
      return !isActive
    })
  }

  return (
    <li className={`has-dropdown ${isActive && 'active'}`}>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <i className={`fas ${icon}`}></i>
        <div>{label}</div>
        <i className="fas fa-chevron-right arrow"></i>
      </div>

      {makeDropDownLink(subElementsArray)}
    </li>
  )
}
