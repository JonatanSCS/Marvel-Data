const changeCharacterPage = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_CHARACTER_PAGE':
      return action.page + 1
    case 'PREVIUS_CHARACTER_PAGE':
      if(action.page === 1) {
        return action.page
      } else {
        return action.page - 1
      }
    case 'RESET_CHARACTER_PAGINATION':
      return state
    default:
      return state
  }
}

export default changeCharacterPage
