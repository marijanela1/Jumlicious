import authApi from '@/api/auth'
import { useUserStore } from '@/stores/user'
async function forbidUnauthenticated() {
  const useStore = useUserStore()

  if (useStore.currentUser) return true

  try {
    const user = await authApi.getMe()

    useStore.currentUser = user
    return true
  } catch {
    return { name: 'AuthPage' }
  }
}
export { forbidUnauthenticated }
