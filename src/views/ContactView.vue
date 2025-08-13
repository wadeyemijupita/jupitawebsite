<script setup>
import { reactive } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

const form = reactive({
  company: '',
  contact: '',
  email: '',
  phone: '',
  primaryInterest: '',
  loanVolume: '',
  additional: ''
})

const services = ['Loan Origination', 'Risk Assessment', 'Collections', 'Customer Management']

const loanVolumes = [
  'Micro Loans (Less than $50k)',
  'Small business $50k - $500k',
  'Commercial $500k - $5M',
  'Enterprise >$5M'
]

const submitForm = () => {
  console.log('Form submitted:', form)
}
</script>

<template>
  <HeaderView />
  <div class="bg-gradient-to-b from-[#edf2fe] to-[#f5f8ff] py-20">
    <div class="text-center mb-8">
      <div
        class="inline-block px-4 py-1 mb-4 bg-blue-100 border border-blue-100 rounded-full shadow-sm text-sm font-medium text-blue-700"
      >
        Get in touch
      </div>
      <h1 class="text-3xl md:text-4xl font-bold mt-4">
        Ready to Transform Your
        <span class="text-blue-600">Lending Operations?</span>
      </h1>
      <p class="text-gray-600 mt-3 max-w-2xl mx-auto">
        Schedule a personalized demo to see how Jupita’s solutions can streamline your processes and
        reduce risk.
      </p>
    </div>

    <div class="max-w-6xl justify-center mx-auto flex items-center grid md:grid-cols-3 gap-6">
      <!-- Form -->
      <div class="bg-white rounded p-6 md:col-span-2">
        <h2 class="text-lg font-semibold mb-1">Request a Demo</h2>
        <p class="text-gray-500 mb-6 text-sm">
          Fill out the form below and our team will contact you to schedule a personalized
          demonstration.
        </p>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <v-text-field
              v-model="form.company"
              label="Company Name"
              variant="outlined"
              density="comfortable"
              hide-details
            ></v-text-field>

            <v-text-field
              v-model="form.contact"
              label="Contact Person *"
              variant="outlined"
              density="comfortable"
              hide-details
              required
            ></v-text-field>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <v-text-field
              v-model="form.email"
              label="Email Address *"
              type="email"
              variant="outlined"
              density="comfortable"
              hide-details
              required
            ></v-text-field>

            <v-text-field
              v-model="form.phone"
              label="Phone Number"
              variant="outlined"
              density="comfortable"
              hide-details
            ></v-text-field>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <v-select
              v-model="form.primaryInterest"
              :items="services"
              label="Primary Interest *"
              variant="outlined"
              density="comfortable"
              hide-details
              required
            ></v-select>

            <v-select
              v-model="form.loanVolume"
              :items="loanVolumes"
              label="Loan Volume"
              variant="outlined"
              density="comfortable"
              hide-details
            ></v-select>
          </div>

          <v-textarea
            v-model="form.additional"
            label="Additional Requirements"
            variant="outlined"
            density="comfortable"
            hide-details
          ></v-textarea>

          <v-btn type="submit" color="primary" size="large" class="w-full text-white font-medium">
            Schedule Demo →
          </v-btn>
        </form>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Contact Info -->
        <div class="bg-white rounded p-6">
          <h3 class="font-semibold mb-4">Contact Information</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center space-x-3">
              <v-icon color="blue">mdi-email-outline</v-icon>
              <a href="mailto:hello@getjupita.com" class="text-blue-600">hello@getjupita.com</a>
            </li>
            <li class="flex items-center space-x-3">
              <v-icon color="blue">mdi-phone-outline</v-icon>
              <div>
                <p>+234 708 991 9470 (NG)</p>
                <p>+44 7823 464429 (UK)</p>
              </div>
            </li>
            <li class="flex items-center space-x-3">
              <v-icon color="blue">mdi-clock-outline</v-icon>
              <p>Within 24 hours</p>
            </li>
          </ul>
        </div>

        <!-- What Happens Next -->
        <div class="bg-white rounded p-6">
          <h3 class="font-semibold mb-4">What Happens Next?</h3>
          <ol class="space-y-4 text-sm">
            <li class="flex items-start space-x-3">
              <div
                class="bg-blue-500 text-white rounded-full w-6 h-6 p-2 flex items-center justify-center font-bold"
              >
                1
              </div>
              <p>
                <strong>Initial Contact</strong><br />We’ll reach out within 24 hours to understand
                your needs
              </p>
            </li>
            <li class="flex items-start space-x-3">
              <div
                class="bg-blue-500 text-white rounded-full w-6 h-6 p-2 flex items-center justify-center font-bold"
              >
                2
              </div>
              <p>
                <strong>Personalized Demo</strong><br />Schedule a tailored demonstration of
                relevant solutions
              </p>
            </li>
            <li class="flex items-start space-x-3">
              <div
                class="bg-blue-500 text-white rounded-full w-6 h-6 p-2 flex items-center justify-center font-bold"
              >
                3
              </div>
              <p>
                <strong>Custom Proposal</strong><br />Receive a detailed proposal based on your
                requirements
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>

   <FooterView  :showCta="false"/>
</template>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>
