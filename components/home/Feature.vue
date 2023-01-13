<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="bg-Smoke w-full p-8 hover:bg-Pink cursor-pointer group"
  >
    <img v-if="!hover" class="mb-5" :src="icon" alt="Feature Icon" />
    <img
      v-if="hover"
      class="mb-5 filter brightness-0 invert"
      :src="icon"
      alt="Feature Icon"
    />
    <h4 class="mb-5 text-xl font-bold group-hover:text-Smoke">{{ title }}</h4>
    <p class="text-sm text-Grey group-hover:text-Smoke">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: ["icon", "title", "text"],
};
</script>

<style scoped>
</style>