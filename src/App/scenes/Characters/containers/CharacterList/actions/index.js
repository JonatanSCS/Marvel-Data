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

export const searchCharacterByLetter = (name) => {
  return {
    type: 'SEACTH_CHARACTER_BY_LETTER',
    name
  }
}
