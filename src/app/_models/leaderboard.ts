import { User } from './user';

export interface Leaderboard {
    id: number;
    title: string;
    ranks: Rank[];
}

export interface Rank {
    sequence: number;
    user: string;
    totalPoint: number;
    totalGame: number;
    winningRate: number;
    totalCorrectScore: number;
    totalCorrectResult: number;
    totalWrong: number;
}
