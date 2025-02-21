<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Navbar from './components/navigation.vue'
import FooterVue from './components/Footer.vue'
import { computed } from 'vue'
const route = useRoute()
const isAuthPage = computed(() => route.path === '/auth')
</script>

<template>
  <Navbar v-if="!isAuthPage" />
  <RouterView />
  <FooterVue v-if="!isAuthPage" />
</template>
