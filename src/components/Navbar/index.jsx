import { NavBarContext } from '../NavBarContext'
import { Link } from 'react-router-dom'
import '../../styles/Navbar.css'

import logo from '../../assets/logo.png'
import { MakeSimpleNavLink } from '../MakeSimpleNavLink'
import { MakeDropDownNavLink } from '../MakeDropDownNavLink'
import { useContext } from 'react'

const projectsDropdownLinks = [
  {
    color: 'green',
    label: 'Woffice CRM',
    path: 'projects/woffice-crm',
  },

  {
    color: 'purple',
    label: 'Task Kanban View',
    path: 'projects/task-kanban-view',
  },

  {
    color: 'red',
    label: 'Woffice Timeline',
    path: 'projects/woffice-timeline',
  },

  {
    color: 'yellow',
    label: 'Team View',
    path: 'projects/team',
  },
]

const membersDropDownLinks = [
  {
    path: 'members/create',
    label: 'Create Member',
  },
]
const pagesDropdownLinks = []
const wikisDropdownLinks = []
const chartsDropdownLinks = []

const linksList = [
  {
    path: 'dashboard',
    label: 'Dashboard',
    icon: 'fa-th-large',
  },

  {
    label: 'Members',
    icon: 'fa-users',
    subElements: membersDropDownLinks,
  },

  {
    path: 'calendar',
    label: 'Calendar',
    icon: 'fa-calendar-alt',
  },

  {
    label: 'Projects',
    icon: 'fa-tasks-alt',
    subElements: projectsDropdownLinks,
  },

  {
    label: 'Pages',
    icon: 'fa-layer-group',
    subElements: pagesDropdownLinks,
  },

  {
    label: 'Wikis',
    icon: 'fa-sliders-h',
    subElements: wikisDropdownLinks,
  },

  {
    path: 'file',
    label: 'File Manager',
    icon: 'fa-folder-open',
  },

  {
    label: 'Charts & Stats',
    icon: 'fa-chart-line',
    subElements: chartsDropdownLinks,
  },

  {
    path: 'news',
    label: 'News',
    icon: 'fa-newspaper',
  },

  {
    path: 'antennes',
    label: 'Antennes',
    icon: 'fa-broadcast-tower',
  },

  {
    path: 'payment',
    label: 'Payement',
    icon: 'fa-credit-card',
  },

  {
    path: 'discussions',
    label: 'Discussions',
    icon: 'fa-inbox',
  },
]

export const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(NavBarContext)

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <header
      className={`header ${isOpen ? 'active' : 'hides'}`}
      onBlur={handleToggle}
    >
      {/* <div className="close-navbar" onClick={handleToggle}>
        <i className="fas fa-times"></i>
      </div> */}
      <Link to="/" className="logo">
        <img src={logo} alt="Logo de Woffice" />
      </Link>
      <nav className="navbar">
        <ul className="navlink-list">
          {linksList.map((link) => {
            if (!link.subElements) {
              return (
                <MakeSimpleNavLink
                  path={link.path}
                  label={link.label}
                  icon={link.icon}
                  key={link.label}
                />
              )
            } else {
              return (
                <MakeDropDownNavLink
                  path={link.path}
                  label={link.label}
                  icon={link.icon}
                  subElementsArray={link.subElements}
                  key={link.label}
                />
              )
            }
          })}
        </ul>
      </nav>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} All Right Reserved</p>
        <p>Powered by Woffice</p>
      </div>
    </header>
  )
}
