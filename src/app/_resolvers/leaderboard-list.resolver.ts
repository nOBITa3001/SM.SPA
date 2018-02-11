import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Leaderboard } from '../_models/leaderboard';
import { Injectable } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { LeaderboardService } from '../_services/leaderboard.service';

@Injectable()
export class LeaderboardListResolver implements Resolve<Leaderboard[]> {
    pageSize = 5;
    pageNumber = 1;

    constructor(
        private leaderboardService: LeaderboardService,
        private router: Router,
        private alertify: AlertifyService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Leaderboard[]> {
        return this.leaderboardService.getLeaderboards(this.pageNumber, this.pageSize)
            .catch(error => {
                this.alertify.error('Problem retrieving leaderboards data');
                this.router.navigate(['/home']);
                return Observable.of(null);
            });
    }
}
