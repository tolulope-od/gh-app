import React from 'react'
import Navbar from '../../components/Navbar'
import { ImainLayout } from '../../interfaces/components.interfaces'

const MainLayout: React.FC<ImainLayout> = ({ children }) => (
  <div className=" flex w-full text-center flex h-screen flex-col">
    <Navbar/>
    <div className='flex text-center content-center justify-center h-4/5 w-full flex-col items-center'>{children}</div>
  </div>
)

export default MainLayout
