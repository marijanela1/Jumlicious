<script setup>
defineProps({
  name: String,
  to: String,
  sirina: Number,
})
</script>
<template>
  <button v-if="!to" class="btn" @click="$emit('click')">
    {{ name }}
  </button>
  <router-link v-else :to="to" class="btn" :style="{ width: sirina + 'px' }">{{
    name
  }}</router-link>
</template>

<style lang="css" scoped>
.btn {
  background-color: #800000;
  border-radius: 100px;
  padding: var(--spacing-sm);
  color: #dad4b5;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Scada', serif;
  text-align: center;
}
.btn:hover {
  background-color: #800000f2;
  transition: width 0.2s;
}
</style>
