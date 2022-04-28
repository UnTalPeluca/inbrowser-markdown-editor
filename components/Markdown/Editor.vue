<template>
  <div
    class="markdown__editor"
    :class="isPreviewVisible ? 'preview-visible' : ''"
  >
    <div class="editor__head">
      <h2 class="editor__title">MARKDOWN</h2>
      <div @click="clickEditorBtn()" class="editor__btn">
        <img src="@/assets/icons/icon-show-preview.svg" alt="" />
      </div>
    </div>
    <textarea
      @input="$emit('input', $event.target.value)"
      id="textarea"
      v-bind="$attrs"
      class="editor__textarea"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    text: {
      type: String,
    },
  },
  computed: {
    ...mapState("layout", { isPreviewVisible: "showPreview" }),
  },
  methods: {
    ...mapMutations("layout", { setPreviewState: "SET_PREVIEW_STATE" }),
    clickEditorBtn() {
      this.setPreviewState(!this.isPreviewVisible);
    },
  },
};
</script>

<style lang="scss" scoped>
.markdown__editor {
  @include flex;
  flex-direction: column;
  height: calc(100vh - $header-sm);
  width: 100%;
  @media screen and (min-width: 768px) {
    display: block;
    width: 50%;
  }
  &.preview-visible {
    display: none;
  }
  .editor__head {
    @include flex;
    width: 100%;
    padding: 12px 16px;
    background-color: $color-200;
    justify-content: space-between;
    .editor__title {
      @include heading-s;
      color: $color-500;
    }
    .editor__btn {
      @include center;
      cursor: pointer;
      height: 16px;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
  .editor__textarea {
    @include markdown-code;
    display: block;
    color: $color-700;
    width: 100%;
    height: 100%;
    padding: 16px;
    resize: none;
    flex-grow: 1;
    &:focus {
      outline: none;
    }
  }
}
</style>
