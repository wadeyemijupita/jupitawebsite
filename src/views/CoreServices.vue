<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(async () => {
  if (route.hash) {
    await nextTick() // wait for DOM render
    const el = document.querySelector(route.hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
})


const tabs = [
  {
    id: 'loan-origination',
    label: 'Loan Origination',
    icon: 'mdi-file-document-outline',
    description:
      'Streamline your entire loan application process from initial submission to final funding with our highly automated and configurable platform.',
    features: [
      {
        title: 'Digital Applications',
        text: 'Capture applications through any channel with responsive, branded forms.',
        icon: 'mdi-laptop'
      },
      {
        title: 'Automated Workflows',
        text: 'Design and automate complex workflows with our intuitive visual editor.',
        icon: 'mdi-repeat'
      },
      {
        title: 'Document Management',
        text: 'Securely collect, verify, and manage all required applicant documents in one place.',
        icon: 'mdi-file-document'
      },
      {
        title: 'Compliance Engine',
        text: 'Stay compliant with built-in regulatory checks and customizable rule sets.',
        icon: 'mdi-shield-check'
      }
    ]
  },
  {
    id: 'credit-underwriting',
    label: 'Credit Underwriting',
    icon: 'mdi-shield-outline',
    description:
      'Make faster, more confident credit decisions with our AI-powered underwriting engine that provides a holistic view of borrower risk.',
    features: [
      {
        title: 'Holistic Risk Assessment',
        text: 'Aggregate data from multiple sources for a complete 360-degree view of applicants.',
        icon: 'mdi-account-search'
      },
      {
        title: 'AI-Powered Scoring',
        text: 'Utilize machine learning models to generate highly accurate and predictive risk scores.',
        icon: 'mdi-robot'
      },
      {
        title: 'Automated Decisioning',
        text: 'Set rules to automatically approve, deny, or refer applications based on your credit policies.',
        icon: 'mdi-check-decagram'
      },
      {
        title: 'Policy Engine',
        text: 'Easily configure and manage complex underwriting rules without writing any code.',
        icon: 'mdi-file-cog'
      }
    ]
  },
  {
    id: 'id-credit-search',
    label: 'ID & Credit Search',
    icon: 'mdi-account-search-outline', // good for "search for a person"
    description:
      'Verify applicant identities and access comprehensive credit data in real-time to mitigate fraud and assess creditworthiness.',
    features: [
      {
        title: 'Global ID Verification',
        text: 'Verify government-issued IDs from over 200 countries with biometric checks.',
        icon: 'mdi-card-account-details-outline' // better outline version for ID cards
      },
      {
        title: 'AML and Fraud Screening',
        text: 'Screen applicants against global watchlists and detect fraudulent patterns.',
        icon: 'mdi-shield-search' // shield + search for fraud/security scanning
      },
      {
        title: 'Multi-Bureau Credit Reports',
        text: 'Pull real-time credit reports from multiple bureaus through a single API.',
        icon: 'mdi-file-chart-outline' // file + chart for financial reports
      },
      {
        title: 'Credit Data APIs',
        text: 'Seamlessly integrate comprehensive credit data into your existing systems.',
        icon: 'mdi-database-arrow-down-outline' // database + download for data fetching
      }
    ]
  },
  {
    id: 'custom-scorecard',
    label: 'Custom Scorecard',
    icon: 'mdi-chart-bar',
    description:
      'Design, build, and deploy bespoke risk models and scorecards that reflect your unique business logic and risk appetite.',
    features: [
      {
        title: 'Visual Scorecard Builder',
        text: 'Create scorecards using a drag-and-drop interface with custom variables.',
        icon: 'mdi-cog'
      },
      {
        title: 'Back-testing & Simulation',
        text: 'Test your models against historical data to ensure accuracy and performance.',
        icon: 'mdi-chart-line'
      },
      {
        title: 'Model Monitoring',
        text: 'Track model performance over time with automated drift detection and alerts.',
        icon: 'mdi-chart-line'
      },
      {
        title: 'Explainable AI (XAI)',
        text: 'Understand the factors driving each decision for improved transparency.',
        icon: 'mdi-chart-line'
      }
    ]
  }
]

const sectionRefs = ref([])
const activeSection = ref(tabs[0].id)
const mobileTab = ref(tabs[0].id)

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function handleMobileTabChange(id) {
  mobileTab.value = id
  scrollTo(id)
}

function onScroll() {
  let current = tabs[0].id
  sectionRefs.value.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= 100) {
      current = section.id
    }
  })
  activeSection.value = current
  mobileTab.value = current
}

onMounted(() => {
  sectionRefs.value = tabs.map((tab) => document.getElementById(tab.id))
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <HeaderView />
  <div class="text-center mb-8 bg-gray-50 py-20">
    <div
      class="inline-block px-4 py-1 mb-4 bg-blue-100 border border-blue-100 rounded-full shadow-sm text-sm font-medium text-blue-700"
    >
      End-to-end Lending Platform
    </div>
    <h1 class="text-3xl md:text-4xl font-bold mt-4">Streamline Your Entire Lending Lifecycle</h1>
    <p class="text-gray-600 mt-3 max-w-2xl mx-auto">
      From origination and underwriting to identity verification and custom scoring, our integrated
      solutions cover every step of your process.
    </p>
  </div>

  <div class="relative bg-white py-10 max-w-6xl justify-center mx-auto flex">
    <div class="flex">
      <!-- Desktop Sidebar Tabs -->
      <div class="hidden md:flex flex-col w-60 p-4 space-y-3 sticky top-0 h-screen">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="scrollTo(tab.id)"
          :class="[
            'flex items-center space-x-2 px-3 py-2 rounded-md text-left transition',
            activeSection === tab.id
              ? 'bg-blue-100 text-blue-600 font-semibold'
              : 'hover:bg-gray-100'
          ]"
        >
          <v-icon size="20">{{ tab.icon }}</v-icon>

          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-6 space-y-20">
        <!-- Mobile Tabs -->
        <div class="md:hidden sticky top-0 z-50 bg-white border-b">
          <v-tabs v-model="mobileTab" show-arrows @update:modelValue="handleMobileTabChange">
            <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.id">
              <v-icon :icon="tab.icon" size="20" class="mr-1"></v-icon>
              {{ tab.label }}
            </v-tab>
          </v-tabs>
        </div>

        <!-- Sections -->
        <section
          v-for="tab in tabs"
          :key="tab.id"
          :id="tab.id"
          ref="sectionRefs"
          class="scroll-mt-20"
        >
          <div class="flex items-center mb-2">
            <v-icon
              :icon="tab.icon"
              size="30"
              class="text-blue-500 mr-2 bg-blue-100 rounded-xl p-6"
            ></v-icon>
            <h3 class="font-semibold text-xl">{{ tab.label }}</h3>
          </div>
          <p class="text-gray-500 mb-6">{{ tab.description }}</p>

          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="(feature, i) in tab.features"
              :key="i"
              class="bg-gray-50 rounded-lg shadow p-6 hover:shadow-md transition"
            >
              <div class="flex items-center mb-2">
                <v-icon :icon="feature.icon" size="20" class="text-blue-500 mr-2"></v-icon>
                <h3 class="font-semibold">{{ feature.title }}</h3>
              </div>
              <p class="text-sm text-gray-500">{{ feature.text }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <section class="py-16">
    <div class="max-w-5xl mx-auto bg-blue-600 rounded-lg text-center px-6 py-12">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Ready to See It in Action?</h2>
      <p class="text-blue-100 max-w-2xl mx-auto mb-6">
        Let us show you how Jupita's integrated platform can revolutionize your lending operations.
        Schedule a personalized demo with one of our experts today.
      </p>
      <router-link
        to="/contact"
        class="inline-flex items-center px-5 py-2.5 bg-white text-blue-600 font-medium rounded-md shadow hover:bg-blue-50 transition"
      >
        Request a Demo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </router-link>
    </div>
  </section>

 <FooterView  :showCta="false"/>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem; /* to offset sticky nav */
}
</style>
