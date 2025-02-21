<script setup>
import ButtonVue from '@/components/Button.vue'
defineProps({
  title: {
    type: String,
  },
})
</script>
<template>
  <div class="container">
    <div class="naslov">
      <h1>{{ title }}</h1>
      <ButtonVue name="Istraži" to="/recepies" class="istraziDugme" />
    </div>
    <div class="slika">
      <img src="../assets/img/pocetnaslika.png" alt="Početna slika" width="500px" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 85%;
  align-items: center;
  margin: auto;
}
.container img {
  float: right;
}
h1 {
  font-size: 5em;
}
.naslov {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.istraziDugme {
  background-color: #f2e8c6;
  color: var(--primary);
  font-weight: bold;
  padding: var(--spacing-md) var(--spacing-sm);
  width: 150px;
  font-size: 1.5em;
  box-shadow: 5px 5px 10px rgb(120, 120, 120);
}
.istraziDugme:hover {
  width: 170px;
  transition: width 0.5s;
  background-color: #f2e8c6;
}
</style>
