import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";

import Article from "./Article";
import Layout from "../layout/Layout";

import { Category, Item } from "../../models/category";

import data from "../../ressources/data";

import "./../../assets/styles/article.css";

interface Props extends RouteComponentProps{
}

interface State {
    category: Category;
    item: Item;
}

class CategoryItemPage extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            category: undefined,
            item: undefined,
        }
    }
    public componentDidMount() {
        this.refresh();
    }

    public componentDidUpdate(oldProps: Props) {
        const params = this.props.match.params as any;
        if (params !== oldProps.match.params) {
            this.refresh();
        }
    }

    public render() {
        const {item, category} = this.state;
        return category ? (
            <Layout currentKey={category.id}>
                { item &&
                    <div className={item.id}>
                        { item.article ?
                            <Article item={item} text={item.article}/>
                        :
                            <p>Work in progess</p>
                        }
                    </div>
                }
            </Layout>
        ) : <></>;
    }

    private refresh() {
        const params = this.props.match.params as any;
        const category: Category = data[params.category];
        let item;
        if (category) {
            item = Object.values(category.data).filter((value) => value.id === params.item)[0];
        }

        this.setState({category, item});
    }
}

export default withRouter<Props>(CategoryItemPage);
