<template>
  <Navbar :civilizationCall="CivilizationsCall" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import { Civilization } from "../types/types";
import { useAgeofStore } from "../store/store";
import { mapActions } from "pinia";

export default defineComponent({
  name: "HomePage",
  components: {
    Navbar,
  },
  data: () => {
    return {
      civilizations: {} as Civilization,
    };
  },
  methods: {
    ...mapActions(useAgeofStore, ["CivilizationsCall"]),
  },
});
</script>
