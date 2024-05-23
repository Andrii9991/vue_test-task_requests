<template>
  <a
    v-if="href"
    :href="href"
    :class="['base-button', styleButton, size]"
    :disabled="isDisabled"
  >
    {{ label }}
  </a>
  <button
    v-else
    :class="['base-button', styleButton, size]"
    :disabled="isDisabled"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      required: false,
      default: "Кнопка",
    },
    href: {
      default: "",
    },
    isDisabled: {
      require: false,
      type: Boolean,
    },
    styleButton: {
      default: "",
    },
    size: {
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  color: $black;
  background-color: $yellow;
  border-radius: 80px;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: $gray;
    color: $white;
  }
}

.big {
  width: 120px;
}
</style>
