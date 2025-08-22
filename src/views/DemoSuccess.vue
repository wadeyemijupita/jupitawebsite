<script setup>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
</script>

<template>
  <HeaderView />

  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
      <!-- Animated Success Icon -->
      <div class="flex justify-center mb-6">
        <div class="relative">
          <div
            class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-ping absolute"
          ></div>
          <div
            class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center relative z-10"
          >
            <v-icon size="40" color="green-darken-2">mdi-check-circle</v-icon>
          </div>
        </div>
      </div>

      <!-- Success Message -->
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Demo Scheduled!</h2>
      <p class="text-gray-600 mb-6">
        Thank you for scheduling a demo with us. <br />
        One of our representatives will reach out to you shortly.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col space-y-3">
        <v-btn
        variant="text"
        size="large"
          color="[#2563eb]"
          class="!text-white !py-3"
          @click="$router.push('/')"
        >
          Go Back Home
        </v-btn>
      </div>
    </div>
  </div>

  <FooterView />
</template>

<style scoped>
    .v-btn{
        text-transform: none;
        background-color: #2563eb;
    }
</style>


