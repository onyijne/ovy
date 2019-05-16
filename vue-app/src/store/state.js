import Axios from 'axios'

window.axios = Axios
const state = {
  baseApiUrl: {
    dev: 'http://dev.test.com/api',
    prod: 'http://test.com/api'
  },
  apiError: null,
  CSRFtoken: window.axios.defaults.headers.common['X-CSRF-TOKEN'],
  menus: {},
  brand: {
    name: 'OVY',
    email: 'mail@domain.com',
    phone: '08012345678',
    address: 'Internet Space'
  },
  user: {
    id: 0,
    username: '',
    email: '',
    sid: ''
  },
  utils: {
    platform: '',
    orientation: '',
    screenSize: '',
    country: '',
    state: ''
  },
  form: {
    type: '',
    action: '',
    data: {},
    errors: {},
    submitted: false
  }
}

export default state
