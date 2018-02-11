import { User } from './user';

export interface Matchday {
    id: number;
    title: string;
    matches: Match[];
    predictors: Predictor[];
}

export interface Match {
    id: number;
    // home: Team;
    // away: Team;
    home: string;
    away: string;
    result: string;
    date: Date;
}

export interface Predictor {
    id: number;
    user: string;
    predictions: Prediction[];
    totalPoint: number;
}

export interface Prediction {
    id: number;
    home: string;
    away: string;
    result: string;
    point?: number;
}

export interface Team {
    id: number;
    name: string;
    shortName: string;
}
