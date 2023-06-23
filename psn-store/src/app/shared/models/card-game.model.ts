export interface CardGame {
    id: number;
    name: string;
    price: string;
    information: string;
    frontImage: string;
    platforms: Array<string>;
    tags: Array<string>;
}