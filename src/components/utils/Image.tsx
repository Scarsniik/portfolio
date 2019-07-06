import * as React from "react";
import { RouteComponentProps } from "react-router";

import "./../../assets/styles/article.css";

interface Props{
    name: string;
    onClick?: () => void;
}

export default class Image extends React.Component<Props> {
    public render() {
        const { name,onClick } = this.props;
        const image = require(`./../../ressources/images/${name}.png`);
        return <img onClick={onClick} src={ image }/>
    }
}
