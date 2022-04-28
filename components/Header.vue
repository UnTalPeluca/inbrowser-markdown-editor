<template>
  <header>
    <div class="menu-btn">
      <img src="@/assets/icons/icon-menu.svg" alt="" />
    </div>
    <img class="logo" src="@/assets/logo.svg" alt="" />
    <!------  Start action bar -------->
    <div class="action-bar">
      <div class="action-bar__document">
        <img src="@/assets/icons/icon-document.svg" alt="" />
        <div class="document__name">
          <label class="name__title">Document Name</label>
          <input value="welcome.md" />
        </div>
      </div>
      <div class="action-bar__btns">
        <div class="btn btn-delete">
          <img src="@/assets/icons/icon-delete.svg" alt="" />
        </div>
        <div class="btn btn-save">
          <img src="@/assets/icons/icon-save.svg" alt="" />
          <span>Save Changes</span>
        </div>
      </div>
    </div>
    <!------  End action bar -------->
  </header>
</template>

<style lang="scss" scoped>
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
    @media screen and (min-width: 768px) {
      min-height: $header-md;
      min-width: $header-md;
    }
  }
  .logo {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  .action-bar {
    @include flex;
    width: 100%;
    padding-right: 8px;
    .action-bar__document {
      @include flex;
      gap: 16px;
      .document__name {
        @include flex;
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
          &:focus {
            outline: none;
          }
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
        }
        &.btn-delete {
        }
        &.btn-save {
          background-color: $orange;
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
