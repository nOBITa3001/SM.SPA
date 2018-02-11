import { Component, OnInit } from '@angular/core';
import { Leaderboard, Rank } from '../_models/leaderboard';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {
  leaderboards: Leaderboard[];

  private pointCssClasses: any = {
    1: 'table-success',
    2: 'table-info',
    3: 'table-light',
    4: 'table-warning',
    5: 'table-danger'
  };

  constructor() { }

  ngOnInit() {
    this.leaderboards = [{
      'id': 0,
      'title': 'BU: 147',
      'ranks': [{
          'sequence': 1,
          'user': 'Nut',
          'totalPoint': 2,
          'totalGame': 2,
          'winningRate': ((2 / 2) * 100),
          'totalCorrectScore': 0,
          'totalCorrectResult': 2,
          'totalWrong': 0
      }, {
        'sequence': 2,
        'user': 'Sun',
        'totalPoint': 2,
        'totalGame': 2,
        'winningRate': ((2 / 2) * 100),
        'totalCorrectScore': 0,
        'totalCorrectResult': 2,
        'totalWrong': 0
      }, {
        'sequence': 3,
        'user': 'Boss',
        'totalPoint': 1,
        'totalGame': 2,
        'winningRate': ((1 / 2) * 100),
        'totalCorrectScore': 0,
        'totalCorrectResult': 1,
        'totalWrong': 1
      }, {
        'sequence': 4,
        'user': 'No',
        'totalPoint': 1,
        'totalGame': 2,
        'winningRate': ((1 / 2) * 100),
        'totalCorrectScore': 0,
        'totalCorrectResult': 1,
        'totalWrong': 1
      }, {
        'sequence': 5,
        'user': 'Yong',
        'totalPoint': 1,
        'totalGame': 2,
        'winningRate': ((1 / 2) * 100),
        'totalCorrectScore': 0,
        'totalCorrectResult': 1,
        'totalWrong': 1
      }]
     }
  ];
  }

  getRakingRowClass(rank: Rank): string {
    const result = this.pointCssClasses[rank.sequence];
    if (!result) {
      return 'table-light';
    }

    return result;
  }
}
