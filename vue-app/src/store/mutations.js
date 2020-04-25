/* eslint-disable no-console */
import Vue from 'vue';

const mutations = {
  appError: (state, message) => {
    state.apiError = message;
  },
  updateCSRFToken: (state, token) => {
    state.CSRFtoken = token;
  },
  setBrand: (state, payload) => {
    Vue.set(state, 'menus', payload.menus);
    Vue.set(state, 'brand', payload.info);
  },
  setUtils: (state, payload) => {
    state.utils = payload;
  },
  setUserDetail: (state, payload) => {
    Vue.set(state.user, payload.property, payload.value);
  },
  updateUser: (state, user) => {
    Vue.set(state, 'user', user);
  },
  updateFormProperty: (state, payload) => {
    Vue.set(state.form, payload.property, payload.value);
  },
  formError: (state, payload) => {
    Vue.set(state.form.errors, payload.property, payload.value);
  },
};
export default mutations;
