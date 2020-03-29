export interface Hero {
    id: number;
    name: string;
    description: string;
    url?: string;
}

export const emptyHero: Hero = {
    id: 0,
    name: '',
    description: '',
    url: ''
};
