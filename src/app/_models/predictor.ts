import { Prediction } from './prediction';

export interface Predictor {
    id: number;
    user: string;
    predictions: Prediction[];
    totalPoint: number;
}
