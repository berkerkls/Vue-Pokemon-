<template>
  <Navbar />
  <h1>Civilization</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
  name: "Civilization",
  components: {
    Navbar,
  },
  data: () => {},
});
</script>
