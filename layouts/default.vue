<template>
  <div class="default-layout" :class="isDarkMode ? 'dark-mode' : ''">
    <Menu />
    <div class="page-wrapper" :class="isMenuOpen ? 'menu-open' : ''">
      <Header />
      <Nuxt />
    </div>
    <Delete />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("layout", ["isMenuOpen", "isDarkMode"]),
  },
};
</script>

<style lang="scss">
.default-layout {
  height: 100vh;
  background-color: $color-100;
  color: $color-700;
  .page-wrapper {
    transition: all 1s;
    &.menu-open {
      transform: translateX($menu-sm);
    }
  }
}
</style>
