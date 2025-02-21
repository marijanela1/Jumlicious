import apiConfig from '../api/config'

async function updateRecepie(id, updateData) {
  const response = await apiConfig.patch(`/recipes/${id}`, updateData)
  return response.data
}

const updateRecipeApi = {
  updateRecepie,
}

export default updateRecipeApi
