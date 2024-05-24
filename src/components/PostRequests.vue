<template>
  <div class="post-requests" id="post-requests">
    <div class="post-requests__container">
      <h1 class="requests-title">Working with POST request</h1>

      <span v-if="errorMessage" class="error-message">
        <strong>Check your {{ errorMessage }} field please!</strong>
      </span>
      <img
        class="success-image"
        v-if="succesRegistration"
        src="../assets/success-image.svg"
        alt="succes-registretion"
      />

      <form
        class="sign-up-action"
        action="#"
        method="POST"
        @submit.prevent="isSubmit"
      >
        <input
          class="input-name input"
          v-model="name"
          type="text"
          placeholder="Your name"
        />

        <input
          class="input-email input"
          v-model="email"
          type="email"
          placeholder="Email"
        />
        <input
          class="input-phone input"
          type="phone"
          placeholder="+380"
          v-model="phone"
          v-maska
          data-maska="+380#########"
        />

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

        <div class="file-input-container">
          <input
            type="file"
            class="sm-input-file"
            id="sm-ip-1"
            @input="handleFileUpload"
          />
          <label class="for-sm-input-file" for="sm-ip-1"
            >Upload
            <hr class="line" />
            <span class="span-text" id="file-name">{{
              selectedFile ? selectedFile.name : "Upload the file"
            }}</span>
          </label>
          <span class="helper-upload-file"
            >The photo must be jpeg/jpg type.</span
          >
        </div>
      </form>

      <BaseButton
        :isDisabled="disabledButton"
        @click.native="isSubmit"
        label="Sign up"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "./UiComponents/BaseButton.vue";
import { vMaska } from "maska";
import { mapState } from "vuex";
import { signUp, getAllPositions, getAllUsers } from "../api/requests";

export default {
  directives: { maska: vMaska },
  name: "PostRequests",
  components: {
    BaseButton,
  },

  data() {
    return {
      selectedFile: "",
      errorMessage: "",
      succesRegistration: false,
    };
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
    disabledButton() {
      return (
        this.name === "" ||
        this.phone === "" ||
        this.phone === "" ||
        this.selectedFile === ""
      );
    },
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];

      this.$store.commit("setFile", this.selectedFile);
    },
    async isSubmit() {
      const { success, message } = await signUp();
      if (success) {
        this.succesRegistration = success;
        await this.$store.commit("setCurrentUser");
        await this.$store.commit("setNewUser");
        this.name = "";
        this.email = "";
        this.phone = "";
        this.selectedFile = "";
        this.errorMessage = "";
        setTimeout(this.onShowSuccessImage, 5000);
      } else if (!success) {
        this.errorMessage = message;
      } else {
        await getAllUsers();
      }
    },
    onShowSuccessImage() {
      this.succesRegistration = !this.succesRegistration;
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
    @media (max-width: 400px) {
      width: 328px;
    }

    .requests-title {
      margin-bottom: 50px;
      text-align: center;

      @media (max-width: 360px) {
        width: 328px;
      }
    }

    .success-image {
      margin: 26px 0;
    }

    .error-message {
      color: $red;
      margin-bottom: 12px;
      font-weight: 400;
      letter-spacing: 2px;
      font-family: "Nunito", sans-serif;
    }

    .sign-up-action {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      width: 380px;

      .input {
        width: 380px;
        height: 54px;
        margin-bottom: 50px;
        border-radius: 4px;
        box-shadow: 0 0 0 1px $gray-border inset;
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
        padding: 14px 16px;

        @media (max-width: 400px) {
          width: 328px;
          height: 54px;
        }
      }

      .sign-up-positions {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        @media (max-width: 400px) {
          width: 328px;
        }
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
      .file-input-container {
        display: inline;

        .sm-input-file {
          opacity: 0;
        }
        .for-sm-input-file {
          display: flex;
          width: 380px;
          height: 54px;
          border-radius: 4px;
          box-shadow: 0 0 0 1px $gray-border inset;
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          padding: 14px 16px;
          color: $black;
          cursor: pointer;
          @media (max-width: 400px) {
            width: 328px;
          }

          .line {
            height: 100%;
            margin-left: 16px;
          }
        }

        .span-text {
          display: inline;
          color: $gray-file;
          padding-left: 16px;
        }
        .helper-upload-file {
          font-size: 12px;
          line-height: 14px;
          font-weight: 400;
          margin-top: 8px;
          font-family: "Nunito", sans-serif;
          color: $gray-file;
        }
      }
    }
  }
}
</style>
