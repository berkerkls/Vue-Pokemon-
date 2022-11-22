<template>
  <Navbar />
  <v-container fluid>
    <h3>{{ pokename.charAt(0).toUpperCase() + pokename.slice(1) }}</h3>
    <v-col>
      <v-col>
        <v-col>
          <v-row>
            <v-col>
              <ag-grid-vue
                style="width: 800px; height: 400px"
                class="ag-theme-alpine"
                :columnDefs="columnDefs"
                :rowData="rowData"
              >
              </ag-grid-vue>
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
import PokemonService from "../services/PokemonService";

// Ag grid
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

export default defineComponent({
  name: "DetailsPage",
  components: {
    Navbar,
    AgGridVue,
  },
  props: ["pokename"],
  data: () => {
    return {
      detailedPokemon: {} as any,
      columnDefs: [
        {
          headerName: "Base Happiness",
          field: "base_happiness",
        },
        {
          headerName: "Capture Rate",
          field: "capture_rate",
        },
        { headerName: "Color", field: "color.name" },
        {
          headerName: "Egg Groups",
          field: "egg_groups",
        },
        { headerName: "Evolved From", field: "evolves_from_species" },
        { headerName: "Genera", field: "genera" },
        { headerName: "Generation", field: "generation.name" },
        { headerName: "Growth Rate", field: "growth_rate.name" },
        { headerName: "Habitat", field: "habitat.name" },
        { headerName: "Shape", field: "shape.name" },
      ],
      rowData: [] as Object[],
    };
  },
  created() {
    PokemonService.getSingleSpecies(this.pokename).then((res) => {
      this.rowData.push(res.data);

      this.rowData[0].egg_groups = res.data.egg_groups[0].name;

      if (this.rowData[0].evolves_from_species === null) {
        this.rowData[0].evolves_from_species = "nothing";
      } else {
        this.rowData[0].evolves_from_species =
          this.rowData[0].evolves_from_species.name;
      }

      this.rowData[0].genera = `${this.rowData[0].genera[0].language.name} : ${this.rowData[0].genera[0].genus} `;

      console.log(this.rowData[0]);
    });
  },
});
</script>
<style scoped>
::v-deep .ag-header-cell-label {
  justify-content: center !important;
}
</style>
