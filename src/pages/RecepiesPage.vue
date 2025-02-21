<script setup>
import SectionRecepies from '@/components/SectionRecepies.vue'
</script>
<template>
  <SectionRecepies class="section" :show-button="false" :ime="'Recepies'" :visina="350" />
</template>
<style lang="css" scoped>
.section {
  margin: auto;
  height: fit-content;
}
</style>
