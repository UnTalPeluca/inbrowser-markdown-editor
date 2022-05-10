export const state = () => ({
  isDarkMode: true,
  isMenuOpen: false,
  showPreview: false,
  showDelete: false,
});

export const mutations = {
  SET_DARK_MODE(state, value) {
    state.isDarkMode = value;
    localStorage.setItem("darkMode", state.isDarkMode)
  },
  TOOGLE_DARK_MODE(state) {
    state.isDarkMode = !state.isDarkMode;
    localStorage.setItem("darkMode", state.isDarkMode)
  },
  TOOGLE_MENU_STATE(state) {
    state.isMenuOpen = !state.isMenuOpen;
  },
  SET_PREVIEW_STATE(state, value) {
    state.showPreview = value;
  },
  TOOGLE_DELETE_STATE(state) {
    state.showDelete = !state.showDelete;
  },
};

export const actions = {};
