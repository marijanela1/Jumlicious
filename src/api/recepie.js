import apiConfig from '../api/config'

async function getRecepie() {
  const response = await apiConfig.get('/recipes')

  const {
    data: { data: { recipes } = {} },
  } = response

  return recipes ?? []
}

const recipeApi = {
  getRecepie,
}

export default recipeApi
