import * as React from "react";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

import { Category } from "../../models/category";

import classnames from "classnames";

import "./../../assets/styles/category.css";

interface Props extends RouteComponentProps{
    category: Category;
    className?: string;
}

class CategoryPage extends React.Component<Props> {
    public render() {
        const {category, className} = this.props;
        return (
            <div className={className}>
                <h1>{ category.title }</h1>
                <div className={"category-box"}>
                    { category.data.map((skill, index) =>
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

export default withRouter<Props>(CategoryPage);
