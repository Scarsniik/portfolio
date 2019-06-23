import * as React from "react";

import TimelinePoint from "./TimlinePoint";

import "./../../../assets/styles/timeline.css";

interface State {
    openedItem: boolean;
}

export default class Timeline extends React.Component<{}, State> {
    public constructor(props: any) {
        super(props);

        this.state = {
            openedItem: undefined,
        }
    }

    public render() {
        return (
            <div className="timelineWrapper">
                <div className="timeline">
                <TimelinePoint
                        title="Diplome d'expert en ingenieurie Logiciel"
                        description="Diplome à INTECH"
                        date="Fin 2019"
                    />
                    <TimelinePoint
                        title="Alternance: Noop"
                        description="Je suis entré chez Noop"
                        date="2018"
                    />
                    <TimelinePoint
                        title="Stage: EDR Lab"
                        description="Je suis entré chez EDR Lab pour un stage de 6 mois"
                        date="2017"
                    />
                    <TimelinePoint
                        title="Entré à INTECH"
                        description="Je suis entré à INTECH"
                        date="2014"
                    />
                </div>
            </div>
        );
    }
}
