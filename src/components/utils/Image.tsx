import * as React from "react";
import { RouteComponentProps } from "react-router";

import "./../../assets/styles/article.css";

interface Props extends RouteComponentProps{
    name: string;
}

export default class Image extends React.Component<Props> {
    public render() {
        const { name } = this.props;
        const image = require("./../../ressources/images/thorium1.jpg");
        console.log(image);
        return <img src={ image }/>
    }
}
