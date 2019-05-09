export interface Item {
    id: string;
    article: any;
    title: string;
}

export interface Category {
    id: string;
    title: string;
    data: Item[];
}
