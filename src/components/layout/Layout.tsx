import * as React from "react";

import Header from "./Header";

import "./../../assets/styles/layout.css";

interface Props {
    currentKey: any;
}

export default class Layout extends React.Component<Props> {

    render() {
        return (
            <div className="layout">
                <Header currentKey={this.props.currentKey}/>
                <div className="layout-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
