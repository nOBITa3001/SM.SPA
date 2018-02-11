import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedResult } from '../_models/pagination';
import { Matchday } from '../_models/matchday';

@Injectable()
export class MatchdayService {
    baseUrl = environment.apiUrl;

    constructor(private authHttp: HttpClient) {}

    getMatchdays(page?, itemsPerPage?) {
        const paginatedResult: PaginatedResult<Matchday[]> = new PaginatedResult<Matchday[]>();
        let params = new HttpParams();

        if (page != null) {
            params = params.append('pageNumber', page);
        }
        if (itemsPerPage != null) {
            params = params.append('pageSize', itemsPerPage);
        }

        return this.authHttp
            .get<Matchday[]>(`${this.baseUrl}/matchdays`, { observe: 'response', params })
            .map(response => {
                paginatedResult.result = response.body;
                if (response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                }

                return paginatedResult;
            });
    }
}
