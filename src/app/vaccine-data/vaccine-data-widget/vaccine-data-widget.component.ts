import {Component, Input, OnInit} from '@angular/core';
import { CovidDataServiceService } from '../../covid-data-service.service';

@Component({
  selector: 'app-vaccine-data-widget',
  templateUrl: './vaccine-data-widget.component.html',
  styleUrls: ['./vaccine-data-widget.component.scss'],
})
export class VaccineDataWidgetComponent implements OnInit {

  displayData: string[][];
  @Input() selectedDate: string;

  constructor(private sharedService: CovidDataServiceService) { }

  ngOnInit() {
    this.displayData = this.sharedService.getDetailedDosesData(this.selectedDate);
  }

}
