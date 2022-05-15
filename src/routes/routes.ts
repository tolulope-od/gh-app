import React from 'react'
import { IRoutes } from '../interfaces/store.interfaces'

const Home = React.lazy(() => import('../views/landingPage/LandingPage'))
const Repository = React.lazy(() => import('../views/repositories/Repositories'))

export const AllRoutes: IRoutes[] = [
  {
    path: '/',
    Component: Home,
    name: 'home',
  },
  {
    path: '/repository',
    Component: Repository,
    name: 'Repository',
  },
]
