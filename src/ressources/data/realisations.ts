import { Category } from "../../models/category";

import * as r2de from "../articles/thorium.md"

const realisations: Category = {
    id: "realisations",
    title: "Réalisations",
    data: [
        {
            id:"thorium",
            title: "Thorium",
            article: r2de,
            description: "",
        },
        {
            id:"fovea",
            title: "Fovea",
            article: undefined,
            description: "",
        },
        {
            id:"womba",
            title: "Womba",
            article: undefined,
            description: "",
        },
        {
            id:"hostingpower",
            title: "Hosting Power",
            article: undefined,
            description: "",
        },
    ],
};

export default realisations;
