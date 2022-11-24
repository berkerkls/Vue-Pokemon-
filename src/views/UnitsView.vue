<template>
  <Navbar fixed="true" style="z-index: 1" />
  <v-col>
    <v-col>
      <v-col>
        <v-col>
          <v-row>
            <v-col>
              <div class="d-flex align-center">
                <v-row justify="center" align="center">
                  <v-col v-for="(item, index) in typeArr" :key="index">
                    <v-col>
                      <v-row>
                        <v-card
                          width="400"
                          :title="
                            item.name.charAt(0).toUpperCase() +
                            item.name.slice(1)
                          "
                          subtitle="Pokemon"
                        >
                          <v-col>
                            <v-btn
                              color="red"
                              size="small"
                              @click="
                                routerPush(item.url.charAt(item.url.length - 2))
                              "
                              >{{
                                `See all Pokemons in ${item.name} type`
                              }}</v-btn
                            >
                          </v-col>
                        </v-card>
                      </v-row>
                    </v-col>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-col>
  </v-col>
</template>

<script lang="ts">
import { mapActions, mapState } from "pinia";
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import PokemonService from "../services/PokemonService";
import { Pokemon } from "../types/types";
import { RootObject } from "../types/types";

export default defineComponent({
  name: "Units",
  components: {
    Navbar,
  },
  data: () => {
    return {
      typeArr: [] as Pokemon[],
    };
  },
  methods: {
    routerPush(idNum: any) {
      this.$router.push({ name: "PokemonTypes", params: { id: idNum } });
    },
  },
  mounted() {
    PokemonService.getTypes().then((res) => (this.typeArr = res.data.results));
  },
});
</script>
