const inputGetNewCharacter = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_CHARACTER_BY_INPUT':
      return action.name
    default:
      return state
  }
}

export default inputGetNewCharacter
