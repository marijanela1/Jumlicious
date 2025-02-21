<script setup>
import AppAuthForm from '@/components/AppAuthForm.vue'
</script>

<template>
  <div class="container">
    <div class="authimg">
      <img src="../assets/img/authbackground.jpg" alt="Auth Background" />
    </div>

    <div class="rightPage">
      <div class="navbar">
        <RouterLink to="/" class="link">HOME</RouterLink>
        <RouterLink to="/about" class="link">ABOUT</RouterLink>
        <img src="../assets/logo/user.png" alt="User Icon" width="25px" height="25px" />
      </div>
      <AppAuthForm />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.authimg {
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.authimg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.rightPage {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  height: 80px;
  padding: 0 20px;
}

.link {
  font-family: 'Sawarabi Mincho', serif;
  font-size: 14px;
  text-decoration: none;
  color: var(--primary);
  transition: color 0.3s;
}

.link:hover {
  color: var(--secondary);
}
</style>
