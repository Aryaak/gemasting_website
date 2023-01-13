<template>
  <div class="flex flex-col md:gap-y-26 gap-y-20 md:my-36 my-20">
    <!-- Info -->
    <section class="md:mx-20 mx-5">
      <h4 class="text-3xl font-bold text-Pink text-center">
        Hasil Kartu Menuju Sehat
      </h4>
      <div
        class="
          flex
          md:flex-row
          flex-col
          justify-between
          mt-20
          gap-y-10
          md:gap-y-0
        "
      >
        <div class="md:w-6/12">
          <div class="flex gap-x-3 items-center md:mb-10 mb-5">
            <img src="~assets/img/icons/profile.png" alt="User Icon" />
            <h4 class="text-xl font-bold text-Pink">Profil Pasien</h4>
          </div>
          <ul class="flex flex-col md:gap-y-8 gap-y-4">
            <li class="flex gap-x-5">
              <span class="mr-14">Nama</span>
              <span>:</span>
              <span class="font-semibold text-Dark">Jhon Doe</span>
            </li>
            <li class="flex gap-x-5">
              <span class="mr-1">Jenis Kelamin</span>
              <span>:</span>
              <span class="font-semibold text-Dark">Laki-Laki</span>
            </li>
            <li class="flex gap-x-5">
              <span class="mr-14">Umur</span>
              <span>:</span>
              <span class="font-semibold text-Dark"
                >30 Bulan
                <span class="font-normal">(2 Tahun 5 Bulan 28 Hari)</span></span
              >
            </li>
            <li class="flex gap-x-5">
              <span class="mr-3">Berat Badan</span>
              <span>:</span>
              <span class="font-semibold text-Dark"
                >15 Kg
                <span class="text-Salmon">(Resiko Berat Berlebih)</span></span
              >
            </li>
            <li class="flex gap-x-5">
              <span class="mr-1">Tinggi Badan</span>
              <span>:</span>
              <span class="font-semibold text-Dark"
                >100 Cm <span class="text-Green">(Normal)</span></span
              >
            </li>
          </ul>
        </div>
        <div class="md:w-6/12">
          <div class="flex justify-between items-start">
            <div class="flex gap-x-3 items-center justify-start mb-5 md:mb-10">
              <img src="~assets/img/icons/info.png" alt="User Icon" />
              <h4 class="text-xl font-bold text-Pink">
                Imunisasi Bayi & Balita
              </h4>
            </div>
          </div>
          <div class="text-Dark">
            <p class="md:mb-8 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh tellus, rutrum quis ullamcorper eu, ultricies
              vehicula magna. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum nibh tellus, rutrum quis ullamcorper eu,
              ultricies vehicula magna.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum nibh tellus, rutrum quis ullamcorper
              eu, ultricies vehicula magna.
            </p>
            <p>
              Lakukan imunisasi DPT/HB/Hib4 dan Campak-Rubella 2 saat memasuki
              usia 18 bulan sesuai anjuran.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Info -->

    <!-- Line -->
    <div class="md:mx-20 mx-5">
      <hr />
    </div>
    <!-- End Line -->

    <!-- Chart -->
    <section
      class="
        md:mx-20
        mx-5
        flex
        md:flex-row md:gap-y-0
        gap-y-10
        flex-col
        justify-between
      "
    >
      <div class="md:w-6/12">
        <h4 class="text-xl font-bold text-Dark text-center mb-10">
          Berat Badan Menurut Umur
        </h4>
        <img
          src="~assets/img/charts/w-chart.png"
          alt="Weight Chart"
          class="mx-auto"
        />
      </div>
      <div class="md:w-6/12">
        <h4 class="text-xl text-center font-bold text-Dark mb-10">
          Tinggi Badan Menurut Umur
        </h4>
        <img
          src="~assets/img/charts/h-chart.png"
          alt="Weight Chart"
          class="mx-auto"
        />
      </div>
    </section>
    <!-- End Chart -->

    <!-- Line -->
    <div class="md:mx-20 mx-5">
      <hr />
    </div>
    <!-- End Line -->

    <!-- Tips -->
    <section
      class="
        md:mx-20
        mx-5
        flex
        md:flex-row
        flex-col
        d:gap-y-0
        gap-y-10
        justify-between
        gap-x-20
      "
    >
      <div class="md:w-6/12">
        <div class="flex gap-x-3 items-center justify-start mb-10">
          <img src="~assets/img/icons/discovery.png" alt="User Icon" />
          <h4 class="text-xl font-bold text-Pink">Pemenuhan Gizi Anak</h4>
        </div>
        <div>
          <ol type="number" class="flex flex-col gap-y-5">
            <li>
              1. Pemberian MP ASI disertai denganvariasi makanan pokok, lauk
              hewani, lauk nabati, kacang-kacangan, sayur, dan buah-buahan.
            </li>
            <li>
              2. Berikan makanan selingan yang bergizi kepada anak 1-2 kali
              sehari.
            </li>
            <li>
              3. Sebaiknya tidak memberikan makanan manis sebelum waktu makan.
            </li>
            <li>
              4. Lanjutkan pemberian ASI sebagai minuman dengan frekuensi 3-4
              kali sehari.
            </li>
          </ol>
        </div>
      </div>
      <div class="md:w-6/12">
        <div class="flex gap-x-3 items-center justify-start mb-10">
          <img src="~assets/img/icons/shield.png" alt="User Icon" />
          <h4 class="text-xl font-bold text-Pink">Pemenuhan Gizi Anak</h4>
        </div>
        <div>
          <ol type="number" class="flex flex-col gap-y-5">
            <li>1. Ajari berjalan di undakan tangga.</li>
            <li>2. Ajari menyapu & bersihkan meja.</li>
            <li>
              3. Sebaiknya tidak memberikan makanan manis sebelum waktu makan.3.
              Ajak memberesikan mainan.
            </li>
            <li>4. Ajari coret-coret di kertas.</li>
            <li>5. Bacakan cerita anak.</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Tips -->

    <!-- Line -->
    <div class="md:mx-20 mx-5">
      <hr />
    </div>
    <!-- End Line -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>