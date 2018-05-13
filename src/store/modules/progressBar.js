const state = {
  actionsInProgress: 0
}

const getters = {
  showProgress: state => state.actionsInProgress > 0
}

const actions = {
  startAction ({ commit, state }) {
    commit('incrementActionsInProgress', 1)
  }
}

const mutations = {
  incrementActionsInProgress (state, numberOfActions) {
    state.actionsInProgress = state.actionsInProgress + numberOfActions
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
