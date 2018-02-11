import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Matchday } from '../_models/matchday';
import { Injectable } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { MatchdayService } from '../_services/matchday.service';

@Injectable()
export class MatchdayListResolver implements Resolve<Matchday[]> {
    pageSize = 5;
    pageNumber = 1;

    constructor(
        private matchdayService: MatchdayService,
        private router: Router,
        private alertify: AlertifyService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Matchday[]> {
        return this.matchdayService.getMatchdays(this.pageNumber, this.pageSize)
            .catch(error => {
                this.alertify.error('Problem retrieving matchdays data');
                this.router.navigate(['/home']);
                return Observable.of(null);
            });
    }
}
