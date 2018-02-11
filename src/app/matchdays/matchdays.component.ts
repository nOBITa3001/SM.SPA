import { Component, OnInit } from '@angular/core';
import { Matchday, Prediction } from '../_models/matchday';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { MatchdayService } from '../_services/matchday.service';
import { Pagination, PaginatedResult } from '../_models/pagination';

@Component({
  selector: 'app-matchdays',
  templateUrl: './matchdays.component.html',
  styleUrls: ['./matchdays.component.css']
})
export class MatchdaysComponent implements OnInit {
  matchdays: Matchday[];
  pagination: Pagination;

  private pointCssClasses: any = { 3: 'table-success', 1: 'table-info', 0: 'table-danger' };

  constructor(
    private matchdayService: MatchdayService,
    private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.matchdays = [{
        'id': 0,
        'title': 'EPL 2017-18: Matchday 27',
        'matches': [{
            'id': 0,
            'home': 'Tottenham Hotspur',
            'away': 'Arsenal',
            'result': '1-0',
            'date': new Date('2018-02-10')
        }, {
          'id': 0,
          'home': 'Manchester City',
          'away': 'Leicester City',
          'result': '5-1',
          'date': new Date('2018-02-10')
        }, {
          'id': 0,
          'home': 'Newcastle United',
          'away': 'Manchester United',
          'result': '-',
          'date': new Date('2018-02-11')
        }, {
          'id': 0,
          'home': 'Southampton',
          'away': 'Liverpool',
          'result': '-',
          'date': new Date('2018-02-11')
        }, {
          'id': 0,
          'home': 'Chelsea',
          'away': 'West Bromwich Albion',
          'result': '-',
          'date': new Date('2018-02-12')
        }],
        'predictors': [{
          'id': 0,
          'user': 'Nut',
          'predictions': [{
            'id': 0,
            'home': 'TOT',
            'away': 'ARS',
            'result': '3-2',
            'point': 1
          }, {
            'id': 0,
            'home': 'MCI',
            'away': 'LEI',
            'result': '2-0',
            'point': 1
          }, {
            'id': 0,
            'home': 'NEW',
            'away': 'MUN',
            'result': '0-2',
            'point': null
          }, {
            'id': 0,
            'home': 'SOU',
            'away': 'LIV',
            'result': '0-3',
            'point': null
          }, {
            'id': 0,
            'home': 'CHE',
            'away': 'WBA',
            'result': '1-1',
            'point': null
          }],
          'totalPoint': 2
        }, {
          'id': 0,
          'user': 'Sun',
          'predictions': [{
            'id': 0,
            'home': 'TOT',
            'away': 'ARS',
            'result': '2-1',
            'point': 1
          }, {
            'id': 0,
            'home': 'MCI',
            'away': 'LEI',
            'result': '3-0',
            'point': 1
          }, {
            'id': 0,
            'home': 'NEW',
            'away': 'MUN',
            'result': '0-2',
            'point': null
          }, {
            'id': 0,
            'home': 'SOU',
            'away': 'LIV',
            'result': '1-2',
            'point': null
          }, {
            'id': 0,
            'home': 'CHE',
            'away': 'WBA',
            'result': '2-0',
            'point': null
          }],
          'totalPoint': 2
        }, {
          'id': 0,
          'user': 'Boss',
          'predictions': [{
            'id': 0,
            'home': 'TOT',
            'away': 'ARS',
            'result': '1-2',
            'point': 0
          }, {
            'id': 0,
            'home': 'MCI',
            'away': 'LEI',
            'result': '3-1',
            'point': 1
          }, {
            'id': 0,
            'home': 'NEW',
            'away': 'MUN',
            'result': '1-1',
            'point': null
          }, {
            'id': 0,
            'home': 'SOU',
            'away': 'LIV',
            'result': '1-3',
            'point': null
          }, {
            'id': 0,
            'home': 'CHE',
            'away': 'WBA',
            'result': '3-0',
            'point': null
          }],
          'totalPoint': 1
        }, {
          'id': 0,
          'user': 'No',
          'predictions': [{
            'id': 0,
            'home': 'TOT',
            'away': 'ARS',
            'result': '2-2',
            'point': 0
          }, {
            'id': 0,
            'home': 'MCI',
            'away': 'LEI',
            'result': '3-1',
            'point': 1
          }, {
            'id': 0,
            'home': 'NEW',
            'away': 'MUN',
            'result': '0-1',
            'point': null
          }, {
            'id': 0,
            'home': 'SOU',
            'away': 'LIV',
            'result': '1-1',
            'point': null
          }, {
            'id': 0,
            'home': 'CHE',
            'away': 'WBA',
            'result': '2-0',
            'point': null
          }],
          'totalPoint': 1
        }, {
          'id': 0,
          'user': 'Yong',
          'predictions': [{
            'id': 0,
            'home': 'TOT',
            'away': 'ARS',
            'result': '1-2',
            'point': 0
          }, {
            'id': 0,
            'home': 'MCI',
            'away': 'LEI',
            'result': '2-1',
            'point': 1
          }, {
            'id': 0,
            'home': 'NEW',
            'away': 'MUN',
            'result': '0-2',
            'point': null
          }, {
            'id': 0,
            'home': 'SOU',
            'away': 'LIV',
            'result': '1-3',
            'point': null
          }, {
            'id': 0,
            'home': 'CHE',
            'away': 'WBA',
            'result': '1-0',
            'point': null
          }],
          'totalPoint': 1
        }]
       }
    ];
  }

  getPredictionRowClass(prediction: Prediction): string {
    const result = this.pointCssClasses[prediction.point];
    if (!result) {
      return 'table-light';
    }

    return result;
  }

  load() {
    this.matchdayService.getMatchdays(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<Matchday[]>) => {
        this.matchdays = res.result;
        this.pagination = res.pagination;
      }, error => {
        this.alertify.error(error);
      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.load();
  }
}
