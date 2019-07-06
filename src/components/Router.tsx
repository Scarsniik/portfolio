import * as React from "react";

import { Route, HashRouter as ReactRouter, Switch } from "react-router-dom";
import routing from "./routing";

export default class Router extends React.Component<any> {
    render() {
        return (
            <ReactRouter>
                <Switch>
                    {Object.values(routing).map((value, index) =>
                        <Route key={index} exact={value.exact} path={value.path} component={value.component}/>
                    )}
                </Switch>
            </ReactRouter>
        );
    }
}
