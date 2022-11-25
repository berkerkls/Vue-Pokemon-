<template>
  <Navbar fixed="true" style="z-index: 1" />
  <v-container fluid>
    <v-col>
      <v-col>
        <h1>Top Pokemons</h1>
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
                      <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
                        height="200px"
                      ></v-img>

                      <v-card-title
                        >{{
                          item.name.charAt(0).toUpperCase() + item.name.slice(1)
                        }}
                      </v-card-title>

                      <v-card-subtitle> Pokemons </v-card-subtitle>

                      <v-card-actions>
                        <RouterLink
                          :to="{
                            name: 'DetailsPage',
                            params: { pokename: item.name },
                          }"
                        >
                          <v-btn
                            color="orange lighten-2"
                            text
                            @click="singleItemPush(item.name)"
                            >See in Details
                          </v-btn>
                        </RouterLink>
                      </v-card-actions>
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
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
      pokemon: {} as any,
      show: false,
    };
  },
  computed: {},
  methods: {
    singleItemPush(item: string) {
      PokemonService.getSingleSpecies(item).then(
        (res) => (this.pokemon = res.data)
      );
    },
  },
  created() {
    PokemonService.getSpecies().then((res) => {
      this.pokemons = res.data.results.sort((a: any, b: any) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA > nameB) {
          return 1;
        }

        if (nameA < nameB) {
          return -1;
        }

        return 0;
      });
      console.log(this.pokemons);
    });
  },
});
</script>
