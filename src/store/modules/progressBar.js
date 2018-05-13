const state = {
  processesInProgress: 0
}

const getters = {
  showProgress: state => state.processesInProgress > 0
}

const actions = {
  startNewProcess ({ commit, state }) {
    commit('incrementProcesses', 1)
  }
}

const mutations = {
  incrementProcesses (state, numberOfProcesses) {
    state.actionsInProgress = state.actionsInProgress + numberOfProcesses
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
