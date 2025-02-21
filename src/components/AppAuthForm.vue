<script setup>
import ButtonVue from '@/components/Button.vue'
import AppInput from './AppInput.vue'
import { ref } from 'vue'
import authApi from '../api/auth'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const isSignInMode = ref(true)

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const isSubmitting = ref(false)
async function submit() {
  try {
    isSubmitting.value = true
    if (!isSignInMode.value) {
      const { token, user } = await authApi.signup({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
      localStorage.setItem('token', token)
      userStore.currentUser = user

      router.push({
        name: 'HomePage',
      })
      return
    }
    const { token, user } = await authApi.signin({
      email: email.value,
      password: password.value,
    })
    localStorage.setItem('token', token)
    userStore.currentUser = user
    router.push({
      name: 'HomePage',
    })
  } catch {
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <form class="signupcontainer" @submit.prevent="submit">
    <div class="dobrodoslica">
      <div class="flex" style="flex-direction: column; align-items: left">
        <h1 style="color: black">WELCOME!</h1>
        <p class="toggle">
          {{ isSignInMode ? "Don't have account?" : 'You already have an account?' }}
          <a class="toggle-link" @click="isSignInMode = !isSignInMode">{{
            isSignInMode ? 'Sign Up' : 'Sign in'
          }}</a>
        </p>
      </div>
      <img src="../assets/logo/logoblack.png" alt="logo" width="200px" />
    </div>
    <div class="unos">
      <div v-if="!isSignInMode">
        <AppInput id="firstName" v-model="firstName" label="First name" />
        <AppInput id="lastName" v-model="lastName" label="Last name" />
      </div>
      <AppInput id="email" v-model="email" label="Email" type="email" />
      <AppInput id="password" v-model="password" label="Password" type="password" />
    </div>

    <p>Forgot password?</p>
    <ButtonVue :name="isSignInMode ? 'SIGN IN' : 'SIGN UP'" class="dugme" type="submit" />
    <p v-if="isSubmitting">...Submitting</p>
  </form>
</template>

<style lang="css" scoped>
.dobrodoslica {
  display: flex;
  gap: 40px;
  align-items: center;
}
.signupcontainer {
  margin: var(--spacing-md) auto;
  height: 600px;
  width: 600px;
}
.unos {
  margin-top: var(--spacing-sm);
  display: flex;
  flex-direction: column;
}

.dugme {
  margin-top: var(--spacing-xxl);
  height: var(--spacing-xxl);
  width: 100%;
}

h1 {
  font-size: 70px;
  font-weight: bold;
  color: var(--primary);
  text-align: left;
  margin-top: 50px;
}
.toggle {
  color: black;
}
.toggle-link {
  color: var(--primary);
  cursor: pointer;
}
.toggle-link:hover {
  text-decoration: underline;
}
</style>
