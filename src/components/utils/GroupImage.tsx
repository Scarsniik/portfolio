import * as React from "react";

import imageGroup from "../../ressources/images/imageGroups"
import Image from "../utils/Image"

import ScrollLock from 'react-scrolllock';

import "./../../assets/styles/article.css";

interface Props {
    name: string;
}

interface State {
    activeImage: number;
}

export default class GroupImage extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            activeImage: undefined,
        }
    }

    public render() {
        const { name } = this.props;
        const { activeImage } = this.state;

        return (
            <div className="groupImage">
                {imageGroup[name].map((name, index) =>
                    <Image onClick={() => this.onImageClick(index)} name={name} />
                )}
                <div style={{flex: 1}}></div>
                { activeImage !== undefined &&
                    <ScrollLock>
                        <div className="activeImage" onClick={() => this.onImageClick(undefined)}>
                            <button
                                onClick={() => this.onImageClick(undefined)}
                                className="closeButton"
                            >
                                Fermer
                            </button>
                            <Image name={imageGroup[name][activeImage]} />

                        </div>
                    </ScrollLock>
                }
            </div>
        );
    }
    private onImageClick(index) {
        this.setState({activeImage: index});
    }
}
