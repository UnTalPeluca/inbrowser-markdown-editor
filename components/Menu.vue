<template>
  <div class="menu" :class="isDarkMode ? 'dark-mode' : ''">
    <img class="menu__logo" src="@/assets/logo.svg" alt="" />
    <p class="menu__title">MY DOCUMENTS</p>
    <button class="menu__btn-new">+ New Document</button>
    <div class="menu__documents">
      <div class="documents__document">
        <img
          class="document__icon"
          src="@/assets/icons/icon-document.svg"
          alt=""
        />
        <div class="document__info">
          <p class="info__date">01 April 2022</p>
          <b class="info__name"> untitled-document.md</b>
        </div>
      </div>
    </div>
    <div class="menu__theme">
      <img src="@/assets/icons/icon-dark-mode.svg" alt="" />
      <button @click="toogleDarkMode()" class="theme__selector"></button>
      <img src="@/assets/icons/icon-light-mode.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("layout", { isDarkMode: "darkMode" }),
  },
  methods: {
    ...mapMutations("layout", { toogleDarkMode: "TOOGLE_DARK_MODE" }),
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-width: $menu-sm;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 28px 24px;
  background-color: $color-900;
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
    .documents__document {
      @include flex;
      gap: 16px;
      cursor: pointer;
      .document__info {
        .info__date {
          @include body-m;
          color: $color-500;
        }
        .info__name {
          @include heading-m;
          color: $color-100;
        }
      }
    }
  }
  .menu__theme {
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
        transition: all 0.5s;
      }
    }
  }

  // Dark mode start

  &.dark-mode {
    .theme__selector {
      &::before {
        transform: translate(-10px, -50%);
      }
    }
  }
}
</style>
