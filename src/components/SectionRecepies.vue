<script setup>
import Box from './Box.vue'
import { ref, onMounted } from 'vue'
import ButtonVue from './Button.vue'
import recipeApi from '@/api/recepie'

defineProps({
  limit: Number,
  ime: String,
  visina: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})

const recepies = ref([])
onMounted(async () => {
  try {
    const result = await recipeApi.getRecepie()
    console.log('API result:', result)
    recepies.value = Array.isArray(result) ? result : []
  } catch (error) {
    console.error('Error fetching recipes:', error)
  }
})
</script>

<template>
  <div class="container">
    <h1>{{ ime }}</h1>
    <hr style="border: 2px solid var(--primary)" />
    <div class="cont">
      <Box
        v-for="recipe in recepies.slice(0, limit || recepies.length)"
        :key="recipe.id"
        :recipe="recipe"
        :style="{ height: visina + 'px', marginTop: 'var(--spacing-md)' }"
      />
    </div>
    <ButtonVue
      name="MORE"
      to="/recepies"
      style="margin: auto; margin-top: 50px"
      v-if="showButton"
      :sirina="150"
    />
  </div>
</template>

<style lang="css" scoped>
.container {
  display: grid;
  width: 70%;
  margin: auto;
  height: 700px;
  margin-top: 300px;
  align-content: center;
}
.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 60px;
  width: 100%;
}
</style>
