<template>
  <div class="main">
    <div class="main__container">
      <div class="main-content">
        <h1 class="main-content__title">
          Test assignment for front-end developer
        </h1>
        <p class="main-content__subtitle">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <BaseButton href="#post-requests" label="Sign Up" class="auth-action" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./UiComponents/BaseButton.vue";
export default {
  name: "TheMain",
  components: {
    BaseButton,
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 140px;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1170px;
    height: 650px;
    background: url(../assets/pexels-alexandr-podvalny-1227513.jpeg) no-repeat
      center;
    background-color: rgba(26, 26, 26, 0.5);

    @media (max-width: 768px) {
      max-height: 500px;
    }

    .main-content {
      max-width: 380px;

      @media (max-width: 400px) {
        margin: 0 16px;
      }

      &__title {
        margin-bottom: 21px;
        text-align: center;
      }

      &__subtitle {
        text-align: center;
        margin-bottom: 32px;
      }

      .auth-action {
        margin: 0 auto;
      }
    }
  }
}
</style>
