<script setup>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
const cards = [
  {
    icon: 'mdi-file-document-outline',
    iconBg: 'bg-blue-50 group',
    iconColor: 'primary',
    title: 'Bank Statement Analysis',
    description: 'Extract 500+ data points with advanced fraud detection and seamless integrations',
    features: ['Spend Pattern Analysis', 'Income Analysis', 'Cashflow Analysis', 'Risk Indicators'],
    link: '/BankStatementAnalysis', // should match the section id below if you have it
    type: 'page'
  },
  {
    icon: 'mdi-shield-check-outline',
    iconBg: 'bg-blue-50 group',
    iconColor: 'primary',
    title: 'Credit Underwriting',
    description: 'Comprehensive risk assessment with customizable scoring models',
    features: ['Risk Assessment', 'Credit Scoring', 'Decision Automation', 'Portfolio Analysis'],
    link: 'credit-underwriting',
    type: 'section'
  },
  {
    icon: 'mdi-file-outline',
    iconBg: 'bg-blue-50 group',
    iconColor: 'primary',
    title: 'Loan Origination',
    description: 'Streamlined loan processing from application to approval',
    features: [
      'Application Processing',
      'Document Management',
      'Workflow Automation',
      'Compliance Tracking'
    ],
    link: 'loan-origination',
    type: 'section'
  },
  {
    icon: 'mdi-chart-line',
    iconBg: 'bg-blue-50 group',
    iconColor: 'primary',
    title: 'Custom Scorecard',
    description: 'Pre-built custom scorecards to assess borrower risk based on specific criteria',
    features: ['Risk Scoring', 'Custom Parameters', 'Portfolio Optimization', 'Real-time Updates'],
    link: 'custom-scorecard',
    type: 'section'
  },
  {
    icon: 'mdi-brain',
    iconBg: 'bg-blue-50 group',
    iconColor: 'primary',
    title: 'AI Credit Decisions',
    description: 'Intelligent credit decisions powered by advanced machine learning',
    features: ['ML Models', 'Decision Trees', 'Risk Prediction', 'Automated Approval'],
    link: 'ai-credit-decisions', // if you have this section in tabs,
    type: 'section'
  },
  {
    icon: 'mdi-flash-outline',
    iconBg: 'bg-blue-50 group',
    iconColor: 'primary',
    title: 'ID Verification',
    description: 'Secure identity verification with advanced fraud detection',
    features: ['Document Verification', 'Biometric Matching', 'Fraud Detection', 'Compliance'],
    link: 'id-credit-search',
    type: 'section'
  }
]
</script>

<template>
  <HeaderView />

  <section class="bg-gradient-to-b from-[#edf2fe] to-[#f5f8ff] py-20 text-center">
    <!-- Tag -->
    <div
      class="inline-block px-4 py-1 mb-4 bg-blue-100 border border-blue-100 rounded-full shadow-sm text-sm font-medium text-blue-700"
    >
      Advanced Lending Solutions
    </div>

    <!-- Heading -->
    <h1 class="text-4xl md:text-5xl font-bold mb-6">
      Revolutionize Your <br />
      <span class="text-blue-600 mt-4">Lending Process</span>
    </h1>

    <!-- Description -->
    <p class="max-w-2xl mx-auto text-gray-600 text-lg mb-8">
      Comprehensive AI-powered solutions for loan origination, credit underwriting, and risk
      assessment. Streamline operations with advanced analytics and seamless integrations.
    </p>

    <!-- Buttons -->
    <div class="flex justify-center gap-4">
      <v-btn
        size="large"
        to="/contact"
        color="[#2563eb]"
        class="px-6 py-3 !bg-blue-600 hover:!bg-blue-700 text-white font-semibold rounded-lg"
        elevation="2"
        append-icon="mdi-arrow-right"
      >
        Request Demo
      </v-btn>

      <v-btn
        size="large"
        to="/flowkyai"
        variant="outlined"
        color="primary"
        class="px-6 py-3 font-semibold rounded-lg"
      >
        Explore FlowkyAI
      </v-btn>
    </div>
  </section>

  <section class="py-16 bg-white">
    <div
      class="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
    >
      <!-- Stat Item -->
      <div class="flex flex-col items-center">
        <div class="p-3 bg-blue-50 rounded mb-3">
          <v-icon color="primary" size="28">mdi-file-document-outline</v-icon>
        </div>
        <h3 class="text-2xl font-bold">500+</h3>
        <p class="text-gray-600">Data Points Extracted</p>
      </div>

      <!-- Stat Item -->
      <div class="flex flex-col items-center">
        <div class="p-3 bg-blue-50 rounded mb-3">
          <v-icon color="primary" size="28">mdi-shield-check-outline</v-icon>
        </div>
        <h3 class="text-2xl font-bold">99.9%</h3>
        <p class="text-gray-600">Uptime Guarantee</p>
      </div>

      <!-- Stat Item -->
      <div class="flex flex-col items-center">
        <div class="p-3 bg-blue-50 rounded mb-3">
          <v-icon color="primary" size="28">mdi-flash-outline</v-icon>
        </div>
        <h3 class="text-2xl font-bold">10x</h3>
        <p class="text-gray-600">Faster Processing</p>
      </div>

      <!-- Stat Item -->
      <div class="flex flex-col items-center">
        <div class="p-3 bg-blue-50 rounded mb-3">
          <v-icon color="primary" size="28">mdi-earth</v-icon>
        </div>
        <h3 class="text-2xl font-bold">50+</h3>
        <p class="text-gray-600">Integration Partners</p>
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-50 mx-auto">
    <h2 class="text-3xl font-bold mb-2 text-center">Comprehensive Lending Solutions</h2>
    <p class="text-gray-500 max-w-xl mx-auto mb-12">
      Everything you need to modernize your lending operations, from origination to decision-making.
    </p>
    <div class="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="bg-white rounded-xl shadow-sm p-6 flex flex-col group hover:shadow-lg transition-all duration-300"
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
        <ul class="mb-6 space-y-2">
          <li
            v-for="(feat, idx) in card.features"
            :key="idx"
            class="flex items-center text-gray-600"
          >
            <v-icon color="green" size="18" class="mr-2">mdi-check-circle-outline</v-icon>
            {{ feat }}
          </li>
        </ul>

        <!-- Button -->
        <v-btn
          :to="
            card.type === 'page'
              ? { path: `${card.link}` }
              : { path: '/coreservices', hash: `#${card.link}` }
          "
          variant="outlined"
          class="!text-black font-medium transition-all duration-300 group-hover:!text-white group-hover:bg-blue-600 group-hover:border-blue-600"
          append-icon="mdi-arrow-right"
        >
          Learn More
        </v-btn>
      </div>
    </div>
  </section>

  <section class="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
    <div class="max-w-7xl mx-auto px-8 grid md:grid-cols-[60%_40%] gap-8 items-center">
      <!-- Left Content -->
      <div>
        <span
          class="px-3 py-1 bg-blue-500 bg-opacity-20 text-xs rounded-full border border-blue-300 mb-4 inline-block"
        >
          Powered by AI
        </span>

        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          Meet FlowkyAI: Your Intelligent Loan Engine
        </h1>

        <p class="text-blue-100 mb-6 max-w-prose">
          Every lender has unique criteria. FlowkyAI adapts to your specific requirements, whether
          you're serving micro-loans or large commercial lending.
        </p>

        <!-- Feature List -->
        <ul class="space-y-3 mb-6">
          <li class="flex items-start gap-2">
            <v-icon icon="mdi-check-circle" color="white" size="20" />
            <span>Custom scoring models based on your portfolio</span>
          </li>
          <li class="flex items-start gap-2">
            <v-icon icon="mdi-check-circle" color="white" size="20" />
            <span>Industry-specific risk parameters</span>
          </li>
          <li class="flex items-start gap-2">
            <v-icon icon="mdi-check-circle" color="white" size="20" />
            <span>Dynamic rule adjustments based on market conditions</span>
          </li>
        </ul>

        <!-- Button -->
        <v-btn to="/flowkyai" class="!text-blue-700 font-semibold" elevation="0">
          Explore FlowkyAI
          <v-icon icon="mdi-arrow-right" class="ml-2" />
        </v-btn>
      </div>

      <!-- Right Animated Icon -->
      <div class="relative flex items-center justify-center">
        <!-- Pulsating Animation -->
        <div
          class="absolute w-48 h-48 rounded-full bg-blue-500 opacity-30 animate-pulse-slow"
        ></div>
        <div
          class="absolute w-64 h-64 rounded-full bg-blue-400 opacity-20 animate-pulse-slower"
        ></div>

        <!-- Brain Icon -->
        <div class="relative bg-blue-600 rounded-full p-10">
          <v-icon icon="mdi-brain" size="96" color="white" />
        </div>

        <!-- Floating Icons -->
        <div class="absolute -top-3 right-2 bg-yellow-400 text-black rounded-full p-3 shadow-lg">
          <v-icon icon="mdi-flash" size="28" />
        </div>
        <div class="absolute bottom-2 -left-3 bg-green-400 text-black rounded-full p-3 shadow-lg">
          <v-icon icon="mdi-trending-up" size="28" />
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <!-- Heading -->
      <h2 class="text-3xl font-bold mb-2">Seamless Integrations</h2>
      <p class="text-gray-500 max-w-2xl mx-auto mb-12">
        Connect with your existing systems and third-party services for a unified lending
        experience.
      </p>

      <!-- Cards Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Bank Integrations -->
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div class="flex justify-center mb-4">
            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <v-icon icon="mdi-earth" color="purple" size="28" />
            </div>
          </div>
          <h3 class="text-lg font-semibold mb-2">Bank Integrations</h3>
          <p class="text-gray-500 text-sm">
            Direct integration with Mono, MBS, and other banking APIs for real-time data access.
          </p>
        </div>

        <!-- CRM Systems -->
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div class="flex justify-center mb-4">
            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <v-icon icon="mdi-account-group" color="green" size="28" />
            </div>
          </div>
          <h3 class="text-lg font-semibold mb-2">CRM Systems</h3>
          <p class="text-gray-500 text-sm">
            Seamlessly integrate with your existing CRM and customer management platforms.
          </p>
        </div>

        <!-- Compliance Tools -->
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div class="flex justify-center mb-4">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <v-icon icon="mdi-shield-check" color="blue" size="28" />
            </div>
          </div>
          <h3 class="text-lg font-semibold mb-2">Compliance Tools</h3>
          <p class="text-gray-500 text-sm">
            Built-in compliance features that work with regulatory and audit systems.
          </p>
        </div>
      </div>
    </div>
  </section>

  <FooterView />
</template>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}
.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

@keyframes pulse-slower {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.4;
  }
}
.animate-pulse-slower {
  animation: pulse-slower 5s ease-in-out infinite;
}
.group:hover v-icon {
  transform: scale(1.1);
}
.v-btn {
  text-transform: none;
}
</style>
