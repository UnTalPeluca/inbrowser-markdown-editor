import uuid from "@/utils/uuid";

export const state = () => ({
  currentDocument: {
    name: "",
    createdAt: "",
    content: "",
    id: 0,
  },
  documents: [],
});

export const mutations = {
  SET_DOCUMENTS(state, value) {
    state.documents = value;
  },
  CREATE_NEW_DOCUMENT(state) {
    const date = new Date().toLocaleDateString("en-US");
    state.currentDocument = {
      name: "New document",
      createdAt: date,
      content: "",
      id: uuid,
    };
    state.documents.unshift(state.currentDocument)
  },
  SET_CURRENT_DOCUMENT_BY_INDEX(state, index) {
    state.currentDocument = state.documents[index];
  },
  SET_CURRENT_DOCUMENT(state, value) {
    state.currentDocument = value;
  },
  SET_CURRENT_DOCUMENT_NAME(state, value) {
    state.currentDocument.name = value;
    const index = state.documents.findIndex(
      (doc) => doc.id === state.currentDocument.id
    );
    if (index) {
      state.documents[index] = state.currentDocument;
    }
  },
  SET_CURRENT_DOCUMENT_CONTENT(state, value) {
    const index = state.documents.findIndex(
      (doc) => doc.id === state.currentDocument.id
    );
    state.currentDocument.content = value;
    state.documents[index] = state.currentDocument;
    localStorage.setItem("documents", JSON.stringify(state.documents));
  },
  DELETE_CURRENT_DOCUMENT(state) {
    const index = state.documents.findIndex(
      (doc) => doc.id === state.currentDocument.id
    );
    state.documents.splice(index, 1);
    localStorage.setItem("documents", JSON.stringify(state.documents));
  },
  SAVE_CHANGES(state) {
    const index = state.documents.findIndex(
      (doc) => doc.id === state.currentDocument.id
    );
    if (index !== -1) {
      localStorage.setItem("documents", JSON.stringify(state.documents));
    } else {
      state.documents.push(state.currentDocument);
      localStorage.setItem("documents", JSON.stringify(state.documents));
    }
  },
};

export const actions = {
  deleteDocument({ state, commit }) {
    commit("DELETE_CURRENT_DOCUMENT");
    if (state.documents.length) {
      commit("SET_CURRENT_DOCUMENT", state.documents[0]);
    } else {
      const date = new Date().toLocaleDateString("en-US");
      commit("SET_CURRENT_DOCUMENT", {
        name: "New document",
        createdAt: date,
        content: "",
        id: uuid,
      });
    }
  },
};
