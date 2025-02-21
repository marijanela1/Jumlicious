import apiConfig from './config'

async function getRecepie(id) {
  const response = await apiConfig.get(`/recipes/${id}`)
  console.log('API full response:', response)

  const { data } = response
  const recipe = data ? data : null

  return recipe ?? {}
}

const recipeIdApi = {
  getRecepie,
}

export default recipeIdApi
