<template>
  <div class="base-input">
    <input
      class="base-input__input"
      @input="onInput"
      :type="type"
      :label="label"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },

    value: {
      required: true,
      default: "",
      type: String,
    },
  },

  methods: {
    onInput(event) {
      const target = event.target;
      this.$emit("input", target.value);
    },
  },
};
</script>

<style lang="scss">
.base-input {
  &__input {
    width: 380px;
    height: 54px;
    margin-bottom: 50px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px $gray-border inset;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    padding: 14px 16px;
  }
}
</style>
