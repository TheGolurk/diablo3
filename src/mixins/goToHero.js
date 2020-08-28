export default {
  methods: {
    goToHero(heroId) {
      const { region, battleTag } = this.$route.params;
      this.$route.push({ name: "Hero", params: { region, battleTag, heroId } });
    }
  }
};
