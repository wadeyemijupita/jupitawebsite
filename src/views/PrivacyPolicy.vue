<script setup>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
import { ref } from 'vue'
const expanded = ref([])

const sections = [
  {
    title: 'Information We Collect',
    content: `
      <p><strong>a. Information You Provide to Us</strong></p>
      <ul>
        <li>Sign up or register for our platform;</li>
        <li>Contact us for support or inquiries;</li>
        <li>Subscribe to newsletters or marketing communications;</li>
        <li>Provide information as part of using our APIs or platform;</li>
        <li>Participate in surveys or feedback requests.</li>
      </ul>
      <p>This information may include your name, email, phone number, company name, job title, etc.</p>

      <p><strong>b. Information from Integrated Third Parties</strong></p>
      <p>If you integrate Jupita with third-party services (e.g., credit bureaus, bank statement providers, identity verification tools), you authorize us to access and process data provided by these services in accordance with this policy.</p>

      <p><strong>c. Automatically Collected Information</strong></p>
      <ul>
        <li>Browser type, IP address, operating system</li>
        <li>Access times and referring URLs</li>
        <li>Pages viewed and actions taken</li>
        <li>Session data for analytics and performance</li>
      </ul>
    `
  },
  {
    title: 'How We Use Your Data',
    content: `
      <ul>
        <li>Provide and maintain our Services</li>
        <li>Operate, analyze, and improve our platform</li>
        <li>Communicate about your account, support, and updates</li>
        <li>Send promotional content (opt-in only)</li>
        <li>Ensure security, prevent fraud, and comply with law</li>
        <li>Aggregate or anonymize data for reporting</li>
      </ul>
    `
  },
  {
    title: 'Sharing Your Information',
    content: `
      <ul>
        <li>Third-party service providers (cloud hosting, analytics, payments)</li>
        <li>Integration partners (credit bureaus, KYC vendors)</li>
        <li>Legal authorities where required</li>
        <li>Business partners where you have explicitly consented</li>
      </ul>
      <p><strong>We do not sell your personal data to third parties.</strong></p>
    `
  },
  {
    title: 'Data Security',
    content: `
      <p>We implement technical and organizational measures to safeguard your data against unauthorized access, disclosure, alteration, or destruction. However, no internet-based system is completely secure, so we cannot guarantee absolute security.</p>
    `
  },
  {
    title: 'Data Retention',
    content: `
      <p>We retain your information as long as necessary to provide our Services or as required by law. When no longer needed, data is securely deleted.</p>
    `
  },
  {
    title: 'International Data Transfers',
    content: `
      <p>Your data may be stored or processed in countries outside your own, including jurisdictions where data protection laws may differ. By using our Services, you consent to this transfer, processing, and storage.</p>
    `
  },
  {
    title: 'Your Rights',
    content: `
      <ul>
        <li>Access and correct your data</li>
        <li>Request deletion of your personal information</li>
        <li>Object to or restrict certain processing</li>
        <li>Opt-out of marketing communications</li>
        <li>Receive your data in a portable format</li>
      </ul>
      <p>Contact: <a href="mailto:support@getjupita.com" class="text-pink-400">support@getjupita.com</a></p>
    `
  },
  {
    title: 'Changes to This Policy',
    content: `
      <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the effective date above.</p>
    `
  },
  {
    title: 'Contact Us',
    content: `
      <p>If you have questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@getjupita.com" class="text-blue-400">privacy@getjupita.com</a></p>
    `
  }
]
</script>

<template>
  <HeaderView />

  <div class="min-h-screen bg-gray-100 p-8">
    <!-- Header -->
    <h1 class="text-4xl font-bold text-center mb-6 text-blued-500">Privacy Policy</h1>

    <p class="text-center max-w-3xl mx-auto mb-10 leading-relaxed">
      Pivox Technology Limited (“we,” “our,” or “us”) respects your privacy and is committed to
      protecting the personal information you share with us through our website, platform, APIs, and
      services (collectively, the “Services”). This Privacy Policy explains how we collect, use,
      disclose, and safeguard your information when you visit our website or use our products and
      services.
    </p>

    <!-- Accordion -->
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="(section, i) in sections" :key="i">
        <v-expansion-panel-title>
          <div class="flex justify-between items-center w-full">
            <span class="font-normal text-lg">{{ section.title }}</span>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-html="section.content" class="prose prose-invert max-w-none"></div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <FooterView />
</template>

<style scope></style>
