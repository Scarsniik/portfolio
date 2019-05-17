import { Category } from "../../models/category";

import * as r2de from "../articles/thorium.md";
import * as galt from "../articles/galt.md";

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
            article: undefined,
            description: "",
        },
        womba: {
            id:"womba",
            title: "Womba",
            article: undefined,
            description: "",
        },
        hostingpower :{
            id:"hostingpower",
            title: "Hosting Power",
            article: undefined,
            description: "",
        },
        galt: {
            id:"galt",
            title: "Galt",
            article: galt,
            description: "",
        },
    },
};

export default realisations;
