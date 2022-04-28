export const state = () => ({
  darkMode: false,
  isMenuOpen: false,
  showPreview: false,
});

export const mutations = {
  SET_DARK_MODE(state, value) {
    state.darkMode = value;
  },
  SET_MENU_STATE(state, value) {
    state.isMenuOpen = value;
  },
  SET_PREVIEW_STATE(state, value) {
    state.showPreview = value
  }
};

export const actions = {
	
};
