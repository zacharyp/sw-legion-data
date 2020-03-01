export declare type Source = {
    ldf: string;
    name: string;
    wave: number;
    released: boolean;
    contents: {
        units: {
            [k: string]: number;
        };
        upgrades: {
            [k: string]: number;
        };
    };
};
