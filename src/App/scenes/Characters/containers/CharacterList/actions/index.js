export const nextCharacterPage = (page) => {
  return {
    type: 'NEXT_CHARACTER_PAGE',
    page
  }
}

export const previusCharacterPage = (page) => {
  return {
    type: 'PREVIUS_CHARACTER_PAGE',
    page
  }
}

export const resetCharacterPagination = (page) => {
  return {
    type: 'RESET_CHARACTER_PAGINATION',
    page
  }
}

export const searchCharacterByInput = (name) => {
  return {
    type: 'SEARCH_CHARACTER_BY_INPUT',
    name
  }
}
