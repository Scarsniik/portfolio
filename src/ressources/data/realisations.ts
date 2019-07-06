import { Category } from "../../models/category";

import * as r2de from "../articles/thorium.md";
import * as fovea from "../articles/fovea.md";
import * as galt from "../articles/galt.md";
import * as lmc from "../articles/lmc.md";

import skills from "./skills";

const realisations: Category = {
    id: "realisations",
    title: "Réalisations",
    data: {
        thorium: {
            id:"thorium",
            title: "Thorium",
            article: r2de,
            description: "",
        },
        fovea: {
            id:"fovea",
            title: "Fovea",
            article: fovea,
            description: "",
        },
        // womba: {
        //     id:"womba",
        //     title: "Womba",
        //     article: undefined,
        //     description: "",
        // },
        lmc :{
            id:"lmc",
            title: "LMC VOD Desktop",
            article: lmc,
            description: "",
        },
        galt: {
            id:"galt",
            title: "Galt",
            article: galt,
            description: "",
            skills: [
                skills.data.typescript,
            ]
        },
    },
};

export default realisations;
