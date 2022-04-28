export const state = () => ({
  darkMode: false,
  isMenuOpen: false,
  showPreview: false,
});

export const mutations = {
  SET_DARK_MODE(state, value) {
    state.darkMode = value;
  },
  TOOGLE_DARK_MODE(state) {
    state.darkMode = !state.darkMode;
  },
  TOOGLE_MENU_STATE(state) {
    state.isMenuOpen = !state.isMenuOpen;
  },
  SET_PREVIEW_STATE(state, value) {
    state.showPreview = value;
  },
};

export const actions = {};
