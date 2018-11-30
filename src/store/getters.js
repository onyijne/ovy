const getters = {
  menuState: (state) => {
    return state.openMenu
  },
  isGuest: (state) => {
    return state.isAuthenticated
  }
}

export default getters
