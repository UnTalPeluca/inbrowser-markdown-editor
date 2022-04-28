<template>
  <div
    class="markdown__preview"
    :class="isPreviewVisible ? 'preview-visible' : ''"
  >
    <div class="preview__head">
      <h2 class="preview__title">PREVIEW</h2>
      <div @click="clickPreviewBtn()" class="preview__btn">
        <img src="@/assets/icons/icon-show-preview.svg" alt="" />
      </div>
    </div>
    <div v-html="preview" class="preview__content"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    preview: {
      type: String,
    },
  },
  computed: {
    ...mapState("layout", { isPreviewVisible: "showPreview" }),
  },
  methods: {
    ...mapMutations("layout", { setPreviewState: "SET_PREVIEW_STATE" }),
    clickPreviewBtn() {
      this.setPreviewState(!this.isPreviewVisible);
    },
  },
};
</script>

<style lang="scss" scoped>
.markdown__preview {
  @include flex;
  flex-direction: column;
  height: calc(100vh - $header-sm);
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 50%;
  }
  &.preview-visible {
    display: block;
    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
  .preview__head {
    @include flex;
    width: 100%;
    padding: 12px 16px;
    background-color: $color-200;
    justify-content: space-between;
    .preview__title {
      @include heading-s;
      color: $color-500;
    }
    .preview__btn {
      @include center;
      cursor: pointer;
      height: 16px;
    }
  }
  .preview__content {
    @include markdown-code;
    color: $color-700;
    width: 100%;
    padding: 16px;
    resize: none;
    height: 100%;
    &:focus {
      outline: none;
    }
  }
}
</style>
