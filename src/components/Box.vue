<script setup>
import ButtonVue from './Button.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  recipe: Object,
})
function divHandler() {
  router.push(`/recepies/${props.recipe.id}`)
}
</script>
<template>
  <div
    class="flex"
    style="
      flex-direction: column;
      gap: 20px;
      text-align: center;
      align-items: center;
      background-color: var(--app-bg-lighter);
      padding: var(--spacing-lg);
      border-radius: 50px;
      width: 250px;
    "
  >
    <div
      style="height: 250px; display: flex; flex-direction: column; gap: 20px; align-items: center"
    >
      <div @click="divHandler" style="cursor: pointer">
        <img :src="recipe.imageUrl" alt="" style="border-radius: 30px" class="recipe-image" />
      </div>
      <div style="max-width: 170px; font-size: var(--spacing-md)">
        <h1>{{ recipe.name }}</h1>
      </div>
    </div>
    <ButtonVue name="CHECK" :to="'/recepies/' + recipe.id" :sirina="150" />
  </div>
</template>

<style lang="css" scoped>
.recipe-image {
  width: 150px;
  height: 150px;
  border-radius: 30px;
  object-fit: cover;
  object-position: center;
  display: block;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.recipe-image:hover {
  transform: translateY(-15px);
}
</style>
