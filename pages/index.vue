<template>
  <div id="home" class="relative flex flex-col">
    <Navbar :active="nav" />
    <WaButton />
    <!-- Hero -->
    <section
      class="md:h-screen h-max flex flex-col md:flex-row justify-between"
    >
      <div
        class="relative md:w-6/12 mb-10 md:mb-0 flex flex-col justify-center"
      >
        <div class="md:mx-20 mx-5 md:mt-64 mt-48">
          <h1
            class="
              text-Dark
              font-bold
              md:text-4xl
              text-3xl
              leading-normal
              mb-10
            "
          >
            Perhatikan Kesehatan <br />Keluarga anda Bersama <br />Gemasting
          </h1>
          <h3 class="mt-5 text-Grey text-xs md:text-base">
            Gemasting adalah aplikasi kesehatan yang membantu orang tua untuk
            memperhatikan perkembangan anak dan mencegah masalah stunting pada
            anak
          </h3>
        </div>

        <div
          class="
            mb-10
            md:mt-20
            mt-10
            flex
            items-center
            md:gap-x-14 md:justify-start
            gap-x-5
            md:mx-20
            mx-5
          "
        >
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
            "
          >
            <img src="~assets/img/logo/playstore.png" alt="Button Logo" />
            <span class="text-LightSmoke text-center text-sm"
              >Download di <br />
              <strong>Play Store</strong></span
            >
          </button>
          <div
            @click="scollToSection('features')"
            class="flex items-center gap-x-3 cursor-pointer"
          >
            <p class="text-Pink">Selengkapnya</p>
            <img src="/img/icons/arrow-down.png" alt="Arrow Down Icon" />
          </div>
        </div>
      </div>
      <div class="relative md:w-6/12 w-full bg-Pink h-full md:pt-0 pt-10">
        <img
          class="
            md:absolute md:bottom-0 md:right-28
            relative
            -right-20
            w-64
            md:w-auto
          "
          src="~assets/img/illustration/wodeen-hand.png"
          alt="Hero Illustration"
        />
      </div>
    </section>
    <!-- End Hero -->

    <!-- Features -->
    <section id="features" class="md:mx-20 mx-5 md:pt-36 pt-20">
      <div
        class="
          flex flex-col
          md:gap-y-0
          gap-y-10
          md:flex-row
          justify-between
          md:items-center md:mb-20
          mb-10
        "
      >
        <div class="md:w-6/12">
          <small class="text-Pink font-bold text-lg">Feature</small>
          <h4 class="mt-3 text-3xl font-bold">
            <span class="text-Dark">Features</span>
            <span class="text-Pink">Gemasting</span>
          </h4>
        </div>
        <div class="md:w-6/12 relative">
          <p class="text-sm text-Grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab
            soluta aliquam doloremque reiciendis, minima veniam, enim atque
            consectetur aliquid adipisci corrupti! Iste voluptates molestias,
            quasi vero veniam tempore adipisci.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <Feature
          icon="/img/icons/chat.png"
          title="Chat Pakar"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
      exercitationem ex quo doloremque reprehenderit corrupti tempore veniam sit
      molestiae, incidunt quas vel fugit autem libero unde necessitatibus
      assumenda voluptates consequatur."
        />
        <Feature
          icon="/img/icons/appointment.png"
          title="Buat Janji"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
      exercitationem ex quo doloremque reprehenderit corrupti tempore veniam sit
      molestiae, incidunt quas vel fugit autem libero unde necessitatibus
      assumenda voluptates consequatur."
        />
        <Feature
          icon="/img/icons/kms.png"
          title="KMS Online"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
      exercitationem ex quo doloremque reprehenderit corrupti tempore veniam sit
      molestiae, incidunt quas vel fugit autem libero unde necessitatibus
      assumenda voluptates consequatur."
        />
        <Feature
          icon="/img/icons/stunting.png"
          title="Cek stunting"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
      exercitationem ex quo doloremque reprehenderit corrupti tempore veniam sit
      molestiae, incidunt quas vel fugit autem libero unde necessitatibus
      assumenda voluptates consequatur."
        />
        <Feature
          icon="/img/icons/medical.png"
          title="Rekam Medis"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
      exercitationem ex quo doloremque reprehenderit corrupti tempore veniam sit
      molestiae, incidunt quas vel fugit autem libero unde necessitatibus
      assumenda voluptates consequatur."
        />
        <Feature
          icon="/img/icons/community.png"
          title="Komunitas"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
      exercitationem ex quo doloremque reprehenderit corrupti tempore veniam sit
      molestiae, incidunt quas vel fugit autem libero unde necessitatibus
      assumenda voluptates consequatur."
        />
      </div>
    </section>
    <!-- End Features -->

    <!-- About -->
    <section
      id="about"
      class="md:mx-20 mx-5 md:pt-36 pt-20 md:flex justify-between items-center"
    >
      <div class="md:w-6/12 mb-5 md:mb-0">
        <img
          src="~assets/img/illustration/about.png"
          alt="About Illustration pt-36"
        />
      </div>

      <div class="md:w-6/12">
        <small class="text-Pink font-bold text-lg">About us</small>
        <h4 class="mt-3 text-3xl font-bold">
          <span class="text-Dark">About</span>
          <span class="text-Pink">Gemasting</span>
        </h4>
        <p class="text-sm text-Grey mt-10">
          Gemasting merupakan inovasi berbasis mobile apps untuk menggerakan
          masyarakat (ibu dan bayi) sehingga sadar akan bahaya stunting (balita
          gagal tumbuh dan kembang). Edukasi ini dilakukan melalui pola asuh
          hidup sehat kepada ibu dan balita di Indonesia sehingga terciptanya
          generasi cerdas.
        </p>

        <p class="text-sm text-Grey mt-5">
          Indonesia sudah saatnya memiliki generasi dengan kemampuan dan
          kompetensi yang dapat bersaing dengan seluruh penduduk dunia
          Internasional. Melalui Moto dengan Great and Measurable to Achieve
          Everything atau dalam arti bahasa Indonesia dengan "berfikir besar
          (Great) dan Melangkah secara terukur (Measurable) maka kita dapat
          meraih segala yang kita inginkan (Achieve Everything)."
        </p>
      </div>
    </section>
    <!-- End About -->

    <!-- Highlight -->
    <section
      class="
        md:mx-20
        mx-5
        bg-Pink
        px-5
        md:px-8
        pt-5
        md:pt-8 md:pb-8
        relative
        md:my-36
        my-20
      "
    >
      <div class="md:w-8/12">
        <h3
          class="text-LightSmoke font-semibold md:text-4xl text-2xl mb-8 w-9/12"
        >
          Perhatikan Kesehatan Keluarga Anda Bersama Gemasting.
        </h3>
        <p class="text-LightSmoke mb-10 md:w-8/12">
          Download aplikasi gemasting untuk konsultasi mengenai kesehatan
          Keluarga anda dengan dokter yang sudahberpengalaman
        </p>
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
      </div>
      <img
        class="md:absolute bottom-0 right-20 w-96 md:w-64"
        src="~assets/img/illustration/mockup.png"
        alt="Mockup Illustration"
      />
    </section>
    <!-- End Highlight -->

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/partials/Navbar.vue";
import Footer from "../components/partials/Footer.vue";
import WaButton from "../components/simple/WaButton.vue";
import Feature from "../components/home/Feature.vue";

export default {
  components: {
    Navbar,
    Footer,
    WaButton,
    Feature,
  },
  data() {
    return {
      nav: "/",
    };
  },
  methods: {
    scollToSection(section) {
      this.nav = section;
      const el = document.getElementById(section);
      el.scrollIntoView();
    },
  },
};
</script>
