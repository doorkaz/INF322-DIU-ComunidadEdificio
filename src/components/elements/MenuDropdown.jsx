import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconMenu } from '@icons'

export const MenuDropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigateMenu = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <div onClick={handleMenuClick} style={{ cursor: 'pointer', position: 'relative' }}>
      <IconMenu />
      {menuOpen && (
        <ul
          className='menu-dropdown'
        >
          <li onClick={() => handleNavigateMenu('/usuario')} style={{ padding: '8px', cursor: 'pointer' }}>Datos Usuario</li>
          <li onClick={() => handleNavigateMenu('/cartola')} style={{ padding: '8px', cursor: 'pointer' }}>Cartola</li>
          <li onClick={() => handleNavigateMenu('/inscribir-visitas')} style={{ padding: '8px', cursor: 'pointer' }}>Visitas</li>
          <li onClick={() => handleNavigateMenu('/iniciar-sesion')} style={{ padding: '8px', cursor: 'pointer', color: 'red' }}>Cerrar Sesion</li>
        </ul>
      )}
    </div>
  )
}