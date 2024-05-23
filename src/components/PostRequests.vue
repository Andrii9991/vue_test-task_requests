<template>
  <div class="post-requests">
    <div class="post-requests__container">
      <h1 class="requests-title">Working with POST request</h1>
      <form
        class="sign-up-action"
        action="#"
        method="POST"
        @submit.prevent="isSubmit"
      >
        <BaseInput type="text" v-model="name" placeholder="Your name" />
        <BaseInput type="email" v-model="email" placeholder="Email" />
        <BaseInput type="phone" v-model="phone" placeholder="Phone" />

        <div class="sign-up-positions">
          <p class="position-title">Select your position</p>
          <label v-for="position in allPositions" :key="position.id">
            <input
              class="position-change"
              :value="position.id"
              type="radio"
              v-model="positionStore"
            />
            {{ position.name }}
          </label>
        </div>
      </form>

      <BaseButton @click.native="isSubmit" label="Sign up" />
    </div>
  </div>
</template>

<script>
import BaseButton from "./UiComponents/BaseButton.vue";
import BaseInput from "./UiComponents/BaseInput.vue";
import { mapState } from "vuex";
import { signUp, getAllPositions } from "../api/requests";

export default {
  name: "PostRequests",
  components: {
    BaseButton,
    BaseInput,
  },

  data() {
    return {};
  },
  computed: {
    ...mapState({
      allPositions: (state) => state.users.allPositions,
    }),
    name: {
      get() {
        return this.$store.state.users.name;
      },
      set(value) {
        this.$store.commit("setName", value);
      },
    },
    email: {
      get() {
        return this.$store.state.users.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      },
    },
    phone: {
      get() {
        return this.$store.state.users.phone;
      },
      set(value) {
        this.$store.commit("setPhone", value);
      },
    },
    positionStore: {
      get() {
        return this.$store.state.users.positionId;
      },
      set(value) {
        this.$store.commit("setPositionId", value);
      },
    },
  },
  methods: {
    isSubmit() {
      signUp();
      console.log(this.position);
    },
  },

  mounted() {
    getAllPositions();
  },
};
</script>

<style scoped lang="scss">
.post-requests {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 140px;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1170px;

    .requests-title {
      margin-bottom: 50px;
    }

    .sign-up-action {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      width: 380px;

      .sign-up-positions {
        width: 100%;
        display: flex;
        flex-direction: column;
        .position-title {
          margin-bottom: 11px;
        }
        .position-change {
          height: 20px;
          width: 20px;
          background-color: $blue;
          margin: 3px 12px 3px 0;
        }
      }
    }
  }
}
</style>
