<template>
  <header class="header">
    <div class="header__container">
      <img src="../assets/Logo.svg" alt="logo" />

      <div class="action-buttons">
        <BaseButton href="#getrequests" label="Users" />
        <BaseButton
          href="#post-requests"
          class="action-sign-up"
          label="Sign Up"
        />
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

      @media (max-width: 1024px) {
        margin-right: 60px;
      }

      @media (max-width: 768px) {
        margin-right: 32px;
      }
      @media (max-width: 400px) {
        margin-right: 16px;
      }

      .action-sign-up {
        margin-left: 10px;
      }
    }
  }
}
</style>
