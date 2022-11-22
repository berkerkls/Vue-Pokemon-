import { defineStore } from "pinia"
import apiAgeofClient from "../services/index"
import { Civilization } from "../types/types"

export const useAgeofStore = defineStore("empires", {
    state: () => ({
        civilizations: [] as Civilization[],
    }),
    actions: {
        async CivilizationsCall() {
            await apiAgeofClient.getSingleSpecies().then((result: any) => {
                console.log(result.data)
            }).catch((err) => {
                console.log(err)
            });
        }
    }
})

