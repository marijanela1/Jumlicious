<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <RouterLink class="logo" to="/">
      <img src="../assets/logo/logoblack.png" alt="logo" width="100px" />
    </RouterLink>
    <div class="navigacija">
      <RouterLink to="/" class="link">HOME</RouterLink>
      <RouterLink to="/recepies" class="link">RECEPIES</RouterLink>
      <RouterLink to="/about" class="link">ABOUT</RouterLink>
      <RouterLink to="/recepies/add" class="link">ADD RECEPIE</RouterLink>
    </div>
    <div class="icons">
      <img src="../assets/logo/search.png" alt="searchicon" width="25px" />
      <img src="../assets/logo/user.png"  alt="profile" width="25px" />
    </div>
  </nav>
</template>
<style lang="css" scoped>
nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-align: center;
  width: 100%;
  height: 150px;
  place-items: center;
  padding: 0 var(--spacing-xxl);
}
.navigacija {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xl);
}
.link {
  list-style: none;
  cursor: pointer;
  font-family: 'Sawarabi Mincho', serif;
  font-size: 14px;
  text-decoration: none;
  color: var(--primary);
}
.link:focus {
  text-decoration: underline;
}
.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xl);
}
</style>
