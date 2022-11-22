import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"
import UnitsView from "../views/UnitsView.vue"
import CivilView from "../views/CivilView.vue"
import PokeDetails from "../components/PokeDetails.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HomePage",
        component: HomeView,
    },
    {
        path: "/pokemon-species/:pokename",
        name: "DetailsPage",
        component: PokeDetails,
        props: true
    },
    {
        path: "/units",
        name: "UnitsPage",
        component: UnitsView
    },
    {
        path: "/civilizations",
        name: "CivilizationPage",
        component: CivilView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router