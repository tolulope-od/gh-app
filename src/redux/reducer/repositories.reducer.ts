import {
  RepositoriesState,
  RepositoriesAction,
} from '../../interfaces/repositories.interfaces';
import { Constants } from '../actions/constants/Repositories.action';

const INITIAL_STATE: RepositoriesState = {
  repositories: [],
  loadRequest: false,
  selectedId: '',
  isError: false,
  Errormessage: '',
  collaboratorsError: false,
  CollaboratorsErrorsMessage: '',
  collaborators: [],
  loadingCollaborators: false,
};

const RepositoriesReducer = (
  state: RepositoriesState = INITIAL_STATE,
  action: RepositoriesAction,
): RepositoriesState => {
  switch (action.type) {
    case Constants.FETCH_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
        loadRequest: false,
      };
    case Constants.FETCHING_REPOSITORIES:
      return {
        ...state,
        loadRequest: true,
        isError: false,
      };
    case Constants.FETCHING_FAILED:
      return {
        ...state,
        loadRequest: false,
        isError: action.payload.isError,
        Errormessage: action.payload.Errormessage,
        repositories: state.repositories,
      };
    case Constants.FETCH_COLLABORATORS:
      return {
        ...state,
        collaborators: action.payload,
        loadingCollaborators: false,
      };
    case Constants.FETCHING_COLLABORATORS:
      return {
        ...state,
        loadingCollaborators: true,
        collaboratorsError: false,
      };
    case Constants.FETCH_COLLABORATORS_FAILED:
      return {
        ...state,
        loadingCollaborators: false,
        collaboratorsError: action.payload.collaboratorsError,
        CollaboratorsErrorsMessage: action.payload.CollaboratorsErrorsMessage,
        collaborators: state.collaborators,
      };
    default:
      return state;
  }
};

export default RepositoriesReducer;
