import { combineReducers } from 'redux'
import changeCharacterPage from './pagination/changePage'

import InputGetNewLetter from './searching/inputNewLetter'

export const characterApp = combineReducers({
  changeCharacterPage,
  InputGetNewLetter
})
