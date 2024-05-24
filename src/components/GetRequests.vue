<!-- <template>
  <div class="get-requests">
    <div class="get-requests__container">
      <h1 class="requests-title">Working with GET request</h1>
      <div class="users-cards">
        <div class="users-cards__item" v-for="user in allUsers" :key="user.id">
          <img class="avatar" :src="user.photo" alt="photo" />
          <p class="user-name">{{ user.name }}</p>
          <p>{{ user.position }}</p>
          <p>{{ user.email }}</p>
          <p class="user-phone">{{ user.phone }}</p>
        </div>
      </div>
      <BaseButton v-if="allUsers.length > 6" label="Show more" size="big" />
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
    return {};
  },

  computed: {
    ...mapState({
      allUsers: (state) => state.users.allUsers,
    }),
  },

  async mounted() {
    await getAllUsers();
    console.log(this.allUsers);
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

    .requests-title {
      margin-bottom: 50px;
    }

    .users-cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(370px, 370px));
      justify-content: center;
      justify-items: center;
      align-items: center;
      margin-bottom: 50px;
      gap: 29px;

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
</style> -->

<template>
  <div class="get-requests">
    <div class="get-requests__container">
      <h1 class="requests-title">Working with GET request</h1>
      <div class="users-cards">
        <div
          class="users-cards__item"
          v-for="user in displayedUsers"
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
        v-if="showMoreButtonVisible"
        @click="showMore"
        label="Show more"
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
      showMoreButtonVisible: false,
      defaultDisplayCount: 6,
    };
  },

  computed: {
    ...mapState({
      allUsers: (state) => state.users.allUsers,
    }),

    displayedUsers() {
      if (this.showMoreButtonVisible) {
        return this.allUsers;
      } else {
        return this.allUsers.slice(0, this.defaultDisplayCount);
      }
    },
  },

  methods: {
    async showMore() {
      this.showMoreButtonVisible = true;
    },
  },

  async mounted() {
    await getAllUsers();
    if (this.allUsers.length > this.defaultDisplayCount) {
      this.showMoreButtonVisible = true;
    }
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

    .requests-title {
      margin-bottom: 50px;
    }

    .users-cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(370px, 370px));
      justify-content: center;
      justify-items: center;
      align-items: center;
      margin-bottom: 50px;
      gap: 29px;

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
