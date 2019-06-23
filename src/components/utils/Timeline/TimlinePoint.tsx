import * as React from "react";

import "./../../../assets/styles/timeline.css";

interface Props {
    title: string;
    date: string;
    description: string;
}

interface State {
    open: boolean;
}

export default class TimelinePoint extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            open: false,
        }

        this.open = this.open.bind(this);
    }

    public render() {
        const {title, date, description} = this.props;
        const { open } = this.state;
        return (
            <div onClick={this.open} className="point">
                <p className="date">{ date }</p>
                <p className="title">{ title }</p>
                { open &&
                    <p className="description">{ description }</p>
                }

            </div>
        );
    }

    private open() {
        this.setState({ open: !this.state.open })
    }
}
