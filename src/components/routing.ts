import { Routing } from "../models/router";

import Home from "./Home";
import Skills from "./categories/Skills";
import Realisations from "./categories/Realisations";

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
    }
}

export default routing;
