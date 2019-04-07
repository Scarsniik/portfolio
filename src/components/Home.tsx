import * as React from "react";

import Layout from "./layout/Layout";

import Article from "./utils/Article";

import Header from "./layout/Header";

import * as text from "../ressources/articles/intro.md"

export default class Home extends React.Component<any> {
    render() {
        const header = <Header currentKey="home"/>;

        console.log(text);
        return (
            <Layout header={header}>
                <Article text={text}/>
            </Layout>
        );
    }
}
