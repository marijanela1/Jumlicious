<script setup>
import ButtonVue from '@/components/Button.vue'
import recipeIdApi from '@/api/recipeId'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import deleteRecipeApi from '@/api/deleteRecepie'

const route = useRoute()
const recipeId = ref(route.params.id)
const state = ref(null)
const router = useRouter()
const deleteThisRecepie = async () => {
  try {
    console.log('Deleting recipe with ID:', recipeId.value)
    await deleteRecipeApi.deleteRecepie(recipeId.value)
    router.push('/recepies')
  } catch (error) {
    console.error('Error deleting recipe:', error)
  }
}
onMounted(async () => {
  try {
    const result = await recipeIdApi.getRecepie(recipeId.value)
    console.log('API full response:', result)
    if (result && result.data && result.data.recipe) {
      const recipe = result.data.recipe
      state.value = recipe || {}
    } else {
      console.error('No recipe found in the response')
    }
  } catch (error) {
    console.error('Error fetching recipe:', error)
  }
})
</script>

<template>
  <section>
    <div class="container">
      <div v-if="state && state.imageUrl">
        <img
          :src="state.imageUrl"
          alt="Recipe Image"
          width="700px"
          class="recipe-img"
          style="border-radius: 50px; box-shadow: 10px 10px 20px gray"
        />
      </div>
      <div class="tekst" v-if="state">
        <h1>{{ state.name || 'Recipe Name' }}</h1>
        <p>{{ state.description || 'Description not available' }}</p>
        <p>{{ state.ingredients || 'Ingredients not available' }}</p>
        <p>{{ state.instructions || 'Instructions not available' }}</p>
      </div>
      <div style="display: flex; gap: 50px" v-if="state">
        <ButtonVue :name="'Edit Recipe'" :to="`/recepies/edit/${recipeId}`" />
        <ButtonVue :name="'Delete Recipe'" @click="deleteThisRecepie" />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container {
  display: grid;
  width: 80%;
  margin: auto;
  place-items: center;
  gap: 70px;
}
.tekst {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
}
.tekst h1 {
  font-size: var(--spacing-xxl);
}
.tekst p {
  font-size: var(--spacing-lg);
  color: rgb(67, 67, 67);
}
.recipe-img {
  width: 800px;
  height: 500px;
  border-radius: 30px;
  object-fit: cover;
  object-position: center;
  display: block;
  position: relative;
  transition: transform 0.3s ease-in-out;
}
</style>
