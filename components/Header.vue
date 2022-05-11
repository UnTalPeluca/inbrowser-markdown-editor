<template>
  <header :class="isDarkMode ? 'dark-mode' : ''">
    <div @click="toogleMenuState()" class="menu-btn">
      <img v-if="isMenuOpen" src="@/assets/icons/icon-close.svg" alt="" />
      <img v-else src="@/assets/icons/icon-menu.svg" alt="" />
    </div>
    <img class="logo" src="@/assets/logo.svg" alt="" />
    <hr class="desktop-divider">
    <div class="action-bar">
      <div class="action-bar__document">
        <img src="@/assets/icons/icon-document.svg" alt="" />
        <div class="document__name">
          <label for="Name" class="name__title">Document Name</label>
          <input id="Name" @input="changeName($event.target.value)" :value="currentDocument ? currentDocument.name : ''" />
          <div class="input__border-bottom"></div>
        </div>
      </div>
      <div class="action-bar__btns">
        <div @click="toogleDeleteState()" class="btn btn-delete">
          <img src="@/assets/icons/icon-delete.svg" alt="" />
        </div>
        <div @click="saveChanges()" class="btn btn-save">
          <img src="@/assets/icons/icon-save.svg" alt="" />
          <span>Save Changes</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("markdown", ["currentDocument"]),
    ...mapState("layout", ["isDarkMode", "isMenuOpen"]),
  },
  methods: {
    ...mapMutations("layout", {
      toogleMenuState: "TOOGLE_MENU_STATE",
      toogleDeleteState: "TOOGLE_DELETE_STATE",
    }),
    ...mapMutations("markdown", {
      saveChanges: "SAVE_CHANGES",
      changeName: "SET_CURRENT_DOCUMENT_NAME"
    })
  },
};
</script>
<style lang="scss">
header {
  @include flex;
  background-color: $color-800;
  gap: 24px;
  min-height: $header-sm;
  @media screen and (min-width: 768px) {
    min-height: $header-md;
  }
  .menu-btn {
    @include center;
    min-height: $header-sm;
    min-width: $header-sm;
    background-color: $color-700;
    cursor: pointer;
    transition: background-color 250ms linear;
    &:hover {
      background-color: $orange;
    }
    img {
      width: 23px;
    }
    @media screen and (min-width: 768px) {
      min-height: $header-md;
      min-width: $header-md;
      img {
        width: 30px;
      }
    }
  }
  .logo {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  .desktop-divider {
    display: none;
    width: 1px;
    height: 40px;
    background-color: $color-600;
    opacity: 0.5;
    @media screen and (min-width: 1280px) {
      display: block;
    }
  }
  .action-bar {
    @include flex;
    width: 100%;
    padding-right: 8px;
    @media screen and (min-width: 768px) {
      padding-right: 16px;
    }
    .action-bar__document {
      @include flex;
      gap: 16px;
      .document__name {
        @include flex;
        position: relative;
        gap: 2px;
        @media screen and (min-width: 768px) {
          flex-direction: column;
        }
        .name__title {
          @include body-m;
          display: none;
          @media screen and (min-width: 768px) {
            display: inline;
            color: $color-500;
            margin-right: auto;
          }
        }
        input {
          @include heading-m;
          background: transparent;
          color: white;
          width: 150px;
          caret-color: $orange;
          &:focus {
            outline: none;
            + .input__border-bottom {
              width: 150px;
              @media screen and (min-width: 768px) {
                width: 325px;
              }
            }
          }
          @media screen and (min-width: 768px) {
            width: 325px;
          }
        }
        .input__border-bottom {
          position: absolute;
          bottom: -5px;
          left: 0;
          transition: width 250ms ease;
          width: 0px;
          height: 1px;
          background-color: $color-100;
        }
      }
    }
    .action-bar__btns {
      @include flex;
      margin-left: auto;
      gap: 12px;
      .btn {
        @include center;
        min-height: 40px;
        min-width: 40px;
        border-radius: 4px;
        cursor: pointer;
        @media screen and (min-width: 768px) {
          @include flex;
          justify-content: space-between;
          gap: 6px;
        }
        &.btn-delete {
          img {
            transition: transform 250ms ease;
          }
          &:hover {
            img {
              filter: $filter-orange;
              transform: scale(1.1);
            }
          }
        }
        &.btn-save {
          background-color: $orange;
          &:hover {
            background-color: $light-orange;
          }
          @media screen and (min-width: 768px) {
            min-width: 152px;
            padding: 0 16px;
          }
          span {
            @include heading-m;
            display: none;
            color: $color-100;
            @media screen and (min-width: 768px) {
              display: inline;
              max-width: 152px;
            }
          }
        }
      }
    }
  }
}
</style>
