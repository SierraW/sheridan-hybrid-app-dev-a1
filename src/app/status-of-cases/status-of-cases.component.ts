import { Component, OnInit } from '@angular/core';
import { CovidDataServiceService } from '../covid-data-service.service';

@Component({
  selector: 'app-status-of-cases',
  templateUrl: './status-of-cases.component.html',
  styleUrls: ['./status-of-cases.component.scss'],
})
export class StatusOfCasesComponent implements OnInit {

  onCases: object;

  constructor(private dataService: CovidDataServiceService) { }

  ngOnInit() {
    this.onCases = this.dataService.getONCases();
  }

}
