import * as React from "react";

import Layout from "./layout/Layout";

import Article from "./utils/Article";

import * as text from "../ressources/articles/intro.md"

export default class Home extends React.Component<any> {
    render() {
        return (
            <Layout currentKey="home">
                <Article text={text}/>
            </Layout>
        );
    }
}
