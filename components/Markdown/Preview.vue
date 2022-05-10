<template>
  <div
    class="markdown__preview"
    :class="[
      isPreviewVisible ? 'preview-visible' : '',
      isDarkMode ? 'dark-mode' : '',
    ]"
  >
    <div class="preview__head">
      <h2 class="preview__title">PREVIEW</h2>
      <div @click="clickPreviewBtn()" class="preview__btn">
        <img
          v-show="isPreviewVisible"
          src="@/assets/icons/icon-hide-preview.svg"
          alt=""
        />
        <img
          v-show="!isPreviewVisible"
          src="@/assets/icons/icon-show-preview.svg"
          alt=""
        />
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
    ...mapState("layout", {
      isPreviewVisible: "showPreview",
      isDarkMode: "isDarkMode",
    }),
  },
  methods: {
    ...mapMutations("layout", { setPreviewState: "SET_PREVIEW_STATE" }),
    clickPreviewBtn() {
      this.setPreviewState(!this.isPreviewVisible);
    },
  },
};
</script>

<style lang="scss">
.markdown__preview {
  @include flex;
  flex-direction: column;
  display: none;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    display: block;
    width: 50%;
  }
  &.preview-visible {
    display: block;
    width: 100%;
    .preview__content {
      @media screen and (min-width: 1280px) {
        max-width: 672px;
      }
    }
  }
  .preview__head {
    @include flex;
    transition: background-color 500ms ease;
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
      img {
        transition: transform 250ms ease;
      }
      &:hover {
        img {
          transform: scale(1.1);
          filter: $filter-orange;
        }
      }
    }
  }
  .preview__content {
    @include markdown-code;
    color: red;
    width: 100%;
    margin: auto;
    padding: 16px;
    resize: none;
    display: flex;
    flex-direction: column;
    gap: 22px;
    overflow: auto scroll;
    height: calc($markdown-height-sm - 41px);
    @media screen and (min-width: 768px) {
      height: calc($markdown-height-md - 41px);
    }
    /* width */
    &::-webkit-scrollbar {
      width: 6px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background-color: $color-900; 
      border-radius: 12px;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background-color: $color-500;
      border-radius: 12px;
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background-color: $color-700; 
    }
    &:focus {
      outline: none;
    }
    // Markdown Elements
    ol,
    ul {
      padding-left: 24px;
      list-style-position: inside;
      @include preview;
      color: $color-500;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        padding-left: 24px;
        position: relative;
        line-height: 24px;
        &::before {
          position: absolute;
          left: 0;
          content: "\2022";
          color: $orange;
          font-weight: bold;
          display: inline-block;
          width: 4px;
        }
      }
    }
    p {
      @include preview;
      color: $color-500;
      code {
        @include markdown-code;
        color: $color-700;
      }
    }
    blockquote {
      transition: background-color 500ms ease;
      background-color: $color-200;
      padding: 24px;
      border-radius: 4px;
      border-left: 4px solid $orange;
      p,
      a {
        transition: color 500ms ease;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        color: $color-700;
      }
      a {
        &:hover {
          transition: color 250ms ease;
          color: $orange !important;
        }
      }
    }
    pre {
      background-color: $color-200;
      padding: 24px;
      border-radius: 4px;
      display: block;
      white-space: pre-wrap;
      code {
        @include markdown-code;
        color: $color-700;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: $family-slab;
      font-weight: bold;
      color: $color-700;
    }
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 28px;
      font-weight: lighter;
    }
    h3 {
      font-size: 24px;
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 16px;
    }
    h6 {
      font-size: 14px;
      color: $orange;
    }
  }

  // Dark Mode
  &.dark-mode {
    .preview__head {
      background-color: $color-900;
      .preview__title {
        color: $color-400;
      }
    }
    .preview__content {
      h1,
      h2,
      h3,
      h4,
      h5 {
        color: $color-100;
      }
      li,
      p {
        color: $color-400;
      }
      blockquote {
        background-color: $color-800;
        p,
        a {
          color: $color-100;
        }
      }
      pre {
        background-color: $color-800;
      }
      code {
        color: $color-100;
      }
    }
  }
}
</style>
