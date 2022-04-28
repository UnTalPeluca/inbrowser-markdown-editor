export const state = () => ({
  currentDocument: "eaea",
  documents: [],
});

export const mutations = {
  SET_DOCUMENTS(state, value) {
    state.documents = value;
  },
};

export const actions = {

};
