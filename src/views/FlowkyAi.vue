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
  <section class="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
    <div class="max-w-7xl mx-auto px-8 grid md:grid-cols-[60%_40%] gap-8 items-center">
      <!-- Left Content -->
      <div>
        <span
          class="px-3 py-1 bg-blue-500 bg-opacity-20 text-xs rounded-full border border-blue-300 mb-4 inline-block"
        >
          AI Powered Lending-Engine
        </span>

        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          Meet FlowkyAI: Your Intelligent Loan Engine
        </h1>

        <p class="text-blue-100 mb-6 max-w-prose">
          Every lender has unique criteria. FlowkyAI adapts to your specific requirements, whether
          you're serving micro-loans or large commercial lending.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mb-12">
          <!-- Button -->
          <v-btn class="text-blue-700 font-semibold" elevation="0">
            Explore FlowkyAI
            <v-icon icon="mdi-arrow-right" class="ml-2" />
          </v-btn>
          <!-- Button -->
          <v-btn class="text-blue-700 font-semibold" elevation="0">
            Learn More
            <v-icon icon="mdi-arrow-right" class="ml-2" />
          </v-btn>
        </div>
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

  <section class="py-12 px-4 bg-white">
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

  <section class="py-16 bg-gray-50">
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

  <section class="py-16 bg-white">
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
