import * as React from "react";

import Layout from "../layout/Layout";

import projects from "../../ressources/data/realisations";
import CategoryPage from "../utils/Category";
import realisations from "../../ressources/data/realisations";

export default class Realisations extends React.Component<any> {
    render() {
        return (
            <Layout currentKey={realisations.id}>
                <CategoryPage category={projects} />
            </Layout>
        );
    }
}
