<template>
  <Navbar />
  <h1>Units</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
  name: "Units",
  components: {
    Navbar,
  },
  data: () => {},
});
</script>
