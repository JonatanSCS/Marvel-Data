const searchNewCharacter = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_NEW_CHARACTER':
      return action
    default:
      return {
        name: '',
        page: 1
      }
  }
}

export default searchNewCharacter
