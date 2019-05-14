import { Routing } from "../models/router";

import Home from "./Home";
import Skills from "./categories/Skills";
import Realisations from "./categories/Realisations";
import Item from "./utils/Item";

const routing: Routing = {
    "home": {
        path: "/",
        exact: true,
        component: Home,
    },
    "skills": {
        path: "/skills",
        exact: true,
        component: Skills,
    },
    "realisations": {
        path: "/realisations",
        exact: true,
        component: Realisations,
    },
    "item": {
        path: "/:category/:item",
        component: Item,
    },
    "default": {
        path: "/",
        component: Home,
    }
}

export default routing;
