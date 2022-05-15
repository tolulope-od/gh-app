import { useRoutes } from 'react-router-dom'
import { AllRoutes } from './routes'

export default () => {
  const renderRoutes = AllRoutes.map(({ path, Component }) => ({
    path,
    element: <Component />,
  }))
  return useRoutes(renderRoutes)
}
