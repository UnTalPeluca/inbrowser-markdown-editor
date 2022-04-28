<template>
<div class="default-layout">
    <Menu v-if="isMenuOpen" />
    <div class="page-wrapper">
        <Header />
        <Nuxt />
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('layout', ['isMenuOpen'])
    },
}
</script>