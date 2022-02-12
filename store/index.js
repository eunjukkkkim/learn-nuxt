export const state = () => ({
  sidebar: false,
  isError: false,
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },
  setErrorStatus(state, isError) {
    state.isError = isError;
  }
}

export const getters = {
  getErrorStatus(status) {
    return status.isError
  }
}