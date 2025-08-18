<script setup>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

const stats = [
  { value: '95%', title: 'Accuracy Rate', subtitle: 'Credit decision accuracy' },
  { value: '10x', title: 'Faster Processing', subtitle: 'Compared to manual processes' },
  { value: '60%', title: 'Cost Reduction', subtitle: 'In operational expenses' },
  { value: '24/7', title: 'Always Available', subtitle: 'Continuous processing' }
]

const features = [
  {
    icon: 'mdi-brain',
    title: 'Custom Scoring Models',
    description:
      'AI-powered models trained on your specific portfolio data for accurate risk assessment',
    features: [
      'Portfolio-specific training',
      'Continuous learning',
      'Predictive analytics',
      'Risk optimization'
    ]
  },
  {
    icon: 'mdi-domain',
    title: 'Industry-Specific Parameters',
    description: 'Tailored risk parameters for different industries and lending scenarios',
    features: [
      'Sector-specific rules',
      'Market adaptation',
      'Regulatory compliance',
      'Performance tracking'
    ]
  },
  {
    icon: 'mdi-trending-up',
    title: 'Dynamic Rule Adjustments',
    description: 'Real-time rule modifications based on market conditions and performance data',
    features: [
      'Real-time updates',
      'Market responsiveness',
      'Performance optimization',
      'Risk mitigation'
    ]
  },
  {
    icon: 'mdi-rocket-launch',
    title: 'Seamless Integration',
    description: 'Easy integration with your existing lending systems and workflows',
    features: [
      'API-first design',
      'Legacy system support',
      'Minimal disruption',
      'Quick deployment'
    ]
  }
]

const lendingScenarios = [
  {
    icon: 'mdi-account-group',
    iconColor: 'green',
    iconBg: 'bg-green-50',
    title: 'Micro Loans',
    description: 'Quick decisions for small-ticket loans with automated processing',
    features: ['Instant approval', 'Mobile-first', 'Alternative data', 'Low overhead']
  },
  {
    icon: 'mdi-chart-bar',
    iconColor: 'blue',
    iconBg: 'bg-blue-50',
    title: 'Small Business',
    description: 'Comprehensive analysis for SME lending with cash flow assessment',
    features: ['Cash flow analysis', 'Business scoring', 'Document automation', 'Risk profiling']
  },
  {
    icon: 'mdi-earth',
    iconColor: 'purple',
    iconBg: 'bg-purple-50',
    title: 'Commercial Lending',
    description: 'Advanced underwriting for large commercial loans with complex structures',
    features: [
      'Complex structures',
      'Multi-party analysis',
      'Collateral evaluation',
      'Covenant tracking'
    ]
  }
]
</script>

<template>
  <HeaderView />
  <section class="bg-gradient-to-br from-[#2E2BCF] via-[#2D45E0] to-[#5A1FAE] text-white py-24">
    <div
      class="max-w-6xl mx-auto px-8 grid md:grid-cols-[60%_40%] gap-12 items-center min-h-[70vh]"
    >
      <!-- Left Content -->
      <div>
        <span
          class="px-4 py-1.5 bg-blue-500 bg-opacity-20 text-sm rounded-full border border-blue-300 mb-6 inline-block"
        >
          AI Powered Lending-Engine
        </span>

        <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Meet FlowkyAI: Your Intelligent Loan Engine
        </h1>

        <p class="text-blue-100 mb-8 max-w-prose text-lg">
          Every lender has unique criteria. FlowkyAI adapts to your specific requirements, whether
          you're serving micro-loans or large commercial lending.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 mb-16">
          <!-- Button -->
          <v-btn
            to="/contact"
            size="x-large"
            class="!text-blue-700 font-semibold !bg-white hover:!bg-blue-50"
          >
            Request Demo
            <v-icon icon="mdi-arrow-right" class="ml-2" />
          </v-btn>
          <!-- Button -->
          <v-btn href="#results" size="x-large" class="!text-blue-700 font-semibold !bg-white hover:!bg-blue-50">
            Learn More
            <v-icon icon="mdi-arrow-right" class="ml-2" />
          </v-btn>
        </div>
      </div>

      <!-- Right Animated Icon -->
      <div class="relative flex items-center justify-center">
        <!-- Pulsating Animation -->
        <div
          class="absolute w-56 h-56 rounded-full bg-blue-500 opacity-30 animate-pulse-slow"
        ></div>
        <div
          class="absolute w-80 h-80 rounded-full bg-blue-400 opacity-20 animate-pulse-slower"
        ></div>

        <!-- Brain Icon -->
        <div class="relative bg-blue-600 rounded-full p-14">
          <v-icon icon="mdi-brain" size="120" color="white" />
        </div>

        <div
          class="absolute left-0 -top-2 transform -translate-y-1/2 bg-purple-500 rounded-full p-3 shadow-lg animate-bounce-slow"
        >
          <v-icon icon="mdi-shield-outline" size="32" color="purple" />
        </div>

        <!-- Floating Icons -->
        <div
          class="absolute -top-4 right-4 bg-yellow-400 text-black rounded-full p-4 shadow-lg animate-pulse-bright"
        >
          <v-icon icon="mdi-flash" size="32" />
        </div>
        <div
          class="absolute bottom-4 -left-4 bg-green-400 text-black rounded-full p-4 shadow-lg animate-pulse-bright"
        >
          <v-icon icon="mdi-trending-up" size="32" />
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto text-center">
      <!-- Heading -->
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Proven Results Across Industries
      </h2>
      <p class="text-gray-600 mb-10">
        FlowyAI delivers measurable improvements in accuracy, speed, and cost-effectiveness
      </p>

      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(item, index) in stats" :key="index" class="flex flex-col items-center">
          <span class="text-3xl font-bold text-blue-600">{{ item.value }}</span>
          <span class="text-gray-900 font-semibold">{{ item.title }}</span>
          <span class="text-sm text-gray-500">{{ item.subtitle }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-50">
    <!-- Heading -->
    <div class="text-center max-w-3xl mx-auto mb-12 px-4">
      <h2 class="text-3xl font-bold mb-2">Intelligent Features That Adapt</h2>
      <p class="text-gray-500">
        FlowyAI combines advanced AI with deep lending expertise to deliver solutions tailored to
        your unique business requirements.
      </p>
    </div>

    <!-- Feature Cards -->
    <div class="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2">
      <div
        v-for="(card, i) in features"
        :key="i"
        class="bg-white rounded-xl shadow-sm p-6 flex flex-col group hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
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

        <!-- Title & Description -->
        <h3 class="text-lg font-semibold mb-2">{{ card.title }}</h3>
        <p class="text-gray-600 mb-4">{{ card.description }}</p>

        <!-- Features -->
        <ul class="space-y-2">
          <li
            v-for="(feat, idx) in card.features"
            :key="idx"
            class="flex items-center text-gray-600"
          >
            <v-icon color="green" size="18" class="mr-2"> mdi-check-circle-outline </v-icon>
            {{ feat }}
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <!-- Heading -->
    <div class="text-center max-w-3xl mx-auto mb-12 px-4">
      <h2 class="text-3xl font-bold mb-2">Tailored for Every Lending Scenario</h2>
      <p class="text-gray-500">
        From micro-loans to commercial lending, FlowyAI adapts its intelligence to your specific
        market and risk appetite.
      </p>
    </div>

    <!-- Cards -->
    <div class="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(card, i) in lendingScenarios"
        :key="i"
        class="bg-white rounded-xl shadow-sm p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <!-- Icon -->
        <div class="p-3 rounded-xl w-fit mb-4" :class="card.iconBg">
          <v-icon size="28" :color="card.iconColor">
            {{ card.icon }}
          </v-icon>
        </div>

        <!-- Title -->
        <h3 class="text-lg font-semibold mb-2">{{ card.title }}</h3>

        <!-- Description -->
        <p class="text-gray-600 mb-4">{{ card.description }}</p>

        <!-- Features -->
        <ul class="space-y-2">
          <li
            v-for="(feat, idx) in card.features"
            :key="idx"
            class="flex items-center text-gray-600"
          >
            <v-icon color="green" size="18" class="mr-2"> mdi-check-circle-outline </v-icon>
            {{ feat }}
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section id="results" class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-bold mb-4">How FlowkyAI Works</h2>
      <p class="text-blue-100 max-w-2xl mx-auto mb-12">
        Our intelligent loan engine integrates seamlessly with your existing systems to provide
        instant, accurate credit decisions.
      </p>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Step 1 -->
        <div class="flex flex-col items-center text-center">
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 text-lg font-bold mb-4"
          >
            1
          </div>
          <h3 class="font-semibold mb-2">Data Collection</h3>
          <p class="text-blue-100 text-sm">
            Gather applicant data from multiple sources including bank statements, credit reports,
            and alternative data
          </p>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center text-center">
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 text-lg font-bold mb-4"
          >
            2
          </div>
          <h3 class="font-semibold mb-2">AI Analysis</h3>
          <p class="text-blue-100 text-sm">
            Advanced algorithms analyze patterns, risk factors, and creditworthiness using your
            custom models
          </p>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center text-center">
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 text-lg font-bold mb-4"
          >
            3
          </div>
          <h3 class="font-semibold mb-2">Smart Scoring</h3>
          <p class="text-blue-100 text-sm">
            Generate precise risk scores and recommendations based on your specific criteria and
            market conditions
          </p>
        </div>

        <!-- Step 4 -->
        <div class="flex flex-col items-center text-center">
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 text-lg font-bold mb-4"
          >
            4
          </div>
          <h3 class="font-semibold mb-2">Instant Decision</h3>
          <p class="text-blue-100 text-sm">
            Deliver fast, accurate credit decisions with detailed explanations and supporting
            documentation
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
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}

@keyframes pulse-bright {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}
.animate-pulse-bright {
  animation: pulse-bright 2s infinite;
}
</style>
