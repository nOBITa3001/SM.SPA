import { Component, OnInit } from '@angular/core';
import { Matchday } from '../_models/matchday';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { MatchdayService } from '../_services/matchday.service';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { Prediction } from '../_models/prediction';

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
    this.route.data.subscribe(data => {
      this.matchdays = data['matchdays'].result;
      this.pagination = data['matchdays'].pagination;
    });
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
