import { Category } from "../../models/category";

import * as proposition from "../articles/proposition.md";

const skills: Category = {
    id:"skills",
    title: "Compétences",
    data: {
        typescript: {
            id: "typescript",
            title: "Typescript",
            article: undefined,
        },
        react: {
            id: "react",
            title: "React",
            article: undefined,
        },
        electron: {
            id: "electron",
            title: "Electron",
            article: undefined,
        },
        accessibility: {
            id: "accessibility",
            title: "Accessibilité",
            article: undefined,
        },
        proposition: {
            id: "proposition",
            title: "Force de proposition",
            article: proposition,
        }
    },
};

export default skills;
