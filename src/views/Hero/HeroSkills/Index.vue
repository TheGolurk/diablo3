<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white" />

    <ActiveSkills :skills="skills.active" />
    <hr />
    <PassiveSkills :skills="skills.passive" />
  </div>
</template>

<script>
export default {
  name: "HeroSkills",
  components: {
    ActiveSkills: () =>
      import(/* webpackChunkName: "ActiveSkills" */ "./ActiveSkills"),
    PassiveSkills: () =>
      import(/* webpackChunkName: "PassiveSkills" */ "./PassiveSkills")
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  }
};
</script>
