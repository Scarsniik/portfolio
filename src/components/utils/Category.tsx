import * as React from "react";
import { Link } from "react-router-dom";

import { Category } from "../../models/category";

import classnames from "classnames";

import "./../../assets/styles/category.css";

interface Props{
    category: Category;
    className?: string;
}

export default class CategoryPage extends React.Component<Props> {
    public render() {
        const {category, className} = this.props;
        return (
            <div className={classnames("category-wrapper", className)}>
                <h1 className="category-title">{ category.title }</h1>
                <div className={"category-box"}>
                    { Object.values(category.data).map((skill, index) =>
                        <Link key={index} to={`${category.id}/${skill.id}`}>
                            <div className="item-box">
                                <h2>{skill.title}</h2>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}
