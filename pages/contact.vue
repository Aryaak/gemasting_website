<template>
  <div>
    <Navbar active="contact" />
    <WaButton />
    <!-- Hero -->
    <section
      class="md:h-screen h-max flex flex-col md:flex-row justify-between"
    >
      <div
        class="md:w-6/12 md:mb-0 flex flex-col justify-center md:mt-20 mt-28"
      >
        <div class="md:mx-20 mx-5">
          <form class="w-full flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-3">
              <label class="text-Dark font-bold" for="name">Nama</label>
              <div class="px-5 py-4 w-full bg-Smoke flex flex-row gap-x-5">
                <img src="~assets/img/icons/profile-2.png" />
                <input
                  class="outline-none bg-Smoke"
                  type="text"
                  id="name"
                  placeholder="Masukan nama"
                />
              </div>
            </div>

            <div class="flex flex-col gap-y-3">
              <label class="text-Dark font-bold" for="name">Email</label>
              <div class="px-5 py-4 w-full bg-Smoke flex flex-row gap-x-5">
                <img src="~assets/img/icons/sms.png" />
                <input
                  class="outline-none bg-Smoke"
                  type="email"
                  id="name"
                  placeholder="Masukan email"
                />
              </div>
            </div>

            <div class="flex flex-col gap-y-3">
              <label class="text-Dark font-bold" for="name">Pesan</label>
              <div class="px-5 py-4 w-full bg-Smoke flex flex-row gap-x-5">
                <textarea
                  class="outline-none bg-Smoke"
                  cols="30"
                  rows="5"
                  placeholder="Pesan anda"
                ></textarea>
              </div>
            </div>

            <button class="bg-Pink text-white py-4 md:mt-10 mt-5 w-4/12">
              Kirimkan
            </button>
          </form>
        </div>
      </div>
      <div
        class="
          relative
          md:w-6/12
          w-full
          bg-Pink
          h-full
          md:pt-0
          pt-10
          flex flex-col
          justify-center
          items-start
          md:px-20
          px-5
          md:mt-0
          mt-10
          pb-10
          md:pb-0
        "
      >
        <div>
          <h2 class="text-white font-semibold md:text-2xl text-xl mb-8">
            Informasi Kontak
          </h2>
          <p class="text-white">
            Anda dapat menghubungi kami dengan <br />
            kontak dibawah. Terima kasih
          </p>

          <ul class="text-white font-semibold mt-20 flex flex-col gap-y-8">
            <li class="flex flex-row gap-x-5">
              <img src="~assets/img/icons/call.png" />
              <span>+62812 9224 5171</span>
            </li>
            <li class="flex flex-row gap-x-5">
              <img src="~assets/img/icons/sms-2.png" />
              <span>Gemasting@gmail.com</span>
            </li>

            <li class="flex flex-row gap-x-5 items-start">
              <img src="~assets/img/icons/location.png" width="20" />
              <span class="text-sm"
                >Gedung TBI 2, Ruangan No. 3, Komplek IPB Science Techno <br />
                Park Jl. Taman Kencana, Bogor, Jawa Barat 16128, <br />
                Indonesia.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Content -->

    <section
      class="
        flex
        md:flex-row
        flex-col
        md:py-36
        py-20
        relative
        items-center
        gap-y-10
        md:mx-20
        mx-5
      "
    >
      <div class="md:w-6/12">
        <div>
          <h1
            class="
              text-Dark
              font-bold
              md:text-4xl
              text-3xl
              leading-normal
              md:mb-10
              mb-5
            "
          >
            Kantor Pusat
          </h1>
          <h3 class="mt-5 text-Grey text-xs md:text-base">
            Gedung TBI 2, Ruangan No. 3, Komplek IPB Science <br />
            Techno Park Jl. Taman Kencana, Bogor, Jawa Barat <br />
            16128, Indonesia.
          </h3>
        </div>
      </div>
      <div class="md:w-6/12">
        <iframe
          class="w-full"
          style="flex: 1 1 auto; border: 0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413.32424095831334!2d106.80131583436687!3d-6.587812533594798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c540e6eccd83%3A0x65df282719969bc3!2sScience and Techno Park - IPB University!5e0!3m2!1sid!2sid!4v1635215848268!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          height="350"
        ></iframe>
      </div>
    </section>
    <!-- End Content -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/partials/Navbar.vue";
import Footer from "../components/partials/Footer.vue";
import WaButton from "../components/simple/WaButton.vue";

export default {
  components: {
    Navbar,
    Footer,
    WaButton,
  },
};
</script>

<style scoped>
</style>