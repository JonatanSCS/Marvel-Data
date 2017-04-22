import { combineReducers } from 'redux'
import changeCharacterPage from './pagination/changePage'

import inputGetNewCharacter from './searching/inputNewCharacter'

export const characterApp = combineReducers({
  changeCharacterPage,
  inputGetNewCharacter
})
