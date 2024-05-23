<template>
  <header class="header">
    <div class="header__container">
      <img src="../assets/Logo.svg" alt="logo" />

      <div class="action-buttons">
        <BaseButton label="Users" />
        <BaseButton class="action-sign-up" label="Sign Up" />
      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from "./UiComponents/BaseButton.vue";

export default {
  name: "TheHeader",
  components: {
    BaseButton,
  },
  props: {},
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  &__container {
    display: flex;
    justify-content: space-between;
    width: 1170px;

    .action-buttons {
      display: flex;

      .action-sign-up {
        margin-left: 10px;
      }
    }
  }
}
</style>
