import * as React from "react";

import Markdown from 'markdown-to-jsx';

import { Link } from "react-router-dom";
import Timeline from "./Timeline/Timeline";
import Image from "./Image";

import { Item } from "../../models/category";

import "./../../assets/styles/article.css";

interface Props {
    text: any;
    item?: Item;
}

export default class Article extends React.Component<Props> {
    public render() {
        const text = this.props.text as string;
        const item = this.props.item;
        return (
            <div className="article">
                {this.parse(text)}

                { item && item.skills && <>
                    <h2> Compétences liées</h2>
                    { item.skills.map((skill, index) => 
                        <Link key={index} to={`/skills/${skill.id}`}>{skill.title}</Link>
                    )}
                </>}
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
                        Timeline: {
                            component: Timeline,
                        },
                        Image: {
                            component: Image,
                        }
                    },
                }}
            >
                {text}
            </Markdown>
        );

        return result;
    }
}
