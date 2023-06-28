import React, { createContext, useState } from 'react'

export const NavBarContext = createContext()

export const NavBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavBarContext.Provider>
  )
}
