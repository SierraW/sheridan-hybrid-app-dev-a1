import { Component, OnInit } from '@angular/core';
import {CovidDataServiceService} from '../covid-data-service.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss'],
})
export class MessageSenderComponent implements OnInit {

  message: string;

  constructor(private sharedService: CovidDataServiceService) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.sharedService.setMessage(this.message);
  }
}
