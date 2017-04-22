const InputGetNewLetter = (state = '', action) => {
  switch (action.type) {
    case 'SEACTH_CHARACTER_BY_LETTER':
      return action.name
    default:
      return state
  }
}

export default InputGetNewLetter
