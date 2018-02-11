import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MatchdaysComponent } from './matchdays/matchdays.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { MatchdayListResolver } from './_resolvers/matchday-list.resolver';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'matchdays', component: MatchdaysComponent, resolve: { matchdays: MatchdayListResolver }},
            { path: 'leaderboards', component: LeaderboardsComponent }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
