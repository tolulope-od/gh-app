import { string } from 'prop-types';
import React from 'react'
import { IRepositoryOwner } from './repositories.interfaces';

export interface Inav {
  name: string
  href: string
  current: boolean
}

export interface IfilterList {
  label: string
  value: string
}

export interface IfilterComponent {
  selected: string
  setSelected: (value: string) => void
  filterList: IfilterList[]
}

export interface ISearchInput {
  value: string
  setValue: (value: string) => void
}

export interface Ibutton {
  children: React.ReactNode
  handleClick: () => void
  className?: string
}

export interface ImainLayout {
  children: React.ReactChild
}

export interface IPagination {
  listPerPage: number
  totalCountries: number
  paginateFront: () => void
  paginateBack: () => void
  currentPage: number
}

export interface IAlert {
  Errormessage: string
  isError?: boolean
}

export interface ICollaboratorsAlert {
  collaboratorsError?: boolean
  CollaboratorsErrorsMessage: string
}

export interface IModal {
  repositoryName: string
  isOpen: boolean
  repositoryFullName: string
  collaborators: IRepositoryOwner[]
  loadingCollaborators: boolean
  onClose: () => void
}
