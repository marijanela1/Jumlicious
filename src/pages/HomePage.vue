<script setup>
import Hero from '../components/hero.vue'
import SectionRecepie from '@/components/SectionRecepie.vue'
import SectionRecepies from '@/components/SectionRecepies.vue'
</script>
<template>
  <main style="margin-bottom: 200px">
    <Hero
      title="Kuhaj Po Ukusu
Tvoj Vodič Kroz
Svijet Okusa!"
    />
  </main>
  <section>
    <SectionRecepie :limit="3" />
  </section>
  <section>
    <SectionRecepies :limit="8" :show-button="true" :ime="'Recomended'" :visina="350" />
  </section>
</template>
