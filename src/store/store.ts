import { defineStore } from "pinia"
import apiPokemonClient from "../services/PokemonService"
import { Pokemon } from "../types/types"

export const usePokemonStore = defineStore("pokemon", {
    state: () => ({
    }),
    actions: {}
})

