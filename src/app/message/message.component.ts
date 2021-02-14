import { Component, OnInit } from '@angular/core';
import { CovidDataServiceService } from '../covid-data-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  message: any;
  constructor(private sharedService: CovidDataServiceService) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message);
  }

}
