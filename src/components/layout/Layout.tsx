import * as React from "react";

import "./../../assets/styles/layout.css";

interface Props {
    header: any;
}

export default class Layout extends React.Component<Props> {

    render() {
        return (
            <div className="layout">
                { this.props.header && this.props.header}
                <div className="layout-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
