<template>
  <div class="time-played mt-3">
    <hr class="bg-white mt-5" />
    <h2 class="font-diablo my-4">Time Played</h2>
    <div class="bg-dark p-3">
      <div v-for="hero in timePlayed" :key="hero.classSlug">
        <TimePlayedHero :hero-time="hero" />
      </div>
    </div>
  </div>
</template>

<script>
import TimePlayedHero from "./TimePlayedHero";

export default {
  name: "TimePlayed",
  props: {
    timePlayed: {
      required: true,
      type: Array
    }
  },
  computed: {
    // Cada héroe tiene un color
    // Creamos una clase por cada héroe
    classHeroBg() {
      return `hero-bg-color-${this.heroTime.classSlug}`;
    }
  },
  components: { TimePlayedHero }
};
</script>
