import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MatchdayListResolver } from './_resolvers/matchday-list.resolver';
import { MatchdayListComponent } from './matchdays/matchday-list/matchday-list.component';
import { LeaderboardListResolver } from './_resolvers/leaderboard-list.resolver';
import { LeaderboardListComponent } from './leaderboards/leaderboard-list/leaderboard-list.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'matchdays', component: MatchdayListComponent, resolve: { matchdays: MatchdayListResolver }},
            { path: 'leaderboards', component: LeaderboardListComponent, resolve: { leaderboards: LeaderboardListResolver }}
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
