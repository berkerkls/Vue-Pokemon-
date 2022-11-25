import { defineStore } from "pinia"
import { isGeneratorFunction } from "util/types"
import PokemonService from "../services/PokemonService"
import { Pokemon } from "../types/types"

export const usePokemonStore = defineStore("pokemon", {
    state: () => ({
        pokemonTypes: [] as Pokemon[],
        pokeFavorites: localStorage.getItem("pokeFavorites") ? JSON.parse(localStorage.getItem("favorites") as string) : []

    }),
    getters: {
        getTypes(state) {
            return state.pokemonTypes
        },
        getFavoritesState(state) {
            return state.pokeFavorites;
        }
    },
    actions: {
        AddRemoveFavorites(newFav: any) {
            const favoriteLocal = localStorage.getItem("pokeFavorites")
            const favorites = favoriteLocal ? JSON.parse(favoriteLocal) : []
            const index = favorites.findIndex((el: any) => el.id === newFav.id)

            if (index === -1) {
                this.pokeFavorites.push(index)
            } else {
                this.pokeFavorites = this.pokeFavorites.filter((item: any) => item.name !== newFav.name)
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))
            const findedIndex = this.pokeFavorites.filter((res: any) => res.name = newFav.name)

            if (findedIndex === -1) {
                this.pokeFavorites.push(newFav)
            } else {
                this.pokeFavorites = this.pokeFavorites.filter((el: any) => el.name !== newFav.name)
            }

        }
    }


})

