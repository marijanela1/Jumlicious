import apiConfig from '../api/config'

async function postRecepie(recipeData) {
  const response = await apiConfig.post('/recipes', recipeData)

  return response.data.data.recipes ?? []
}

const createRecipeApi = {
  postRecepie,
}

export default createRecipeApi
