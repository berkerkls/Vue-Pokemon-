<template>
  <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar
        density="compact"
        elevate-on-scroll
        color="teal-darken-4"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(199,75,14,.4), rgba(0,
            0,0,.4)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Pokemon</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn to="/">Home</v-btn>

        <v-btn to="/units">Units</v-btn>

        <v-btn to="/civilizations">Civilizations</v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: ["civilizationCall"],
  data: () => {
    return {};
  },
});
</script>
