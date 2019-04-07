import * as React from "react";

import Layout from "../layout/Layout";

import Header from "../layout/Header";

export default class SkillList extends React.Component<any> {
    render() {
        const header = <Header currentKey="skills"/>;
        return (
            <Layout header={header}>
                Skill List
            </Layout>
        );
    }
}
