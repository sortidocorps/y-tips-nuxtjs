export const state = () => ({
  toasts: [],
})

// @ts-ignore
export const mutations = {
  // @ts-ignore
  SET_TOAST(state, toast) {
    state.toasts = state.toasts.concat(toast)
  },
  // @ts-ignore
  DELETE_TOAST(state) {
    state.toasts = []
  },
}

export const actions = {
  // @ts-ignore
  setToast({ commit }, toast) {
    toast.show = true
    commit('SET_TOAST', toast)
  },
  // @ts-ignore
  removeToast({ commit }) {
    commit('DELETE_TOAST')
  },
}
