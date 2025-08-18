<template>
  <header
    class="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 bg-white shadow-sm relative"
  >
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <img src="../assets/images/white.png" alt="Jupita Logo" class="w-10 h-10" />
      <span class="font-semibold text-blue-700">Jupita</span>
    </div>

    <!-- Desktop Nav -->
    <nav class="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
      <router-link to="/">
        <a
          href="#"
          class="px-4 py-2 hover:text-blue-600 hover:bg-blue-50 hover:pt-2 hover:pl-4 hover:pr-4 hover:pb-2 hover:rounded hover:text-blue"
          >Home</a
        >
      </router-link>

      <!-- Services Dropdown -->
      <div class="relative" ref="dropdownRef">
        <button
          @click="toggleDropdown"
          class="px-4 py-2 hover:bg-blue-50 hover:py-2 hover:px-4 flex items-center hover:text-blue-600 hover:rounded"
        >
          Services
          <svg
            class="w-4 h-4 ml-1 transition-transform duration-200"
            :class="{ 'rotate-180': showDropdown }"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          v-if="showDropdown"
          class="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border p-4 z-50"
        >
          <div
            v-for="(service, index) in services"
            :key="index"
            class="p-3 rounded-md hover:bg-blue-100 cursor-pointer transition"
          >
            <router-link :to="service.path" class="block">
              <p class="font-semibold text-gray-800">{{ service.title }}</p>
              <p class="text-sm text-gray-500">{{ service.description }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <router-link to="/flowkyai">
        <a
          href="#"
          class="px-4 py-2 hover:text-blue-600 hover:bg-blue-50 hover:pt-2 hover:pl-4 hover:pr-4 hover:pb-2 hover:rounded hover:text-blue"
          >FlowkyAI</a
        >
      </router-link>
      <router-link to="/contact">
        <a
          href="#"
          class="px-4 py-2 hover:text-blue-600 hover:bg-blue-50 hover:pt-2 hover:pl-4 hover:pr-4 hover:pb-2 hover:rounded hover:text-blue"
          >Contact</a
        >
      </router-link>
    </nav>

    <!-- Desktop Button -->
    <v-btn
      to="/contact"
      size="large"
      color="[#2563eb]"
      rounded="lg"
      class="!hidden lg:!inline-flex !bg-blue-600 hover:!bg-blue-700 text-white px-6"
    >
      Request Demo
    </v-btn>

    <!-- Mobile Hamburger -->
    <button class="lg:hidden" @click="showMenu = !showMenu">
      <svg
        v-if="!showMenu"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <!-- Mobile Menu -->
    <div
      v-if="showMenu"
      class="absolute top-full left-0 w-full bg-white border-t shadow-md lg:hidden z-50"
    >
      <nav class="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
        <router-link to="/" class="hover:text-blue-600" @click="showMenu = false">Home</router-link>

        <!-- Mobile Services Dropdown -->
        <div>
          <button
            @click="showMobileDropdown = !showMobileDropdown"
            class="flex justify-between items-center w-full hover:text-blue-600"
          >
            Services
            <svg
              class="w-4 h-4 ml-1 transition-transform duration-200"
              :class="{ 'rotate-180': showMobileDropdown }"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-if="showMobileDropdown" class="mt-2 space-y-2 pl-4">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="p-3 rounded-md hover:bg-blue-100 cursor-pointer transition"
            >
              <router-link :to="service.path" class="block" @click="showMenu = false">
                <p class="font-semibold text-gray-800">{{ service.title }}</p>
                <p class="text-sm text-gray-500">{{ service.description }}</p>
              </router-link>
            </div>
          </div>
        </div>

        <router-link to="/flowkyai" class="hover:text-blue-600" @click="showMenu = false"
          >FlowkyAI</router-link
        >
        <router-link to="/contact" class="hover:text-blue-600" @click="showMenu = false"
          >Contact</router-link
        >

        <v-btn
          size="large"
          color="primary"
          rounded="lg"
          class="!bg-blue-600 hover:!bg-blue-700 text-white px-6"
          @click="showMenu = false"
        >
          Request Demo
        </v-btn>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const showDropdown = ref(false)
const showMobileDropdown = ref(false)
const showMenu = ref(false)

const services = [
  {
    title: 'Bank Statement Analysis',
    description: 'Advanced bank statement analysis solutions',
    path: '/BankStatementAnalysis'
  },
  {
    title: 'Loan Origination',
    description: 'Advanced loan origination solutions',
    path: '/coreservices#loan-origination'
  },
  {
    title: 'Credit Underwriting',
    description: 'Advanced credit underwriting solutions',
    path: '/coreservices#credit-underwriting'
  },
  {
    title: 'ID & Credit Search',
    description: 'Advanced id & credit search solutions',
    path: '/coreservices#id-credit-search'
  },
  {
    title: 'Custom Scorecard',
    description: 'Advanced custom scorecard solutions',
    path: '/coreservices#custom-scorecard'
  }
]

const dropdownRef = ref(null)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>
