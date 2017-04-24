import { combineReducers } from 'redux'

import searchNewCharacter from './searching/inputNewCharacter'

export const characterApp = combineReducers({
  searchNewCharacter
})
