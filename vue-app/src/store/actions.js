import axios from 'axios'

const actions = {
  getBrand (store) {
    axios.get(store.getters.apiUrl + '/brand').then(res => {
      store.commit('setBrand', res.data.brand)
      store.commit('updateCSRFToken', res.data.token)
      store.commit('updateUser', res.data.user)
    }).catch(err => {
      store.commit('appError', err.message)
    })
  },
  attemptLogin ({ commit, getters }, data) {
    axios.post(getters.apiUrl + '/login', data).then(res => {
      commit('updateCSRFToken', res.data.token)
      if (res.data.result === 'success') {
        commit('updateUser', res.data.user)
      } else {
        if (res.data.messages.password) {
          commit('formError', { property: 'password_error', value: res.data.messages.password })
        }
        if (res.data.messages.username) {
          commit('formError', { property: 'login_error', value: res.data.messages.username })
        }
      }
    }).catch(err => {
      commit('appError', err.message)
    })
  }
}

export default actions
