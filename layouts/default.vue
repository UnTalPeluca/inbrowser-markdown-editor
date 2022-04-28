<template>
  <div class="default-layout">
    <div class="menu-wrapper" :class="isMenuOpen ? 'menu-open' : ''">
      <Menu />
    </div>
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
    ...mapState("layout", ["isMenuOpen"]),
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
  .menu-wrapper {
    transform: translateX(-$menu-sm);
		transition: all 1s;
    &.menu-open {
      transform: translateX(0);
    }
  }
  .page-wrapper {
		transition: all 1s;
		&.menu-open {
			transform: translateX($menu-sm);
		}
  }
}
</style>
