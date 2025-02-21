import apiConfig from '../api/config'

async function deleteRecepie(id) {
  const response = await apiConfig.delete(`/recipes/${id}`)
  return response.data
}

const deleteRecipeApi = {
  deleteRecepie,
}

export default deleteRecipeApi
