<template>
  <!-- Hero section -->
  <section
    class="p-6 min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#0B1120] via-[#152459] to-[#242464]"
  >
    <transition name="fade-up">
      <div class="text-center text-white max-w-3xl p-6">
        <!-- Icon -->
        <div class="flex justify-center mb-4">
          <v-icon icon="mdi-flash" size="40" class="text-blue-400 bg-blue-900/40 p-3 rounded-xl" />
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Credit Scoring API</h1>

        <!-- Description -->
        <p class="text-lg md:text-xl font-light leading-relaxed mb-6">
          Advanced credit scoring for lenders using customer credit history combined with
          comprehensive data from the Jupita ecosystem. Enterprise-grade API with real-time
          processing and intelligent risk assessment.
        </p>

        <!-- Status & Version -->
        <div class="flex justify-center gap-4">
          <span
            class="bg-green-900/30 text-green-400 px-4 py-1 rounded-full text-sm flex items-center gap-2"
          >
            <span class="w-2 h-2 bg-green-400 rounded-full"></span>
            API Status: Operational
          </span>

          <span class="bg-blue-900/30 text-blue-300 px-4 py-1 rounded-full text-sm">
            Version 1.0
          </span>
        </div>
      </div>
    </transition>
  </section>

  <section class="bg-gray-50">
    <!-- Mobile Tabs -->
    <div class="block md:hidden sticky top-0 z-50 bg-white shadow">
      <v-tabs v-model="activeTab" show-arrows align-tabs="start" direction="horizontal">
        <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.id" @click="scrollTo(tab.id)">
          {{ tab.label }}
        </v-tab>
      </v-tabs>
    </div>

    <div class="flex max-w-6xl justify-center items-start mx-auto">
      <!-- Main Content -->
      <main class="flex-1 px-4 sm:px-6 md:px-8 py-6">
        <!-- API Overview Section -->
        <section id="overview">
          <div class="mb-8 bg-white shadow rounded p-6">
            <!-- Heading -->
            <div class="flex items-center mb-4">
              <v-icon icon="mdi-check-circle" class="text-green-500 mr-2" />
              <h2 class="text-xl font-semibold">API Overview</h2>
            </div>

            <!-- Description -->
            <p class="text-gray-600 mb-6">
              The Credit Scoring API provides advanced credit scoring for lenders by analyzing
              customer credit history combined with comprehensive data from the Jupita ecosystem.
              Our intelligent scoring algorithm delivers reliable risk assessment to help you make
              informed lending decisions with confidence.
            </p>

            <!-- Feature Cards -->
            <div class="grid md:grid-cols-3 gap-4">
              <!-- Card 1 -->
              <div class="p-4 rounded-lg bg-blue-50 border border-blue-100 text-center">
                <v-icon icon="mdi-flash-outline" size="30" class="text-blue-500 mb-2" />
                <h3 class="font-semibold">Real-time Processing</h3>
                <p class="text-sm text-gray-600">
                  Instant credit score calculation with sub-second response times
                </p>
              </div>

              <!-- Card 2 -->
              <div class="p-4 rounded-lg bg-blue-50 border border-blue-100 text-center">
                <v-icon icon="mdi-shield-outline" size="30" class="text-blue-500 mb-2" />
                <h3 class="font-semibold">Enterprise Security</h3>
                <p class="text-sm text-gray-600">
                  Bank-grade security with API key authentication and encrypted data transmission
                </p>
              </div>

              <!-- Card 3 -->
              <div class="p-4 rounded-lg bg-blue-50 border border-blue-100 text-center">
                <v-icon icon="mdi-chart-bar" size="30" class="text-blue-500 mb-2" />
                <h3 class="font-semibold">Ecosystem-Enhanced Scoring</h3>
                <p class="text-sm text-gray-600">
                  Credit scoring enhanced by Jupita ecosystem data and customer credit history
                </p>
              </div>
            </div>
          </div>

          <div class="flex">
            <!-- Main Content -->
            <main class="flex-1 space-y-8">
              <!-- Supported Report Formats -->
              <section id="report-formats" class="bg-white p-4 rounded shadow">
                <h2 class="text-lg font-semibold mb-4">Supported Report Formats</h2>

                <div class="grid md:grid-cols-2 gap-4">
                  <!-- Card 1 -->
                  <div
                    class="p-4 rounded-lg border border-gray-200 bg-gray-50 hover:shadow transition"
                  >
                    <h3 class="font-semibold">Credit Registry JSON</h3>
                    <span
                      class="inline-block mt-1 mb-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium"
                    >
                      /credit-registry
                    </span>
                    <p class="text-sm text-gray-600">Individual credit registry reports</p>
                  </div>

                  <!-- Card 2 -->
                  <div
                    class="p-4 rounded-lg border border-gray-200 bg-gray-50 hover:shadow transition"
                  >
                    <h3 class="font-semibold">First Central Credit Bureau JSON</h3>
                    <span
                      class="inline-block mt-1 mb-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium"
                    >
                      /fcbc
                    </span>
                    <p class="text-sm text-gray-600">
                      Reports from the First Central Credit Bureau
                    </p>
                  </div>
                </div>
              </section>

              <!-- Credit Score Gauge -->
              <div class="bg-white shadow rounded p-4">
                <h2 class="text-lg font-semibold mb-4">Credit Score Performance Gauge</h2>

                <p class="text-gray-600 mb-6">
                  Our credit scoring system evaluates customer creditworthiness using a
                  comprehensive 0–1000 point scale. The gauge shows typical score distribution and
                  risk assessment levels.
                </p>

                <div class="grid md:grid-cols-2 gap-6 items-center">
                  <!-- Legend -->
                  <ul class="space-y-2 text-sm text-gray-700">
                    <li>
                      <span class="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      Very high risk(300-499)
                    </li>
                    <li>
                      <span class="inline-block w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                      High risk (500–649)
                    </li>
                    <li>
                      <span class="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                      Medium risk(650–749)
                    </li>
                    <li>
                      <span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Low risk (750–850)
                    </li>
                  </ul>

                  <!-- ApexCharts Gauge -->
                  <div class="relative w-[400px] h-[220px] mx-auto">
                    <!-- Larger Gauge -->
                    <apexchart
                      type="radialBar"
                      height="400"
                      :options="chartOptions"
                      :series="series"
                    />

                    <!-- Needle overlay -->
                    <div
                      class="absolute bottom-[40px] left-1/2 w-1 h-[120px] bg-black origin-bottom"
                      :style="{ transform: `rotate(${angle}deg)` }"
                    ></div>

                    <!-- Needle pivot circle -->
                    <div class="absolute bottom-[95px] left-1/2 -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>

        <!-- Authentication -->
        <section id="authentication">
          <div class="p-6 bg-white rounded shadow border mt-8">
            <!-- Title -->
            <div class="flex items-center space-x-2 mb-4">
              <VIcon color="blue" size="20">mdi-key-variant</VIcon>
              <h2 class="text-xl font-semibold text-gray-800">Authentication</h2>
            </div>

            <!-- Info Box -->
            <div
              class="p-3 mb-6 bg-blue-50 border border-blue-100 rounded-lg text-sm text-gray-700"
            >
              <VIcon color="blue" size="18" class="mr-1">mdi-information</VIcon>
              Authentication is required for all API requests. Keys are passed in the request
              headers.
            </div>

            <!-- Two Column Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Authentication Type -->
              <div class="p-5 bg-blue-50 rounded-xl">
                <h3 class="text-gray-800 font-medium text-lg mb-2">Authentication Type</h3>
                <span
                  class="inline-block px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-medium"
                >
                  Secret Key Authentication
                </span>
                <p class="mt-3 text-sm text-gray-600">
                  Use your assigned secret key and secret ID in request headers. These credentials
                  are unique to your account.
                </p>
              </div>

              <!-- Security -->
              <div class="p-5 bg-green-50 rounded-xl">
                <h3 class="text-gray-800 font-medium text-lg mb-2">Security</h3>
                <span
                  class="inline-block px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium"
                >
                  Enterprise Grade
                </span>
                <p class="mt-3 text-sm text-gray-600">
                  All requests are transmitted over HTTPS. Keep your credentials secure and never
                  expose them in client-side code.
                </p>
              </div>
            </div>
          </div>

          <!-- Required Headers Section -->
          <div class="bg-white shadow rounded p-6 mt-6">
            <div class="flex items-center gap-2 mb-4">
              <h2 class="text-lg font-semibold">Required Headers</h2>
            </div>

            <div class="overflow-x-auto">
              <table class="min-w-full border border-gray-200 text-sm rounded-lg">
                <thead class="text-left">
                  <tr>
                    <th class="px-4 py-2 border-b">Header</th>
                    <th class="px-4 py-2 border-b">Type</th>
                    <th class="px-4 py-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="px-4 py-2 bg-gray-100">secret_key</td>
                    <td class="px-4 py-2 text-blue-600">String</td>
                    <td class="px-4 py-2">Your assigned API secret key</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 bg-gray-100">secret_id</td>
                    <td class="px-4 py-2 text-blue-600">String</td>
                    <td class="px-4 py-2">Your assigned API secret ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Example Request Section -->
          <div class="bg-white shadow rounded p-6 mt-6">
            <div class="flex items-center gap-2 mb-4">
              <VIcon color="primary">mdi-code-json</VIcon>
              <h2 class="text-lg font-semibold">Example Request Format</h2>
            </div>

            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
Headers:
  secret_key: your-secret-key
  secret_id: your-secret-id

Body:
{
  "credit_report_json": { /* Your JSON report */ }
}
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>
          </div>
        </section>

        <!-- Endpoints -->
        <section id="endpoints">
          <!-- Credit registry -->
          <div class="p-6 bg-white rounded shadow mt-6">
            <!-- Title -->
            <div class="flex items-center space-x-2 mb-3">
              <VIcon color="blue" size="20">mdi-server</VIcon>
              <h2 class="text-xl font-semibold text-gray-800">Credit Registry Scoring</h2>
            </div>

            <!-- Endpoint -->
            <div class="flex items-center space-x-3 mb-4">
              <span class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-semibold">
                POST
              </span>
              <code class="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-800">
                https://staging.getjupita.com/api/v1/api/endpoint/credit_score/credit-registry
              </code>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 mb-6">
              Calculates a credit score from a Credit Registry JSON report. Returns a comprehensive
              score with detailed performance summary.
            </p>

            <!-- Request Format -->
            <h3 class="text-md font-medium text-gray-800 mb-3">Request Format</h3>

            <div class="overflow-x-auto mb-4">
              <table class="min-w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Component
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Content-Type -->
                  <tr class="border-b">
                    <td class="px-4 py-2 bg-gray-100">Content-Type</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">application/json</td>
                  </tr>
                  <!-- secret_key -->
                  <tr class="border-b">
                    <td class="px-4 py-2 bg-gray-100">secret_key</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 bg-gray-100">Your API secret key</td>
                  </tr>
                  <!-- secret_id -->
                  <tr class="border-b">
                    <td class="px-4 py-2 bg-gray-100">secret_id</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret ID</td>
                  </tr>
                  <!-- credit_report_json -->
                  <tr>
                    <td class="px-4 py-2 bg-gray-100">credit_report_json</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-pink-100 text-pink-600 font-medium"
                      >
                        Body
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Credit Registry JSON object</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Headers</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
Headers:
secret_key: your-secret-key
secret_id: your-secret-id
Content-Type: application/json
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Body</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "credit_report_json": { /* First Central Credit Bureau JSON */ }
}
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Response</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "status": "success",
  "status_code": 200,
  "data": {
    "credit_score": 641,
     "summary": {
        "performing_accounts": 2,
        "derogatory_accounts": 0,
        "written_off_accounts": 0,
        "closed_accounts": 73,
        "highest_amount_accessed": 2500000,
        "loan_balance": 1509200
      }
  }
}
</pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>
          </div>

          <!-- First central -->
          <div class="p-6 bg-white rounded shadow mt-6">
            <!-- Title -->
            <div class="flex items-center space-x-2 mb-3">
              <VIcon color="blue" size="20">mdi-database-outline</VIcon>
              <h2 class="text-xl font-semibold text-gray-800">First Central Report Scoring</h2>
            </div>

            <!-- Endpoint -->
            <div class="flex items-center space-x-3 mb-4">
              <span class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-semibold">
                POST
              </span>
              <code class="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-800">
                https://staging.getjupita.com/api/v1/api/endpoint/credit_score/fcbc
              </code>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 mb-6">
              Calculates a credit score from a First Central Bureau JSON report.
            </p>

            <!-- Request Format -->
            <h3 class="text-md font-medium text-gray-800 mb-3">Request Format</h3>

            <div class="overflow-x-auto mb-4">
              <table class="min-w-full border-1 text-sm rounded-lg overflow-hidden">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Component
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Content-Type -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">Content-Type</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">application/json</td>
                  </tr>
                  <!-- secret_key -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_key</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret key</td>
                  </tr>
                  <!-- secret_id -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_id</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret ID</td>
                  </tr>
                  <!-- credit_report_json -->
                  <tr>
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">credit_report_json</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-pink-100 text-pink-600 font-medium"
                      >
                        Body
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">First Central Credit Bureau JSON object</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Headers</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
Headers:
secret_key: your-secret-key
secret_id: your-secret-id
Content-Type: application/json
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Body</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "credit_report_json": { /* First Central Credit Bureau JSON */ }
}
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Response</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "status": "success",
  "status_code": 200,
  "data": {
    "credit_score": 654,
     "summary": {
        "performing_accounts": 2,
        "derogatory_accounts": 0,
        "written_off_accounts": 0,
        "closed_accounts": 73,
        "highest_amount_accessed": 2500000,
        "loan_balance": 1509200
      }
  }
}

      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>
          </div>

          <!-- Get report, summary and credit score - First central -->
          <div class="p-6 bg-white rounded shadow mt-6">
            <!-- Title -->
            <div class="flex items-center space-x-2 mb-3">
              <v-icon color="green">mdi-file-document-outline</v-icon>

              <h2 class="text-xl font-semibold text-gray-800">
                Get report, summary and credit score - First central
              </h2>
            </div>

            <!-- Endpoint -->
            <div class="flex items-center space-x-3 mb-4">
              <span class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-semibold">
                POST
              </span>
              <code class="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-800">
                https://staging.getjupita.com/api/v1/api/endpoint/credit_score/generate-credit-history-fccb
              </code>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 mb-6">
              Generates a credit history and summary from FCCB data.
            </p>

            <!-- Request Format -->
            <h3 class="text-md font-medium text-gray-800 mb-3">Request Format</h3>

            <div class="overflow-x-auto mb-4">
              <table class="min-w-full border-1 text-sm rounded-lg overflow-hidden">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Component
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Content-Type -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">Content-Type</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">application/json</td>
                  </tr>
                  <!-- secret_key -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_key</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret key</td>
                  </tr>
                  <!-- secret_id -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_id</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret ID</td>
                  </tr>
                  <!-- credit_report_json -->
                  <tr>
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">credit_report_json</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-pink-100 text-pink-600 font-medium"
                      >
                        Body
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">First Central Credit Bureau JSON object</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Headers</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
Headers:
secret_key: your-secret-key
secret_id: your-secret-id
Content-Type: application/json
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Body</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
     {
   "id_type": "individual|business",
   "id_string": "individuals bvn| business registration number",
   "purpose": " credit_check purpose"
}
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Response</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "status": "success",
  "status_code": 200,
  "data": {
    "credit_score": {
      "credit_score": 624,
      "summary": {
        "performing_accounts": 2,
        "derogatory_accounts": 0,
        "written_off_accounts": 0,
        "closed_accounts": 73,
        "highest_amount_accessed": 2500000,
        "loan_balance": 1509200
      }
    },
    "credit_history": [ ... ]
  }
}


      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>
          </div>

          <!-- Get report, summary and credit score - Credit registry -->
          <div class="p-6 bg-white rounded shadow mt-6">
            <!-- Title -->
            <div class="flex items-center space-x-2 mb-3">
              <v-icon color="blue">mdi-file-document-outline</v-icon>

              <h2 class="text-xl font-semibold text-gray-800">
                Get report, summary and credit score - Credit registry
              </h2>
            </div>

            <!-- Endpoint -->
            <div class="flex items-center space-x-3 mb-4">
              <span class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-semibold">
                POST
              </span>
              <code class="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-800">
                POST
                https://staging.getjupita.com/api/v1/api/endpoint/credit_score/generate-credit-history-credit-registry
              </code>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 mb-6">
              Generates a credit history and summary from Credit registry data.
            </p>

            <!-- Request Format -->
            <h3 class="text-md font-medium text-gray-800 mb-3">Request Format</h3>

            <div class="overflow-x-auto mb-4">
              <table class="min-w-full border-1 text-sm rounded-lg overflow-hidden">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Component
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Content-Type -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">Content-Type</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">application/json</td>
                  </tr>
                  <!-- secret_key -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_key</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret key</td>
                  </tr>
                  <!-- secret_id -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_id</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret ID</td>
                  </tr>
                  <!-- credit_report_json -->
                  <tr>
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">credit_report_json</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-pink-100 text-pink-600 font-medium"
                      >
                        Body
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Credit Registry JSON object</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Headers</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
Headers:
secret_key: your-secret-key
secret_id: your-secret-id
Content-Type: application/json
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Body</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
             {
   "id_type": "individual|business",
   "id_string": "individuals bvn| business registration number",
   "purpose": " credit_check purpose"
}

      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Response</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "status": "success",
  "status_code": 200,
  "data": {
    "credit_score": {
      "credit_score": 624,
      "summary": {
        "performing_accounts": 2,
        "derogatory_accounts": 0,
        "written_off_accounts": 0,
        "closed_accounts": 73,
        "highest_amount_accessed": 2500000,
        "loan_balance": 1509200
      }
    },
    "credit_history": [ ... ]
  }
}


      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>
          </div>

          <!-- Get multiple reports credit max score -->
          <div class="p-6 bg-white rounded shadow mt-6">
            <!-- Title -->
            <div class="flex items-center space-x-2 mb-3">
              <v-icon color="yellow">mdi-folder</v-icon>

              <h2 class="text-xl font-semibold text-gray-800">
                Get Summary Report for Multiple Report
              </h2>
            </div>

            <!-- Endpoint -->
            <div class="flex items-center space-x-3 mb-4">
              <span class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-semibold">
                POST
              </span>
              <code class="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-800">
                POST
                https://staging.getjupita.com/api/v1/api/endpoint/credit_score/generate-credit-summary-max-score
              </code>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 mb-6">
              Description: Generates a credit summary with a maximum score.
            </p>

            <!-- Request Format -->
            <h3 class="text-md font-medium text-gray-800 mb-3">Request Format</h3>

            <div class="overflow-x-auto mb-4">
              <table class="min-w-full border-1 text-sm rounded-lg overflow-hidden">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Component
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Content-Type -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">Content-Type</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">application/json</td>
                  </tr>
                  <!-- secret_key -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_key</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret key</td>
                  </tr>
                  <!-- secret_id -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_id</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret ID</td>
                  </tr>
                  <!-- credit_report_json -->
                  <tr>
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">credit_report_json</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-pink-100 text-pink-600 font-medium"
                      >
                        Body
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">First Central Credit Bureau JSON object</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Headers</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
Headers:
secret_key: your-secret-key
secret_id: your-secret-id
Content-Type: application/json
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Body</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
    {
   "id_type": "individual|business",
   "id_string": "individuals bvn| business registration number",
   "purpose": " credit_check purpose"
}

      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Response</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "status": "success",
  "status_code": 200,
  "data": {
    "credit_score": {
      "credit_score": 624,
      "summary": {
        "performing_accounts": 2,
        "derogatory_accounts": 0,
        "written_off_accounts": 0,
        "closed_accounts": 73,
        "highest_amount_accessed": 2500000,
        "loan_balance": 1509200
      }
    },
  }
}


      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>
          </div>

          <!-- Get credit history full -->
          <div class="p-6 bg-white rounded shadow mt-6">
            <!-- Title -->
            <div class="flex items-center space-x-2 mb-3">
              <v-icon color="red">mdi-layers-outline</v-icon>

              <h2 class="text-xl font-semibold text-gray-800">
                Credit History and Summary Generation – Full
              </h2>
            </div>

            <!-- Endpoint -->
            <div class="flex items-center space-x-3 mb-4">
              <span class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-semibold">
                POST
              </span>
              <code class="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-800">
                POST
                https://staging.getjupita.com/api/v1/api/endpoint/credit_score/generate-credit-history-full
              </code>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 mb-6">
              Generates a full credit history and summary from both Credit Registry and FCCB data.
            </p>

            <!-- Request Format -->
            <h3 class="text-md font-medium text-gray-800 mb-3">Request Format</h3>

            <div class="overflow-x-auto mb-4">
              <table class="min-w-full border-1 text-sm rounded-lg overflow-hidden">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Component
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700 border-b">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Content-Type -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">Content-Type</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">application/json</td>
                  </tr>
                  <!-- secret_key -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_key</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret key</td>
                  </tr>
                  <!-- secret_id -->
                  <tr class="border-b">
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">secret_id</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600 font-medium"
                      >
                        Header
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Your API secret ID</td>
                  </tr>
                  <!-- credit_report_json -->
                  <tr>
                    <td class="px-4 py-2 text-gray-800 bg-gray-100">credit_report_json</td>
                    <td class="px-4 py-2">
                      <span
                        class="px-2 py-1 text-xs rounded-md bg-pink-100 text-pink-600 font-medium"
                      >
                        Body
                      </span>
                    </td>
                    <td class="px-4 py-2 text-gray-600">Credit Bureau JSON object</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Headers</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
Headers:
secret_key: your-secret-key
secret_id: your-secret-id
Content-Type: application/json
      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Request Body</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
        {
   "id_type": "individual|business",
   "id_string": "individuals bvn| business registration number",
   "purpose": " credit_check purpose"
}

      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>

            <h3 class="text-md font-medium text-gray-800 mt-6 mb-3">Example Response</h3>
            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "status": "success",
  "status_code": 200,
  "data": {
    "credit_score_main": {
      "credit_score": 654,
      "summary": {
        "performing_accounts": 2,
        "derogatory_accounts": 0,
        "written_off_accounts": 0,
        "closed_accounts": 73,
        "highest_amount_accessed": 2500000,
        "loan_balance": 1509200
      }
    },
    "credit_history_credit_registry": { ... },
    "credit_history_fccb": { ... }
  }
}



      </pre
              >
              <button
                class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
              >
                <VIcon size="16">mdi-content-copy</VIcon>
                Copy
              </button>
            </div>
          </div>
        </section>

        <!-- Error handling -->
        <section id="error">
          <div class="bg-white rounded shadow mt-6 p-4">
            <div class="flex items-center space-x-2">
              <v-icon color="orange">mdi-alert</v-icon>
              <h2 class="text-lg font-semibold text-gray-900">Error Handling</h2>
            </div>
            <p class="text-gray-600 text-sm">
              The API uses conventional HTTP response codes to indicate the success or failure of
              requests. Codes in the 2xx range indicate success, 4xx range indicate client errors,
              and 5xx range indicate server errors.
            </p>

            <!-- Error Cards -->
            <div class="space-y-4">
              <!-- 400 Bad Request -->
              <div class="flex items-start p-4 border rounded-lg bg-gray-50 space-x-3 mt-4">
                <v-icon color="gray">mdi-close-circle-outline</v-icon>
                <div>
                  <span
                    class="inline-block px-2 py-1 rounded-md bg-orange-100 text-orange-600 text-xs font-semibold"
                  >
                    400 Bad Request
                  </span>
                  <p class="mt-2 text-gray-700 text-sm">
                    Invalid JSON structure or malformed request
                  </p>
                </div>
              </div>

              <!-- 401 Unauthorized -->
              <div class="flex items-start p-4 border rounded-lg bg-gray-50 space-x-3 mt-4">
                <v-icon color="gray">mdi-shield-lock-outline</v-icon>
                <div>
                  <span
                    class="inline-block px-2 py-1 rounded-md bg-red-100 text-red-600 text-xs font-semibold"
                  >
                    401 Unauthorized
                  </span>
                  <p class="mt-2 text-gray-700 text-sm">
                    Missing or invalid secret_key / secret_id
                  </p>
                </div>
              </div>

              <!-- 500 Internal Server Error -->
              <div class="flex items-start p-4 border rounded-lg bg-gray-50 space-x-3 mt-4">
                <v-icon color="gray">mdi-server</v-icon>
                <div>
                  <span
                    class="inline-block px-2 py-1 rounded-md bg-pink-100 text-pink-600 text-xs font-semibold"
                  >
                    500 Internal Server Error
                  </span>
                  <p class="mt-2 text-gray-700 text-sm">Processing error on the server side</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded shadow mt-6 p-4">
            <h3 class="text-md font-medium text-gray-800 mb-3">Example Response format</h3>
            <p class="text-gray-600 text-sm">
              When an error occurs, the API returns a JSON object with an error message describing
              what went wrong.
            </p>

            <div class="relative bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <pre>
{
  "error": "Invalid report format. Expected Credit Registry JSON."
}
      </pre
              >
            </div>
          </div>
        </section>
      </main>

      <!-- Sidebar Navigation -->
      <aside class="hidden md:block w-64 mt-6 p-6 bg-white shadow-inner sticky top-0 h-screen">
        <nav class="space-y-2">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="scrollTo(tab.id)"
            :class="[
              'block w-full text-left px-4 py-2 rounded-lg transition',
              activeTab === tab.id
                ? 'bg-blue-50 text-blue-600 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ tab.label }}
          </button>
        </nav>
      </aside>
    </div>
  </section>

  <FooterView />
</template>

<script setup>
import FooterView from '@/components/FooterView.vue'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import apexchart from 'vue3-apexcharts'
const activeTab = ref('overview')

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'authentication', label: 'Authentication' },
  { id: 'endpoints', label: 'Endpoints' },
  { id: 'error', label: 'Error Handling' }
]

// Scroll to section with offset
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const yOffset = -80 // adjust for sticky nav
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

// Update active tab on scroll
const handleScroll = () => {
  let current = 'overview'
  for (const tab of tabs) {
    const section = document.getElementById(tab.id)
    if (section && section.offsetTop - 100 <= window.scrollY) {
      current = tab.id
    }
  }
  activeTab.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const series = ref([600]) // your sample score
const maxScore = 1000

const angle = computed(() => {
  const score = series.value[0]
  return -90 + (score / maxScore) * 180 // 0–1000 mapped to -90° → +90°
})

const chartOptions = {
  chart: {
    type: 'radialBar',
    sparkline: { enabled: true }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 0,
        size: '65%' // slightly larger hollow center
      },
      track: {
        background: '#e5e7eb',
        strokeWidth: '100%'
      },
      dataLabels: {
        name: {
          show: true,
          offsetY: 30,
          color: '#6b7280',
          fontSize: '14px',
          formatter: () => 'Sample Credit Score'
        },
        value: {
          show: true,
          fontSize: '36px',
          fontWeight: 700,
          offsetY: -10,
          formatter: (val) => Math.round(val)
        }
      }
    }
  },
  labels: ['Credit Score'],
  fill: {
    type: 'gradient',
    gradient: {
      type: 'horizontal',
      stops: [0, 25, 50, 75, 100],
      colorStops: [
        { offset: 0, color: '#ef4444' },
        { offset: 25, color: '#f97316' },
        { offset: 50, color: '#facc15' },
        { offset: 75, color: '#3b82f6' },
        { offset: 100, color: '#22c55e' }
      ]
    }
  },
  stroke: { lineCap: 'round' },
  yaxis: { min: 0, max: maxScore }
}
// Mock credit score data (gauge)
const scoreData = [
  { name: 'Very Poor', value: 100, fill: '#ef4444' }, // red
  { name: 'Poor', value: 100, fill: '#f97316' }, // orange
  { name: 'Fair', value: 100, fill: '#facc15' }, // yellow
  { name: 'Good', value: 100, fill: '#3b82f6' }, // blue
  { name: 'Excellent', value: 100, fill: '#22c55e' } // green
]
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
.v-tab {
  text-transform: none;
}
.v-tabs {
  text-transform: none;
}
.fade-up-enter-active {
  transition: all 0.8s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
