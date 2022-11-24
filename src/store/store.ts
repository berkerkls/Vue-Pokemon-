import { defineStore } from "pinia"
import PokemonService from "../services/PokemonService"
import { Pokemon } from "../types/types"

export const usePokemonStore = defineStore("pokemon", {
    state: () => ({
        pokemonTypes: [] as Pokemon[]

    }),
    getters: {
        getTypes(state) {
            return state.pokemonTypes
        }
    },
})

