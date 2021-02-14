import { Component, OnInit } from '@angular/core';
import {CovidDataServiceService} from '../covid-data-service.service';

@Component({
  selector: 'app-data-reference',
  templateUrl: './data-reference.component.html',
  styleUrls: ['./data-reference.component.scss'],
})
export class DataReferenceComponent implements OnInit {

  message: any;
  constructor(private sharedService: CovidDataServiceService) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.sharedService.setMessage(this.message);
  }
}
