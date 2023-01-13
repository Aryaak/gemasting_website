<template>
  <div class="z-50 inset-x-0 absolute">
    <!-- Navigation -->
    <div id="navbar" class="md:px-20 px-5 relative py-7 text-gray">
      <div
        class="
          flex flex-col
          mx-auto
          md:items-center md:justify-between md:flex-row
        "
      >
        <div class="flex flex-row items-center justify-between">
          <a
            @click="scrollHome"
            class="
              flex
              gap-x-3
              justify-between
              text-lg
              font-semibold
              cursor-pointer
            "
            ><img
              src="~assets/img/logo/gemasting.png"
              width="20"
              alt="Gemasting Logo"
            /><span class="text-Pink">Gemasting</span></a
          >
          <button
            @click.prevent="openNav"
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3"
                y1="4"
                x2="21"
                y2="4"
                stroke="#EC4794"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="11"
                y1="11"
                x2="21"
                y2="11"
                stroke="#EC4794"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                stroke="#EC4794"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <nav
          class="
            flex-col flex-grow
            gap-x-10
            pb-4
            md:pb-0
            hidden
            md:flex md:justify-end md:flex-row
          "
        >
          <a
            @click="scrollHome"
            :class="
              (nav == '/' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-LightSmoke cursor-pointer"
            >Home</a
          >
          <a
            @click.prevent="scollToSection('features')"
            :class="
              (nav == 'features' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-LightSmoke cursor-pointer"
            >Features</a
          >
          <NuxtLink
            :class="
              (nav == 'kms-online' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-LightSmoke"
            to="/kms-online"
            >KMS Online</NuxtLink
          >
          <a
            @click.prevent="scollToSection('about')"
            :class="
              (nav == 'about' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-LightSmoke cursor-pointer"
            >About</a
          >
          <NuxtLink
            :class="
              (nav == 'contact' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-LightSmoke"
            to="/contact"
            >Contact</NuxtLink
          >
        </nav>
      </div>
    </div>
    <!-- End Navigation -->

    <!-- Mobile Navigation -->
    <div
      v-show="open"
      id="navbar-mobile-overlay"
      class="fixed left-0 right-0 top-0 bottom-0 z-50"
    >
      <div class="w-9/12 bg-white h-full fixed right-0 pt-5 pl-5">
        <button @click.prevent="closeNav">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="white" />
            <line
              x1="5.41421"
              y1="4.92969"
              x2="18.1421"
              y2="17.6576"
              stroke="#EC4794"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="5"
              y1="17.66"
              x2="17.7279"
              y2="4.93208"
              stroke="#EC4794"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <nav class="flex flex-col absolute right-5 gap-y-5 mt-10">
          <a
            @click="scrollHome"
            :class="
              (nav == '/' ? 'font-semibold' : '', nav == '' ? 'text-Pink' : '')
            "
            class="text-Pink text-right cursor-pointer"
            >Home</a
          >
          <a
            @click.prevent="scollToSection('features')"
            :class="
              (nav == 'features' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-Pink text-right cursor-pointer"
            >Features</a
          >
          <NuxtLink
            :class="
              (nav == 'kms-online' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-Pink text-right"
            to="/kms-online"
            >KMS Online</NuxtLink
          >
          <a
            @click.prevent="scollToSection('about')"
            :class="
              (nav == 'about' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-Pink text-right cursor-pointer"
            >About</a
          >
          <NuxtLink
            :class="
              (nav == 'contact' ? 'font-semibold' : '',
              nav == '' ? 'text-Pink' : '')
            "
            class="text-Pink text-right"
            to="/contact"
            >Contact</NuxtLink
          >

          <div
            class="
              flex
              justify-between
              text-2xl
              items-center
              font-semibold
              my-10
            "
          >
            <img
              src="~assets/img/logo/gemasting.png"
              width="30"
              alt="Gemasting Logo"
              class="ml-2"
            /><span class="text-Pink font-bold">Gemasting</span>
          </div>

          <p class="text-black font-semibold">Download Aplikasi Kami</p>
          <button
            class="
              flex
              items-center
              justify-center
              gap-x-5
              bg-black
              py-5
              md:w-56
              h-max
              md:px-8
              px-5
              mb-12
              md:mb-0
            "
          >
            <img src="~assets/img/logo/playstore.png" alt="Button Logo" />
            <span class="text-LightSmoke text-center text-sm"
              >Download di <br />
              <strong>Play Store</strong></span
            >
          </button>
        </nav>
      </div>
    </div>
    <!-- End Mobile Navigation -->
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      open: false,
      nav: this.active,
    };
  },

  methods: {
    closeNav() {
      this.open = false;
    },
    openNav() {
      this.open = true;
    },

    scrollHome() {
      this.nav = "/";
      if ($nuxt.$route.name != "index") {
        this.$router.push("/");

        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
      window.scrollTo(0, 0);
    },

    scollToSection(section) {
      this.nav = section;
      if ($nuxt.$route.name != "index") {
        this.$router.push("/");

        setTimeout(() => {
          const el = document.getElementById(section);
          el.scrollIntoView();
          this.nav = section;
        }, 100);
      }

      const el = document.getElementById(section);

      el.scrollIntoView();

      this.closeNav();
    },
  },

  created() {
    window.onscroll = function () {
      var mynavbar = document.getElementById("navbar");
      var sticky = mynavbar.offsetTop;

      if (window.pageYOffset > sticky) {
        mynavbar.classList.add("sticky");
      } else {
        mynavbar.classList.remove("sticky");
        this.nav = $nuxt.$route.name;
      }
    };
  },
};
</script>


<style scoped>
</style>