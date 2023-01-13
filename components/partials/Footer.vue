<template>
  <!-- Footer -->
  <footer class="text-gray-600 body-font mx-5 md:mx-20">
    <div
      class="
        flex
        justify-between
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
        flex-wrap flex-col
      "
    >
      <div class="md:w-4/12 flex-shrink-0 text-left">
        <NuxtLink
          to="/"
          class="flex gap-x-3 md:mb-10 mb-5 text-lg font-semibold"
          ><img
            src="~assets/img/logo/gemasting.png"
            width="20"
            alt="Gemasting Logo"
          /><span class="text-Pink">Gemasting</span></NuxtLink
        >
        <p class="text-DarkSmoke">PT Menggapai Indonesia Cerdas</p>
      </div>
      <div
        class="
          grid grid-cols-2
          md:grid-cols-4 md:pl-20
          -mb-10
          md:mt-0
          mt-10
          text-left
        "
      >
        <div class="w-full md:px-4">
          <h2
            class="
              title-font
              font-medium
              tracking-widest
              text-lg
              mb-5
              text-Pink
            "
          >
            Website
          </h2>
          <nav class="list-none mb-10 flex flex-col gap-y-2">
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Features</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Contact</NuxtLink>
            </li>
          </nav>
        </div>
        <div class="w-full md:px-4">
          <h2
            class="
              title-font
              font-medium
              tracking-widest
              text-lg
              mb-5
              text-Pink
            "
          >
            Company
          </h2>
          <nav class="list-none mb-10 flex flex-col gap-y-2">
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Press</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Careers</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Contact</NuxtLink>
            </li>
          </nav>
        </div>
        <div class="w-full md:px-4">
          <h2
            class="
              title-font
              font-medium
              tracking-widest
              text-lg
              mb-5
              text-Pink
            "
          >
            Support
          </h2>
          <nav class="list-none mb-10 flex flex-col gap-y-2">
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Help Center</NuxtLink>
            </li>
            <li>
              <NuxtLink to="terms-of-service" class="text-DarkSmoke"
                >Terms of service</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Legal</NuxtLink>
            </li>
            <li>
              <NuxtLink to="privacy-policy" class="text-DarkSmoke"
                >Privacy Policy</NuxtLink
              >
            </li>
          </nav>
        </div>
        <div class="w-full md:px-4">
          <h2
            class="
              title-font
              font-medium
              tracking-widest
              text-lg
              mb-5
              text-Pink
            "
          >
            Follow us
          </h2>
          <nav class="list-none mb-10 flex flex-col gap-y-2">
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Facebook</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Twitter</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Dribbble</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="text-DarkSmoke">Instagram</NuxtLink>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="container mx-auto py-12 w-9/12">
      <p class="text-Grey text-sm text-center">
        © 2020
        <a
          href="https://www.tailwind-elements.com/"
          class="ml-1"
          target="_blank"
          >PT Menggapai Indoensia Cerdas. All rights reserved</a
        >
      </p>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {};
</script>

<style scoped>
</style>