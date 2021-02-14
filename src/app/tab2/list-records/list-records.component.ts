import { Component, OnInit } from '@angular/core';
import {CovidDataServiceService} from '../../covid-data-service.service';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.scss'],
})
export class ListRecordsComponent implements OnInit {

  summaryDateArr: object[];

  constructor(private dataService: CovidDataServiceService) { }

  ngOnInit() {
    this.summaryDateArr = this.dataService.getSummaryDosesDateList();
  }

}
