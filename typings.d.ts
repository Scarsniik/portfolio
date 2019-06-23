declare module "*.svg" {
    interface IProps {
        [propName: string]: any
    }
    const props: IProps;
    export default props;
}

declare module "*.jpg" {
    interface IProps {
        [propName: string]: any
    }
    const props: IProps;
    export default props;
}

declare module "*.md" {
    const value: string;
    export default value;
}
