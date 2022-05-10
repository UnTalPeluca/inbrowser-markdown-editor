<template>
  <div class="index-page" :class="isDarkMode ? 'dark-mode' : ''">
    <div class="markdown">
      <MarkdownEditor v-model="editorText" :text="editorText" />
      <hr v-if="!showPreview" class="divider" />
      <MarkdownPreview :preview="previewMarked" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { marked } from "marked";

export default {
  async asyncData({ store }) {
    const storage = window.localStorage;
    // Set theme
    if (storage.getItem("darkMode") === null) {
      storage.setItem("darkMode", "true");
    }
    store.commit(
      "layout/SET_DARK_MODE",
      JSON.parse(storage.getItem("darkMode"))
    );
    // Set documents
    let documents = JSON.parse(storage.getItem("documents"));
    let editorText;
    if (documents && documents.length > 0) {
      store.commit("markdown/SET_DOCUMENTS", documents);
      store.commit("markdown/SET_CURRENT_DOCUMENT_BY_INDEX", 0);
    } else {
      documents = require("@/assets/json/data.json");
      storage.setItem("documents", JSON.stringify(documents));
      store.commit("markdown/SET_DOCUMENTS", documents);
      store.commit("markdown/SET_CURRENT_DOCUMENT_BY_INDEX", 0);
    }
    editorText = documents.length ? documents[0].content : "";
    return { editorText };
  },
  computed: {
    ...mapState("markdown", ["currentDocument"]),
    ...mapState("layout", ["showPreview", "isDarkMode"]),
    previewMarked() {
      return this.editorText
        ? marked.parse(this.editorText, { breaks: true })
        : "";
    },
  },
  watch: {
    "$store.state.markdown.currentDocument": function () {
      const content = this.currentDocument.content;
      this.editorText = content ? content : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.index-page {
  transition: all 500ms ease;
  height: 100%;
  .markdown {
    display: flex;
    .divider {
      border: 0.5px solid $color-300;
      height: $markdown-height-md;
      display: none;
      transition: border-color 500ms ease;
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }
  &.dark-mode {
    background-color: $color-1000;
    color: $color-100;
    .markdown {
      .divider {
        border-color: $color-600;
      }
    }
  }
}
</style>
