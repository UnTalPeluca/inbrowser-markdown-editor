<template>
  <div
    class="markdown__editor"
    :class="[
      isPreviewVisible ? 'preview-visible' : '',
      isDarkMode ? 'dark-mode' : '',
    ]"
  >
    <div class="editor__head">
      <h2 class="editor__title">MARKDOWN</h2>
      <div @click="clickEditorBtn()" class="editor__btn">
        <img src="@/assets/icons/icon-show-preview.svg" alt="" />
      </div>
    </div>
    <textarea
      @input="onInput($event)"
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
    ...mapState("layout", {
      isPreviewVisible: "showPreview",
      isDarkMode: "isDarkMode",
    }),
  },
  methods: {
    ...mapMutations("layout", { setPreviewState: "SET_PREVIEW_STATE" }),
    ...mapMutations("markdown", {
      setDocumentContent: "SET_CURRENT_DOCUMENT_CONTENT",
    }),
    clickEditorBtn() {
      this.setPreviewState(!this.isPreviewVisible);
    },
    onInput(e) {
      this.$emit("input", e.target.value);
      this.setDocumentContent(e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.markdown__editor {
  @include flex;
  flex-direction: column;
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
    transition: background-color 500ms ease;
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
  .editor__textarea {
    @include markdown-code;
    background-color: transparent;
    display: block;
    color: $color-700;
    width: 100%;
    padding: 16px;
    resize: none;
    flex-grow: 1;
    height: calc($markdown-height-sm - 41px);
    /* width */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: $color-300; 
      border-radius: 12px;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background-color: $color-500;
      border-radius: 12px;
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background-color: $color-600; 
    }
    @media screen and (min-width: 768px) {
      display: block;
      height: calc($markdown-height-md - 41px);
    }
    &:focus {
      outline: none;
    }
  }

  // Dark Mode
  &.dark-mode {
    .editor__head {
      background-color: $color-900;
      .editor__title {
        color: $color-400;
      }
    }
    .editor__textarea {
      color: $color-400;
      /* Track */
      &::-webkit-scrollbar-track {
        background-color: $color-900; 
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background-color: $color-500;
      }
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background-color: $color-700; 
      }
    }
  }
}
</style>
