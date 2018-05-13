const state = {
  processesInProgress: 0
}

const getters = {
  showProgress: state => state.processesInProgress > 0
}

const actions = {
  startNewProcess ({ commit, state }) {
    commit('incrementProcesses', 1)
  },
  finishProcess ({ commit, state }) {
    commit('decrementProcesses', 1)
  }
}

const mutations = {
  incrementProcesses (state, numberOfProcesses) {
    state.processesInProgress = state.processesInProgress + numberOfProcesses
  },
  decrementProcesses (state, numberOfProcesses) {
    if (state.processesInProgress > 0) {
      state.processesInProgress = state.processesInProgress - numberOfProcesses
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
