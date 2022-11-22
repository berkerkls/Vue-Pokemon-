import axios from "axios"

const apiPokemonClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': "*"
    }
})

export default {
    getSpecies() {
        return apiPokemonClient.get("/pokemon-species")
    },

    getSingleSpecies(name: string) {
        return apiPokemonClient.get("/pokemon-species/" + name)
    },

    getTypes() {
        return apiPokemonClient.get("/type")
    },

    getSingleType(id: number) {
        return apiPokemonClient.get("/type/" + id)
    },

    getAbilities() {
        return apiPokemonClient.get("/ability")
    },

    getStructure(name: string) {
        return apiPokemonClient.get("/ability" + name)
    },
}