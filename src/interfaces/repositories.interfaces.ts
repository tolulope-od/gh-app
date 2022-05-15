export interface IRepositoryOwner {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  type: string
}

export interface IRepositories {
  id: number
  node_id: string
  name: string
  full_name: string
  description: string
  created_at: string
  contributors_url: string
  owner: IRepositoryOwner
  language: string
  archived: boolean
  collaborators_url: string
  openModal: () => void
}

export interface ICollaborator {
  login: string
  avatar_url: string
  gravatar_url: string
  url: string
}

export type RepositoriesState = {
  selectedId: string
  loadRequest: boolean
  repositories: IRepositories[]
  isError: boolean
  Errormessage: string
  collaborators: ICollaborator[]
  loadingCollaborators: boolean
  collaboratorsError: boolean
  CollaboratorsErrorsMessage: string
}

export type RepositoriesAction = {
  type: string
  payload: any
}

export type DispatchRepositoryType = (args: RepositoriesAction) => RepositoriesAction
