import { Component, OnInit } from '@angular/core';
import {CovidDataServiceService} from '../../covid-data-service.service';

@Component({
  selector: 'app-cdupdates',
  templateUrl: './cdupdates.component.html',
  styleUrls: ['./cdupdates.component.scss'],
})
export class CdupdatesComponent implements OnInit {

  keyUpdatesData: object;

  constructor(private dataService: CovidDataServiceService) {  }

  ngOnInit() {
    this.keyUpdatesData = this.dataService.getKeyUpdates();
  }

}
