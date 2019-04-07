import * as React from "react";

import Markdown from 'markdown-to-jsx';

import { Link } from "react-router-dom";

import "./../../assets/styles/article.css";

interface Props {
    text: any;
}

export default class Article extends React.Component<Props> {
    public render() {
        const text = this.props.text as string;

        return (
            <div className="article">
                {this.parse(text)}
            </div>
        );
    }

    private parse(text: string): any {
        if (!text) return <></>;
        
        const result = (
            <Markdown
                options={{
                    overrides: {
                        Link: {
                            component: Link,
                        },
                    },
                }}
            >
                {text}
            </Markdown>
        );

        return result;
    }
}
