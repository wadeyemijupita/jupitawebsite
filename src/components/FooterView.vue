<template>
  <footer class="bg-[#0F172A] text-white py-12">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <!-- Top CTA -->
       <div v-if="showCta"><h2 class="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Lending Process?</h2>
      <p class="text-gray-400 max-w-2xl mx-auto mb-6">
        Join leading financial institutions using Jupita's advanced solutions to streamline
        operations and reduce risk.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <router-link
          :to="{ path: '/contact' }"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2"
        >
          Schedule a Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </router-link>

        <router-link
          :to="{ path: '/flowkyai' }"
          class="bg-white text-blue px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </router-link>
      </div>

      <!-- Middle Info -->
      <div class="grid md:grid-cols-3 gap-8 text-left border-t border-gray-800 pt-8">
        <!-- Logo and description -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <img src="../assets/images/white.png" alt="Jupita" class="w-5 h-5" />
            <span class="font-semibold">Jupita</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Advanced lending solutions powered by AI. Streamline loan origination, credit
            underwriting, and risk assessment with our comprehensive platform.
          </p>
        </div>

        <!-- Services -->
        <!-- Services -->
        <div>
          <h3 class="font-semibold mb-3">Services</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li>
              <router-link
                :to="{ path: '/BankStatementAnalysis' }"
                class="hover:text-white transition"
              >
                Bank Statement Analysis
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: '/coreservices', hash: '#CreditUnderwriting' }"
                class="hover:text-white transition"
              >
                Credit Underwriting
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: '/coreservices', hash: '#LoanOrigination' }"
                class="hover:text-white transition"
              >
                Loan Origination
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: '/coreservices', hash: '#IDVerification' }"
                class="hover:text-white transition"
              >
                ID Verification
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="font-semibold mb-3">Company</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <router-link :to="{ path: '/flowkyai' }" class="hover:text-white transition">
              <li>FlowkyAI Platform</li>
            </router-link>
            <router-link :to="{ path: '/contact' }" class="hover:text-white transition">
              <li>Contact Us</li>
            </router-link>
          </ul>
        </div>
      </div>

      <!-- Bottom copyright -->
      <div class="mt-8 border-t border-gray-800 pt-6 text-gray-500 text-xs text-center">
        © 2025 Jupita. All rights reserved. Advanced lending solutions for modern financial
        institutions.
      </div></div>
      
    </div>
  </footer>
</template>

<script setup>
  defineProps({
  showCta: { type: Boolean, default: true },
  showMiddle: { type: Boolean, default: true }
})
</script>
