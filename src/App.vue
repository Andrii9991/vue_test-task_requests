<template>
  <div id="app">
    <TheHeader />
    <TheMain />
    <GetRequests />
  </div>
</template>

<script>
import GetRequests from "./components/GetRequests.vue";
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
    GetRequests,
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
