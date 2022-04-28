<template>
  <div class="delete-document">
    <h4>Delete this document?</h4>
    <p>
      Are you sure you want to delete the ‘welcome.md’ document and its
      contents? This action cannot be reversed.
    </p>
    <button class="btn-delete">Confirm & Delete</button>
  </div>
</template>

<style lang="scss" scoped>
.delete-document {
  position: fixed;
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
  p {
    @include preview;
		color: $color-500
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
</style>
