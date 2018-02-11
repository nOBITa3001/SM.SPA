import { Match } from './match';
import { Predictor } from './Predictor';

export interface Matchday {
    id: number;
    title: string;
    matches: Match[];
    predictors: Predictor[];
}
