import * as React from "react";

import "./../../assets/styles/header.css"

import { Link, withRouter } from "react-router-dom";

import { RouterProps } from "../../models/router";

interface Props extends RouterProps {
    currentKey: string;
}

export class Header extends React.Component<Props> {
    private nav: {key: string, label: string, path: string}[] = [
        {
            key: "home",
            label: "Accueil",
            path: "/",
        },
        {
            key: "skills",
            label: "Compétences",
            path: "/skills",
        },
        {
            key: "realisation",
            label: "Réalisations",
            path: "/realisations",
        },
    ];
    render() {
        return (
            <nav className="header">
                {this.nav.map((value, index) =>
                    <Link
                        to={value.path}
                        {...(value.key === this.props.currentKey ? {className: "active"} : {})}
                        key={index}
                    >
                        {value.label}
                    </Link>
                )}
            </nav>
        );
    }
}

export default withRouter(Header as any) as any;
