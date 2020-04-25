const getters = {
  brand: (state) => state.brand,
  apiUrl: (state) => (process.env.NODE_ENV === 'production' ? state.baseApiUrl.prod : state.baseApiUrl.dev),
  appError: (state) => state.apiError,
  isGuest: (state) => state.user.id === 0,
  appMenus: (state) => state.menus,
  utils: (state) => state.utils,
  user: (state) => state.user,
  form: (state) => state.form,
  formError: (state) => (property) => {
    if (state.form.errors.hasOwnProperty(property)) {
      return state.form.errors[property];
    }
    return '';
  },
};

export default getters;
