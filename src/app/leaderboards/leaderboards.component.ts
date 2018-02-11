import { Component, OnInit } from '@angular/core';
import { Leaderboard, Rank } from '../_models/leaderboard';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { LeaderboardService } from '../_services/leaderboard.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {
  leaderboards: Leaderboard[];
  pagination: Pagination;

  private pointCssClasses: any = {
    1: 'table-success',
    2: 'table-info',
    3: 'table-light',
    4: 'table-warning',
    5: 'table-danger'
  };

  constructor(
    private leaderboardService: LeaderboardService,
    private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.leaderboards = data['leaderboards'].result;
      this.pagination = data['leaderboards'].pagination;
    });
  }

  getRakingRowClass(rank: Rank): string {
    const result = this.pointCssClasses[rank.sequence];
    if (!result) {
      return 'table-light';
    }

    return result;
  }

  load() {
    this.leaderboardService.getLeaderboards(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<Leaderboard[]>) => {
        this.leaderboards = res.result;
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
