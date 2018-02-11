export interface Prediction {
    id: number;
    homeAbbreviation: string;
    awayAbbreviation: string;
    result: string;
    point?: number;
}
