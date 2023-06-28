import { useContext } from 'react'
import '../../styles/Topbar.css'
import { NavBarContext } from '../NavBarContext'

export const Topbar = () => {
  const { isOpen, setIsOpen } = useContext(NavBarContext)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="topbar">
      <div className="icons navbar-switch reveal">
        <div onClick={handleToggle}>
          <i className="fas fa-sliders-h"></i>
        </div>
      </div>

      <div className="search-input hide">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <input type="search" id="input" placeholder="Search here" />
      </div>

      <div className="icons">
        <div>
          <i className="far fa-bell"></i>
          {/* <div className="badge"></div> */}
        </div>
        <div>
          <i className="fas fa-shopping-cart"></i>
        </div>

        <div className="reveal">
          <i className="fas fa-users "></i>
        </div>
      </div>
    </div>
  )
}
