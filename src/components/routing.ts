import { Routing } from "../models/router";

import Home from "./Home";
import SkillList from "./skills/SkillList";

const routing: Routing = {
    "home": {
        path: "/",
        exact: true,
        component: Home,
    },
    "skills": {
        path: "/skills",
        exact: true,
        component: SkillList,
    },
    "realisations": {
        path: "/realisations",
        exact: true,
        component: Home,
    }
}

export default routing;
