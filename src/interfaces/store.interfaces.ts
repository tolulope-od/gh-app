import { ReactChild, ReactElement, ReactNode } from 'react'
import { RepositoriesState, RepositoriesAction } from './repositories.interfaces'
import { UserAction, UserState } from './user.interface'

export interface StoreState {
  User: UserState
  Repositories: RepositoriesState
}
type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>
export type DynamicImportType = () => Promise<{
  default: React.ComponentType<any>
}>
export interface IRoutes {
  path: string
  Component: LazyComponentType
  name: string
}

export type Action = RepositoriesAction | UserAction
