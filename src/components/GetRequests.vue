<template>
  <div class="get-requests" id="getrequests">
    <div class="get-requests__container">
      <h1 class="requests-title">Working with GET request</h1>
      <div class="users-cards" :class="{ active: showUsers }">
        <div
          class="users-cards__item"
          v-for="user in sortedAllUsers"
          :key="user.id"
        >
          <img class="avatar" :src="user.photo" alt="photo" />
          <p class="user-name">{{ user.name }}</p>
          <p>{{ user.position }}</p>
          <p>{{ user.email }}</p>
          <p class="user-phone">{{ user.phone }}</p>
        </div>
      </div>
      <BaseButton
        v-if="sortedAllUsers.length >= 6"
        @click.native="onShowUsers"
        :label="showUsers ? 'Show less' : 'Show more'"
        size="big"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "./UiComponents/BaseButton.vue";
import { mapState } from "vuex";
import { getAllUsers } from "../api/requests";
export default {
  name: "PreviewUsersCards",
  components: {
    BaseButton,
  },
  data() {
    return {
      showUsers: false,
    };
  },

  computed: {
    ...mapState({
      allUsers: (state) => state.users.allUsers,
    }),

    sortedAllUsers() {
      const storeAllUsers = [...this.allUsers];
      const firstSixUsers = storeAllUsers.slice(0, 6);
      if (this.showUsers === false) {
        return firstSixUsers;
      } else {
        return storeAllUsers;
      }
    },
  },

  methods: {
    onShowUsers() {
      this.showUsers = !this.showUsers;
    },
  },

  async mounted() {
    await getAllUsers();
  },
};
</script>

<style scoped lang="scss">
.get-requests {
  display: flex;
  justify-content: center;
  width: 100%;

  &__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 1170px;

    @media (max-width: 768px) {
      margin: 0 32px;
    }

    @media (max-width: 360px) {
      margin: 0 16px;
    }

    .requests-title {
      margin-bottom: 50px;
    }

    .users-cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
      justify-content: center;
      justify-items: center;
      align-items: center;
      margin-bottom: 50px;
      gap: 29px;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }

      .active {
        max-height: 100%;
      }

      &__item {
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        align-items: center;
        background-color: $white;
        width: 100%;
        padding: 20px;

        .avatar {
          border-radius: 50%;
          margin-bottom: 20px;
        }
        .user-name {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
