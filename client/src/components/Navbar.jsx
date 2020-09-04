import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Navbar() {
      const [showBg, setShowBg] = useState(false)

      useEffect(() => {
            window.addEventListener('scroll', () => {
                  if(window.scrollY > 70) {
                        setShowBg(true)
                  }
                  else{
                        setShowBg(false)
                  }
            })
            return () => {
                  window.removeEventListener('scroll')
            }
      }, [])

      return (
            <nav className={`navbar ${showBg && "navbar__bg"}`}>
                  <span className="navbar__brand">Nontonapa</span>
            </nav>
      )
}

export default Navbar
