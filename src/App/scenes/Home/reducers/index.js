function todoApp(state = 'hola', action) {
  switch (action.type) {
    case 'hola':
      return 'hola'
    default:
      return 'Bye'
  }
}

export default todoApp
