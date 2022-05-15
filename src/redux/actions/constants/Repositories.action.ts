import { IAlert, ICollaboratorsAlert } from '../../../interfaces/components.interfaces';
import {
  RepositoriesAction,
  IRepositories,
  ICollaborator,
} from '../../../interfaces/repositories.interfaces';
import { Action } from '../../../interfaces/store.interfaces';

export const Constants = {
  FETCHING_REPOSITORIES: 'FETCHING_REPOSITORIES',
  FETCH_REPOSITORIES: 'FETCH_COUNTRIES',
  FETCHING_FAILED: 'FETCHING_FAILED',
  FETCHING_COLLABORATORS: 'FETCHING_COLLABORATORS',
  FETCH_COLLABORATORS: 'FETCH_COLLABORATORS',
  FETCH_COLLABORATORS_FAILED: 'FETCH_COLLABORATORS_FAILED',
};

export function loadingRequest(): Action {
  return {
    type: Constants.FETCHING_REPOSITORIES,
    payload: null, // No payload required
  };
}

export function getAllRepositories(payload: IRepositories[]): RepositoriesAction {
  return {
    type: Constants.FETCH_REPOSITORIES,
    payload,
  };
}

export function handleError(payload: IAlert): RepositoriesAction {
  return {
    type: Constants.FETCHING_FAILED,
    payload,
  };
}

export function loadingCollaborators(): Action {
  return {
    type: Constants.FETCHING_COLLABORATORS,
    payload: null,
  };
}

export function getCollaboratorsAction(payload: ICollaborator[]): RepositoriesAction {
  return {
    type: Constants.FETCH_COLLABORATORS,
    payload,
  };
}

export function handleCollaboratorsError(payload: ICollaboratorsAlert): RepositoriesAction {
  return {
    type: Constants.FETCH_COLLABORATORS_FAILED,
    payload,
  };
}
