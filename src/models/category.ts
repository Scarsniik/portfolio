export interface Item {
    id: string;
    article: any;
    title: string;
    description?: string;
}

export interface Category {
    id: string;
    title: string;
    data: Item[];
}

export interface Competence {
    id: string;
    
}
