<script setup>
import createRecipeApi from '@/api/createRecepie'
import { ref } from 'vue'
import ButtonVue from '@/components/Button.vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const newRecepie = ref({
  imageUrl: '',
  name: '',
  description: '',
  ingredients: '',
  instructions: '',
})
const route = useRoute()
async function handleSubmit() {
  try {
    const recipeData = {
      imageUrl: newRecepie.value.imageUrl,
      name: newRecepie.value.name,
      description: newRecepie.value.description,
      ingredients: newRecepie.value.ingredients.split(','),
      instructions: newRecepie.value.instructions.split('.'),
    }

    const result = await createRecipeApi.postRecepie(recipeData)
    console.log('API result:', result)
    router.push('/recepies')
  } catch (error) {
    console.error('Error creating recipe:', error)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="container">
      <h1>New Recepie</h1>
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
            v-model="newRecepie.imageUrl"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Name of recepie"
            class="ime my-lg"
            v-model="newRecepie.name"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            class="ime my-lg"
            v-model="newRecepie.description"
          />
        </div>
        <div>
          <textarea
            placeholder="Ingredients"
            class="input ingredients"
            v-model="newRecepie.ingredients"
          ></textarea>
        </div>
        <div>
          <textarea
            placeholder="Instructions"
            class="input ingredients"
            v-model="newRecepie.instructions"
          ></textarea>
        </div>
      </div>

      <ButtonVue name="Create" style="width: 150px" />
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
