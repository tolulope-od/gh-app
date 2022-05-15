import React from 'react'
import { Ibutton } from '../interfaces/components.interfaces'

const Button: React.FC<Ibutton> = ({ handleClick, children, className }) => (
  <button
    onClick={() => handleClick()}
    className={`px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md focus:bg-black focus:text-white ${className}`}
  >
    {children}
  </button>
)

export default Button
