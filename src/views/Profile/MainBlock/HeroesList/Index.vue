<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <b-table
      hover
      striped
      dark
      :items="heroes"
      :fields="fields"
      stacked="sm"
      small
    >
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item" />
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from "./HeroIco";

export default {
  name: "HeroesList",
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  components: { HeroIco },
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "name"
        },
        {
          key: "class",
          label: "Class",
          sortable: true
        },
        {
          key: "kills",
          label: "Elite Kills",
          sortable: true
        }
      ]
    };
  }
};
</script>
