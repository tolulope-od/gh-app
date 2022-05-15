import { combineReducers } from 'redux'
import { StoreState } from '../../interfaces/store.interfaces'
import CountriesReducer from './repositories.reducer'

import UserReducer from './user.reducer'

const rootReducer = combineReducers<StoreState>({
  Repositories: CountriesReducer,
  User: UserReducer,
})

export default rootReducer
