import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedResult } from '../_models/pagination';
import { Leaderboard } from '../_models/leaderboard';

@Injectable()
export class LeaderboardService {
    baseUrl = environment.apiUrl;

    constructor(private authHttp: HttpClient) {}

    getLeaderboards(page?, itemsPerPage?) {
        const paginatedResult: PaginatedResult<Leaderboard[]> = new PaginatedResult<Leaderboard[]>();
        let params = new HttpParams();

        if (page != null) {
            params = params.append('pageNumber', page);
        }
        if (itemsPerPage != null) {
            params = params.append('pageSize', itemsPerPage);
        }

        return this.authHttp
            .get<Leaderboard[]>(`${this.baseUrl}/leaderboards`, { observe: 'response', params })
            .map(response => {
                paginatedResult.result = response.body;
                if (response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                }

                return paginatedResult;
            });
    }
}

