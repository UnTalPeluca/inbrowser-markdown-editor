<template>
  <div
    v-if="showDelete"
    class="delete-document"
    :class="isDarkMode ? 'dark-mode' : ''"
  >
    <div @click="toogleDeleteState()" class="delete-overlay"></div>
    <div class="delete-content">
      <h4>Delete this document?</h4>
      <p>
        Are you sure you want to delete the ‘welcome.md’ document and its
        contents? This action cannot be reversed.
      </p>
      <button @click="clickDelete()" class="btn-delete">
        Confirm & Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("layout", ["showDelete", "isDarkMode"]),
  },
  methods: {
    ...mapMutations("layout", { toogleDeleteState: "TOOGLE_DELETE_STATE" }),
    ...mapActions("markdown", ["deleteDocument"]),
    clickDelete() {
      this.deleteDocument();
      this.toogleDeleteState();
    },
  },
};
</script>

<style lang="scss" scoped>
.delete-document {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .delete-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba($color-1000, 0.5);
  }
  .delete-content {
    position: absolute;
    display: flex;
    width: 343px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-100;
    border-radius: 4px;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
    h4 {
      font-family: $family-slab;
      font-size: 20px;
    }
    p {
      @include preview;
      color: $color-500;
    }
    button {
      width: 100%;
      padding: 10px 0;
      color: $color-100;
      background-color: $orange;
      &:hover {
        background-color: $light-orange;
      }
    }
  }
  &.dark-mode {
    .delete-content {
      background-color: $color-900;
    }
    h4 {
      color: $color-100;
    }
    p {
      color: $color-400;
    }
  }
}
</style>
