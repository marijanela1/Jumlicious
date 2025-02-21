<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, undefined],
    default: undefined,
  },
  label: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="input-container">
    <input
      :id="props.id"
      :value="props.modelValue"
      :type="props.type"
      class="input px-lg pt-lg px-xs"
      placeholder=" "
      @input="
        (event) => {
          emit('update:modelValue', event.target.value)
        }
      "
    />
    <label :for="props.id" class="label">{{ props.label }}</label>
  </div>
</template>

<style lang="css" scoped>
.input-container {
  position: relative;
}
.input {
  margin-top: var(--spacing-md);
  height: var(--spacing-xxl);
  border-radius: 50px;
  background-color: var(--app-bg-lighter);
  box-shadow: 1px 1px 2px rgb(75, 75, 75);
  border: none;
  width: 100%;
}
.input:focus {
  outline: none;
}
.label {
  position: absolute;
  top: 32px;
  left: 24px;
  transition: transform 0.2s;
  color: rgba(0, 0, 0, 0.733);
}
.input:focus + .label,
.input:not(:placeholder-shown) + .label {
  transform: scale(0.75) translateY(-12px);
}
</style>
