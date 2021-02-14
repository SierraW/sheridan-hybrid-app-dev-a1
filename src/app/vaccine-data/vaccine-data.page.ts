import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CovidDataServiceService} from '../covid-data-service.service';

@Component({
  selector: 'app-vaccine-data',
  templateUrl: './vaccine-data.page.html',
  styleUrls: ['./vaccine-data.page.scss'],
})
export class VaccineDataPage implements OnInit {

  selectedDate: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedDate = this.route.snapshot.params.selectedDate;
  }

}
