import * as React from "react";

import Layout from "../layout/Layout";

import skills from "../../ressources/data/skills";
import CategoryPage from "../utils/Category";

export default class Skills extends React.Component<any> {
    render() {
        return (
            <Layout currentKey={skills.id}>
                <CategoryPage category={skills} />
            </Layout>
        );
    }
}
