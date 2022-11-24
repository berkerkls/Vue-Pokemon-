<template>
  <Navbar fixed="true" style="z-index: 1" />
  <v-layout>
    <v-navigation-drawer permanent>
      <v-list
        density="compact"
        nav
        v-for="(item, index) in allPokemons"
        :key="index"
        bg-color="orange"
      >
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          :title="item.pokemon.name"
          :value="item.pokemon.name"
          color="white"
          @click="
            pushRoute(
              item.pokemon.url.slice(
                item.pokemon.url.length - 4,
                item.pokemon.url.length - 1
              )
            )
          "
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 550px"><RouterView></RouterView></v-main>
  </v-layout>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import PokemonService from "../services/PokemonService";
import { Pokemon } from "../types/types";
import Navbar from "./Navbar.vue";

export default defineComponent({
  name: "PokemonTypes",
  props: ["id"],
  components: {
    Navbar,
  },
  data() {
    return {
      allPokemons: [] as Pokemon[],
    };
  },
  mounted() {
    PokemonService.getSingleType(this.id)
      .then(
        (res) =>
          (this.allPokemons = res.data.pokemon.sort((a: any, b: any) => {
            const nameA = a.pokemon.name.toUpperCase();
            const nameB = b.pokemon.name.toUpperCase();

            if (nameA > nameB) {
              return 1;
            }

            if (nameA < nameB) {
              return -1;
            }

            return 0;
          }))
      )
      .then(() => (this.allPokemons.length = 100))
      .then(() => console.log(this.allPokemons));
  },
  methods: {
    pushRoute(number: any) {
      this.$router.push({
        name: "PokemonFeature",
        params: { pokeNum: number },
      });
    },
  },
});
</script>
