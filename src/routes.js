import { createRouter, createWebHashHistory } from "vue-router";
// github pages не позволяет настраивать сервер, поэтому там стоит использовать не createWebHistory, а createWebHashHistory
// если можно настраивать сервер, то можно и createWebHistory юзать
const routerHistory = createWebHashHistory();

import HomePage from "../src/pages/Home"
import AboutPage from "../src/pages/About"
import NotFound from "../src/pages/NotFound"
import Item from "../src/pages/Item"
import items from "./seeders/items";

const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            path: "/:itemAlias",
            name: "itemAlias",
            component: Item,
            beforeEnter(to) {
                if (!(items.find((item) => item.alias == to.params.itemAlias))) {
                    return {name: "404"}
                }
            }
        },
        {
            path: '/:PathMatch(.*)*',
            // path: '/:CatchAll(.*)',
            name: "404",
            component: NotFound
        }
    ]
})

export default routes;