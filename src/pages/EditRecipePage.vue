<script setup>
import updateRecipeApi from '@/api/editRecepie'
import { ref } from 'vue'
import ButtonVue from '@/components/Button.vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import recipeIdApi from '@/api/recipeId'

const route = useRoute()

const recipeId = route.params.id

const form = ref({
  imageUrl: '',
  name: '',
  description: '',
  ingredients: '',
  instructions: '',
})

const state = ref({
  recipe: {},
  isLoading: true,
})
async function handleSubmit() {
  const updatedRecepie = {
    ...form.value,
    imageUrl: form.value.imageUrl,
    name: form.value.name,
    description: form.value.description,
    ingredients:
      typeof form.value.ingredients === 'string' ? form.value.ingredients.split(',') : [],
    instructions:
      typeof form.value.instructions === 'string' ? form.value.instructions.split(',') : [],
  }
  try {
    const response = await updateRecipeApi.updateRecepie(recipeId, updatedRecepie)
    console.log('API result:', response)
    router.push(`/recepies/${recipeId}`)
  } catch (error) {
    console.error('Error creating recipe:', error)
  }
}
onMounted(async () => {
  try {
    const response = await recipeIdApi.getRecepie(recipeId)
    state.recipe = response.data

    Object.assign(form.value, {
      imageUrl: state.recipe.recipe.imageUrl || '',
      name: state.recipe.recipe.name || '',
      description: state.recipe.recipe.description || '',
      ingredients: Array.isArray(state.recipe.recipe.ingredients)
        ? state.recipe.recipe.ingredients.join(', ')
        : '',
      instructions: Array.isArray(state.recipe.recipe.instructions)
        ? state.recipe.recipe.instructions.join(', ')
        : '',
    })
  } catch (error) {
    console.error('Error fetching recipe', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="container">
      <h1>Edit Recepie</h1>
      <div>
        <div class="uploadImage my-lg flex" style="flex-direction: column">
          <label class="add-image" style="cursor: pointer">+ Add image</label>
          <input
            type="text"
            placeholder="URL"
            style="
              width: 300px;
              border: none;
              border-radius: 100px;
              padding: var(--spacing-sm);
              background-color: #dad4b5;
              padding-left: var(--spacing-md);
            "
            v-model="form.imageUrl"
          />
        </div>
        <div>
          <input type="text" placeholder="Name of recepie" class="ime my-lg" v-model="form.name" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            class="ime my-lg"
            v-model="form.description"
          />
        </div>
        <div>
          <textarea
            placeholder="Ingredients"
            class="input ingredients"
            v-model="form.ingredients"
          ></textarea>
        </div>
        <div>
          <textarea
            placeholder="Instructions"
            class="input ingredients"
            v-model="form.instructions"
          ></textarea>
        </div>
      </div>

      <ButtonVue name="Update" style="width: 150px" />
    </div>
  </form>
</template>

<style lang="css" scoped>
.container {
  display: grid;
  place-items: center;
  width: 100%;
  gap: 30px;
}
.uploadImage {
  background-color: #f2e8c6;
  width: 700px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}
.ime {
  width: 300px;
  border: none;
  border-radius: 100px;
  padding: var(--spacing-sm);
  background-color: #f2e8c6;
  padding-left: var(--spacing-md);
}
.ingredients {
  width: 700px;
  height: 200px;
  border: none;
  border-radius: 30px;
  padding: var(--spacing-sm);
  background-color: #f2e8c6;
  padding-left: var(--spacing-md);
}
</style>
