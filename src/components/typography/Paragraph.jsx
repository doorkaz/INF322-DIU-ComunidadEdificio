import React from 'react'

export const P = ({ children, className }) => {
  return (
    <p
      className={`P ${className || ''}`}
    >
      {children}
    </p>
  )
}
