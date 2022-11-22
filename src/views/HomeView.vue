<template>
  <Navbar fixed="true" style="z-index: 1" />
  <v-container fluid>
    <v-col>
      <v-col>
        <v-col>
          <v-row>
            <v-col>
              <v-row justify="center" align="center">
                <v-card
                  class="mx-auto card-actions-padding"
                  max-width="344"
                  min-width="250"
                  v-for="(item, index) in pokemons"
                  :key="index"
                >
                  <v-img src="" height="200px"></v-img>

                  <v-card-title
                    >{{
                      item.name.charAt(0).toUpperCase() + item.name.slice(1)
                    }}
                  </v-card-title>

                  <v-card-subtitle> Pokemons </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                      @click="singleItem(item.name)"
                    >
                      See in Details
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import { Pokemon } from "../types/types";
import PokemonService from "../services/PokemonService";
import { usePokemonStore } from "../store/store";
import { mapActions, mapState } from "pinia";

export default defineComponent({
  name: "HomePage",
  components: {
    Navbar,
  },
  data: () => {
    return {
      pokemons: [] as Pokemon[],
      show: false,
    };
  },
  computed: {},
  methods: {
    singleItem(item: string) {
      PokemonService.getSingleSpecies(item).then((res) => console.log(res));
    },
  },
  created() {
    PokemonService.getSpecies().then((res) => {
      this.pokemons = res.data.results;
      console.log(this.pokemons);
    });
  },
});
</script>
