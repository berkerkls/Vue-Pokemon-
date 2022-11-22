import axios from "axios"

const apiAgeofClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': "*"
    }
})

export default {
    getSingleSpecies() {
        return apiAgeofClient.get("/pokemon-species")
    },

    getSpecies(name: string) {
        return apiAgeofClient.get("/pokemon-species/" + name)
    },

    getTypes() {
        return apiAgeofClient.get("/type")
    },

    getSingleType(id: number) {
        return apiAgeofClient.get("/type/" + id)
    },

    getAbilities() {
        return apiAgeofClient.get("/ability")
    },

    getStructure(name: string) {
        return apiAgeofClient.get("/ability" + name)
    },
}