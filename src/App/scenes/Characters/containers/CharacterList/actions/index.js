
export const searchNewCharacters = (name, page) => {
  return {
    type: 'SEARCH_NEW_CHARACTER',
    name,
    page
  }
}
