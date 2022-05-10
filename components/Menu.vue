<template>
  <div
    class="menu"
    :class="[isMenuOpen ? 'menu-open' : '', isDarkMode ? 'dark-mode' : '']"
  >
    <img class="menu__logo" src="@/assets/logo.svg" alt="" />
    <p class="menu__title">MY DOCUMENTS</p>
    <button @click="createNewDocument()" class="menu__btn-new">
      + New Document
    </button>
    <div class="menu__documents">
      <div
        v-for="(document, index) in documents"
        :key="index"
        class="documents__document"
        @click="setCurrentDocument(index)"
      >
        <img
          class="document__icon"
          src="@/assets/icons/icon-document.svg"
          alt=""
        />
        <div class="document__info">
          <p class="info__date">{{ document.createdAt }}</p>
          <b class="info__name"> {{ document.name }}</b>
        </div>
      </div>
    </div>
    <div class="menu__theme">
      <img class="icon-dark" src="@/assets/icons/icon-dark-mode.svg" alt="" />
      <button @click="toogleDarkMode()" class="theme__selector"></button>
      <img class="icon-light" src="@/assets/icons/icon-light-mode.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("layout", ["isDarkMode", "isMenuOpen"]),
    ...mapState("markdown", ["documents"]),
  },
  methods: {
    ...mapMutations("layout", { toogleDarkMode: "TOOGLE_DARK_MODE" }),
    ...mapMutations("markdown", {
      setCurrentDocument: "SET_CURRENT_DOCUMENT_BY_INDEX",
      createNewDocument: "CREATE_NEW_DOCUMENT",
    }),
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: $menu-sm;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 28px 24px;
  background-color: $color-900;
  transform: translateX(-$menu-sm);
  transition: all 1s;
  &.menu-open {
    transform: translateX(0);
  }
  .menu__logo {
    width: 131px;
  }
  .menu__title {
    @include heading-s;
    color: $color-500;
  }
  .menu__btn-new {
    @include heading-m;
    background-color: $orange;
    width: 100%;
    color: $color-100;
    border-radius: 4px;
    padding: 10px;
    &:hover {
      background-color: $light-orange;
    }
  }
  .menu__documents {
    display: flex;
    flex-direction: column;
    gap: 26px;
    .documents__document {
      @include flex;
      gap: 16px;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        .document__info {
          transform-origin: left;
          transform: scale(1.1);
          .info__name {
            color: $orange;
          }
        }
      }
      .document__info {
        transition: transform 250ms ease;
        .info__date {
          @include body-m;
          color: $color-500;
        }
        .info__name {
          @include heading-m;
          transition: color 250ms ease;
          color: $color-100;
        }
      }
    }
  }
  .menu__theme {
    .icon-light {
      filter: brightness(10);
    }
    @include flex;
    gap: 12px;
    margin-top: auto;
    .theme__selector {
      width: 48px;
      height: 24px;
      background-color: $color-600;
      border-radius: 14px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 50%;
        transform: translate(10px, -50%);
        width: 12px;
        height: 12px;
        background-color: $color-100;
        border-radius: 100%;
        transition: all 0.25s ease;
      }
      &:hover {
        &::before {
          background-color: $orange;
        }
      }
    }
  }
  &.dark-mode {
    .menu__theme {
      .theme__selector {
        &::before {
          transform: translate(-10px, -50%);
        }
      }
      .icon-light {
        filter: brightness(1);
      }
      .icon-dark {
        filter: brightness(10);
      }
    }
  }
}
</style>
