import * as React from "react";

import { Link } from "react-router-dom";

import { Category } from "../../models/category";

import "./../../assets/styles/article.css";

interface Props {
    category: Category;
}

export default class CategoryPage extends React.Component<Props> {
    public render() {
        const {category} = this.props
        return (<>
            <h1>{ category.title }</h1>
            { category.data.map((skill, index) =>
                <Link to={`skills/${skill.id}`}>
                    <div className="skill-box">
                        <h2>{skill.title}</h2>
                    </div>
                </Link>
            )}
        </>);
    }
}
