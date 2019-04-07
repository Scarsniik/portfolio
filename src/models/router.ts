export interface Route {
    path: string;
    exact: boolean;
    component: any;
}

export interface RouterProps {
    match: any;
    history: any;
}

export interface Routing {
    [title: string]: Route;
}
