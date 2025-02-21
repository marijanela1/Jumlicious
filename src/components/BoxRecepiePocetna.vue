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
  <div style="margin-top: -100px">
    <div style="cursor: pointer">
      <img
        :src="recipe.imageUrl"
        @click="divHandler()"
        alt=""
        style="border-radius: 30px"
        class="recipe-image"
      />
    </div>
    <div
      class="flex"
      style="justify-content: space-between; align-items: center; margin: 10px 0 10px"
    >
      <img src="../assets/logo/rating.png" alt="rating" width="50px" />
      <p style="color: grey; font-size: 0.5em">15862 Reviews</p>
    </div>
    <div style="max-width: 150px">
      <h1>{{ recipe.name }}</h1>
    </div>
    <div class="flex" style="gap: 20px; align-items: center; margin: 10px 0 20px">
      <img
        src="../assets/img/Maria.jpg"
        alt=""
        width="30px"
        style="border-radius: 100px; font-weight: bold"
      />
      <p>Maria James</p>
    </div>
    <ButtonVue name="CHECK" :to="'/recepies/' + recipe.id" />
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
  transform: translateY(-20px);
}
</style>
