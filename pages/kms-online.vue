<template>
  <div class="relative">
    <Navbar active="kms-online" />
    <WaButton />

    <!-- Hero -->
    <section
      class="md:h-screen h-max flex flex-col md:flex-row justify-between"
    >
      <div class="relative md:w-6/12 mb-10 md:mb-0">
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
            Kartu Menuju Sehat
          </h1>
          <h3 class="mt-5 text-Grey text-xs md:text-base">
            <span class="text-Dark">
              KMS singkatan dari Kartu Menuju Sehat</span
            >
            adalah suatu alat atau tempat mencatat beratbadan anak dibawah 5
            tahun (balita) setiap kali ditimbang setiap bulan secara teratur.
            Berat badan ini dibubuhkan pada KMS dalam bentuk sebuah titik.
          </h3>
          <h3 class="mt-5 text-Grey text-xs md:text-base">
            Titik ini disebut titik berat badan, anak balita perlu ditimbang
            badannya setiap bulan agar pertumbuhan dapat diikuti secara seksama
            melalui grafik berat badan yang merupakan rangkaian titik-titik
            berat badan dari bulan ke bulan.
          </h3>
        </div>
      </div>
      <div
        class="
          relative
          md:w-6/12
          w-full
          bg-Pink
          md:px-28
          px-5
          h-full
          md:pt-0
          pt-10
          pb-10
          md:pb-0
          flex
          justify-center
          items-center
        "
      >
        <form class="relative w-full flex flex-col gap-y-5">
          <div class="flex flex-col gap-y-3">
            <label class="text-white" for="name">Nama</label>
            <input
              class="px-5 py-4 w-full outline-none"
              type="text"
              id="name"
              placeholder="Masukan nama"
            />
          </div>
          <div
            class="grid md:grid-cols-2 gap-x-5 gap-y-5 md:gap-y-5 items-center"
          >
            <div class="flex flex-col gap-y-3">
              <label class="text-white" for="gender">Jenis Kelamin</label>
              <select class="px-5 py-4 outline-none" id="gender">
                <option selected disabled>Pilih Jenis Kelamin</option>
                <option value="L">Laki Laki</option>
                <option value="P">Perempaun</option>
              </select>
            </div>
            <div class="flex flex-col gap-y-3">
              <label class="text-white" for="date">Tanggal Lahir</label>
              <input
                class="px-5 py-4 w-full outline-none"
                type="date"
                id="date"
                placeholder="Masukan nama"
              />
            </div>
          </div>
          <div
            class="grid md:grid-cols-2 gap-x-5 gap-y-5 md:gap-y-5 items-center"
          >
            <div class="flex flex-col gap-y-3">
              <label class="text-white" for="gender"
                >Berat Badan Saat ini (kg)</label
              >
              <input
                class="px-5 py-4 w-full outline-none"
                type="number"
                id="weight"
                min="0"
                placeholder="Masukan berat"
              />
            </div>
            <div class="flex flex-col gap-y-3">
              <label class="text-white" for="gender"
                >Tinggi Badan Saat ini (kg)</label
              >
              <input
                class="px-5 py-4 w-full outline-none"
                type="number"
                id="height"
                min="0"
                placeholder="Masukan Tinggi"
              />
            </div>
          </div>
          <button
            @click.prevent="result = true"
            class="bg-Green text-white py-4 mt-10"
          >
            Lihat Hasil
          </button>
        </form>
      </div>
    </section>
    <!-- End Hero -->

    <Default v-if="!result" />
    <Result v-if="result" />

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/partials/Navbar.vue";
import Footer from "../components/partials/Footer.vue";
import Result from "../components/kms/Result.vue";
import Default from "../components/kms/Default.vue";
import WaButton from "../components/simple/WaButton.vue";

export default {
  components: {
    Navbar,
    Footer,
    Result,
    Default,
    WaButton,
  },
  data() {
    return {
      result: false,
    };
  },
};
</script>

<style scoped>
</style>