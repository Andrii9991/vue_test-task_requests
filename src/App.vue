<template>
  <div id="app">
    <TheHeader />
    <TheMain />
    <GetRequests />
    <PostRequests />
  </div>
</template>

<script>
import GetRequests from "./components/GetRequests.vue";
import PostRequests from "./components/PostRequests.vue";
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
    GetRequests,
    PostRequests,
  },

  methods: {
    scrollToElement() {
      document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
              });
            }
          });
        });
      });
    },
  },

  mounted() {
    this.scrollToElement();
  },
};
</script>

<style lang="scss">
#app {
  background-color: $light-gray;
  margin: 0;
  padding: 0;
}
</style>
