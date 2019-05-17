export interface Item {
    id: string;
    article: any;
    title: string;
    description?: string;
}

export interface Category {
    id: string;
    title: string;
    data: {
        [name: string]: Item;
    };
}

export interface Skill {
    id: string;
    name: string;
    item: Item;
}
