<script setup>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

const cards = [
  {
    icon: 'mdi-chart-line',
    title: 'Spend Pattern Analysis',
    description:
      'Detailed categorization and analysis of spending patterns to understand customer behavior and lifestyle',
    features: [
      'Category-wise spending',
      'Trend identification',
      'Seasonal patterns',
      'Lifestyle indicators'
    ]
  },
  {
    icon: 'mdi-cash',
    title: 'Income Analysis',
    description: 'Comprehensive income verification and stability assessment from multiple sources',
    features: [
      'Income verification',
      'Stability assessment',
      'Source identification',
      'Growth trends'
    ]
  },
  {
    icon: 'mdi-finance',
    title: 'Cashflow Analysis',
    description: 'Advanced cash flow modeling to predict future financial behavior and capacity',
    features: [
      'Cash flow forecasting',
      'Volatility analysis',
      'Buffer assessment',
      'Seasonal adjustments'
    ]
  },
  {
    icon: 'mdi-alert-circle-outline',
    title: 'Risk Indicators',
    description: 'Advanced fraud detection and risk assessment using machine learning algorithms',
    features: ['Fraud detection', 'Anomaly identification', 'Risk scoring', 'Pattern recognition']
  }
]

const integrationCards = [
  {
    icon: 'mdi-database',
    title: 'Mono',
    description: 'Direct bank integration for real-time data'
  },
  {
    icon: 'mdi-file-document-outline',
    title: 'MBS',
    description: 'Mobile banking statement processing'
  },
  {
    icon: 'mdi-shield-outline',
    title: 'PDF Upload',
    description: 'Manual statement upload and processing'
  }
]
</script>

<template>
  <HeaderView />
  <section class="bg-gradient-to-br from-[#eef3ff] to-[#f4f7ff] py-16">
    <div
      class="max-w-5xl flex mx-auto justify-center grid md:grid-cols-[60%_40%] gap-12 items-center items-center gap-12"
    >
      <!-- Left Text -->
      <div class="px-4 md:px-8">
        <v-btn
          color="blue-lighten-5"
          class="rounded-full text-xs font-medium px-4 py-1 mb-4"
          variant="tonal"
        >
          Bank Statement Analysis
        </v-btn>

        <h2 class="text-4xl font-bold leading-tight">
          Extract <span class="text-blue-600">500+</span> <br />
          Data Points
        </h2>

        <p class="text-gray-600 mt-4 max-w-lg">
          Analyze statements uploaded as PDFs or directly through Mono and MBS integrations.
          Advanced fraud detection with comprehensive insights into spend patterns, income analysis,
          and cash flow assessment.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mt-8 mb-16">
          <v-btn
            to="/contact"
            color="primary"
            class="w-full sm:w-auto px-8 py-4 text-white custom-btn"
            size="large"
            append-icon="mdi-arrow-right"
          >
            Request Demo
          </v-btn>

          <v-btn
            to="/contact"
            variant="outlined"
            color="primary"
            class="w-full sm:w-auto px-8 py-4 custom-btn"
            size="large"
          >
            Learn More
          </v-btn>
        </div>
      </div>

      <!-- Right Icons -->
      <div class="flex justify-center">
        <div class="relative inline-block">
          <!-- Main square -->
          <div
            class="bg-[#e5efff] rounded-xl flex items-center justify-center"
            style="width: 250px; height: 250px"
          >
            <v-icon size="92" color="blue">mdi-file-document-outline</v-icon>
          </div>

          <!-- Top-right floating icon -->
          <div
            class="absolute top-0 right-0 bg-green-100 rounded-lg p-2 shadow-sm flex items-center justify-center"
          >
            <v-icon size="40" color="green">mdi-check</v-icon>
          </div>

          <!-- Bottom-left floating icon -->
          <div
            class="absolute bottom-0 left-0 bg-yellow-100 rounded-lg p-2 shadow-sm flex items-center justify-center"
          >
            <v-icon size="40" color="amber">mdi-trending-up</v-icon>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <!-- Heading -->
      <h2 class="text-3xl font-bold mb-4">Comprehensive Data Extraction</h2>
      <p class="text-gray-600 max-w-2xl mx-auto mb-12">
        Our AI-powered analysis extracts over 500 data points from bank statements, providing
        unprecedented insights into customer financial behavior.
      </p>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h3 class="text-blue-600 text-2xl font-bold mb-2">150+</h3>
          <p class="font-semibold mb-1">Income Analysis</p>
          <p class="text-gray-500 text-sm">Salary, business income, rental income, investments</p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h3 class="text-blue-600 text-2xl font-bold mb-2">200+</h3>
          <p class="font-semibold mb-1">Expense Patterns</p>
          <p class="text-gray-500 text-sm">
            Categorized spending, recurring payments, lifestyle expenses
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h3 class="text-blue-600 text-2xl font-bold mb-2">100+</h3>
          <p class="font-semibold mb-1">Cash Flow Metrics</p>
          <p class="text-gray-500 text-sm">Average balance, volatility, liquidity ratios</p>
        </div>

        <!-- Card 4 -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h3 class="text-blue-600 text-2xl font-bold mb-2">50+</h3>
          <p class="font-semibold mb-1">Risk Indicators</p>
          <p class="text-gray-500 text-sm">Overdrafts, bounced checks, unusual patterns</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-50 mx-auto">
    <h2 class="text-3xl font-bold mb-2 text-center">Advanced Analysis Capabilities</h2>
    <p class="text-gray-500 max-w-2xl mx-auto mb-12 text-center">
      Deep insights into customer financial behavior with intelligent categorization and risk
      assessment.
    </p>

    <div class="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="bg-white rounded shadow-sm p-6 flex flex-col group hover:shadow-lg transition-all duration-300"
      >
        <!-- Icon -->
        <div
          class="p-3 rounded-xl w-fit mb-4 transition-colors duration-300 bg-blue-50 group-hover:bg-blue-600"
        >
          <v-icon
            size="28"
            class="transition-colors duration-300 group-hover:text-white text-blue-600"
          >
            {{ card.icon }}
          </v-icon>
        </div>

        <!-- Title -->
        <h3 class="text-lg font-semibold mb-2">{{ card.title }}</h3>

        <!-- Description -->
        <p class="text-gray-600 mb-4">{{ card.description }}</p>

        <!-- Features -->
        <ul class="mb-2 space-y-2">
          <li
            v-for="(feat, idx) in card.features"
            :key="idx"
            class="flex items-center text-gray-600"
          >
            <v-icon color="green" size="18" class="mr-2">mdi-check-circle-outline</v-icon>
            {{ feat }}
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="py-16 bg-white mx-auto">
    <h2 class="text-3xl font-bold mb-2 text-center">Flexible Integration Options</h2>
    <p class="text-gray-500 max-w-2xl mx-auto mb-12 text-center">
      Multiple ways to access and analyze bank statement data, from direct integrations to manual
      uploads.
    </p>

    <div class="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(item, i) in integrationCards"
        :key="i"
        class="bg-white rounded shadow-lg p-6 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300"
      >
        <!-- Icon -->
        <div
          class="p-4 rounded-full w-fit mb-4 transition-colors duration-300 bg-blue-50 group-hover:bg-blue-600"
        >
          <v-icon
            size="32"
            class="transition-colors duration-300 group-hover:text-white text-blue-600"
          >
            {{ item.icon }}
          </v-icon>
        </div>

        <!-- Title -->
        <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>

        <!-- Description -->
        <p class="text-gray-600">{{ item.description }}</p>
      </div>
    </div>
  </section>
  <FooterView />
</template>

<style scoped>
.v-btn {
  text-transform: none;
}
.custom-btn {
  text-transform: none;
}
</style>
