import * as React from "react";

import { Route, Router as ReactRouter, Switch } from "react-router";
import routing from "./routing";
import createBrowserHistory from "history/createBrowserHistory";

export default class Router extends React.Component<any> {
    private history = createBrowserHistory();

    render() {
        return (
            <ReactRouter history={this.history}>
                <Switch>
                    {Object.values(routing).map((value, index) =>
                        <Route key={index} exact={value.exact} path={value.path} component={value.component}/>
                    )}
                </Switch>
            </ReactRouter>
        );
    }
}
