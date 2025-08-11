<script setup>
import { ref, onMounted } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
const drawer = ref()
const innerW = window.innerWidth

onMounted(() => {
  if (innerW < 950) {
    drawer.value = !drawer.value
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <HeaderView />

    <!-- Main Content -->
    <main class="flex-1">
      <div class="">
        <slot />
      </div>
    </main>

    <!-- Footer -->
  </div>
</template>


