<template>
  <div class="index-page">
    <div class="markdown">
      <MarkdownEditor v-model="editorText" :text="editorText"/>
      <MarkdownPreview :preview="previewMarked" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { marked } from "marked";
export default {
  data: () => ({
    editorText: "",
  }),
  async fetch() {
    const storage = window.localStorage;
    const localDocuments = storage.getItem("documents");
    if (localDocuments) {
      const parsedDocuments = JSON.parse(localDocuments);
      this.setDocuments(parsedDocuments);
      this.editorText = parsedDocuments[1].content;
    } else {
      const defaultDocuments = JSON.stringify(
        require("@/assets/json/data.json")
      );
      storage.setItem("documents", defaultDocuments);
      this.setDocuments(defaultDocuments);
      this.editorText = defaultDocuments[1].content;
    }
  },
  methods: {
    ...mapMutations("markdown", { setDocuments: "SET_DOCUMENTS" }),
  },
  computed: {
    ...mapState("markdown", { storeCurrentDocument: "currentDocument" }),
    previewMarked() {
      return marked(this.editorText)
    }
  },
};
</script>
<style lang="scss" scoped>
.index-page {
  height: 100%;
  .markdown {
    height: 100%;
    @media screen and(min-width: 768px) {
      @include flex;
    }
  }
}
</style>
