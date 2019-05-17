export interface Item {
    id: string;
    article: any;
    title: string;
    description?: string;
    skills?: Item[];
}

export interface Category {
    id: string;
    title: string;
    data: {
        [name: string]: Item;
    };
}
