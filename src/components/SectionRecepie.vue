<script setup>
import { ref, onMounted } from 'vue'
import BoxRecepiePocetna from '@/components/BoxRecepiePocetna.vue'
import recipeApi from '@/api/recepie'

defineProps({
  limit: Number,
})
const recepies = ref([])

onMounted(async () => {
  try {
    const result = await recipeApi.getRecepie()
    console.log('API result:', result) // Provjera što API vraća
    recepies.value = Array.isArray(result) ? result : [] // Osiguraj niz
  } catch (error) {
    console.error('Error fetching recipes:', error)
  }
})
</script>
<template>
  <div class="container">
    <BoxRecepiePocetna
      v-for="recipe in recepies.slice(0, limit || recepies.value.length)"
      :key="recipe.id"
      :recipe="recipe"
    />
  </div>
</template>

<style lang="css" scoped>
.container {
  display: grid;
  width: 50%;
  margin: auto;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--app-bg-lighter);
  border-radius: 50px;
  height: 350px;
  margin-top: 300px;
}
</style>
