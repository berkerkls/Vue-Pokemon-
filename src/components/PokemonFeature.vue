<template>
  <div>
    <ag-grid-vue
      style="width: 800px; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
    >
    </ag-grid-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { RootObject } from "../types/types";
import PokemonService from "../services/PokemonService";

export default defineComponent({
  name: "PokemonFeature",
  components: {
    AgGridVue,
  },
  props: ["pokeNum"],
  data() {
    return {
      columnDefs: [
        { headerName: "Name", field: "name" },
        { headerName: "Base Experience", field: "base_experience" },
        { headerName: "Game Indicies", field: "game_indices" },
        { headerName: "Height", field: "height" },
        { headerName: "Held Items", field: "pric" },
        { headerName: "Id", field: "price" },
        { headerName: "Moves", field: "price" },
        { headerName: "Order", field: "price" },
        { headerName: "Species", field: "price" },
        { headerName: "BaseStats", field: "price" },
        { headerName: "Effort", field: "price" },
      ],
      rowData: [] as RootObject[],
    };
  },
  methods: {
    async apiService() {
      await PokemonService.getPokemon(this.pokeNum).then((res) =>
        this.rowData.push(res.data)
      );
    },
  },
  created() {
    this.apiService();
  },

  watch: {
    pokeNum(newValue, oldValue) {
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);
    },
  },
});
</script>
