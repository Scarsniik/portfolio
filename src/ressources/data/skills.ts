import { Category } from "../../models/category";

import * as proposition from "../articles/proposition.md";
import * as typescript from "../articles/typescript.md";
import * as react from "../articles/react.md";
import * as electron from "../articles/electron.md";
import * as accessibility from "../articles/accessibility.md";

const skills: Category = {
    id:"skills",
    title: "Compétences",
    data: {
        typescript: {
            id: "typescript",
            title: "Typescript",
            article: typescript,
        },
        react: {
            id: "react",
            title: "React",
            article: react,
        },
        electron: {
            id: "electron",
            title: "Electron",
            article: electron,
        },
        accessibility: {
            id: "accessibility",
            title: "Accessibilité",
            article: accessibility,
        },
        proposition: {
            id: "proposition",
            title: "Force de proposition",
            article: proposition,
        }
    },
};

export default skills;
