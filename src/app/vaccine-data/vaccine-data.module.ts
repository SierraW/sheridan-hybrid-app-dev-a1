import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccineDataPageRoutingModule } from './vaccine-data-routing.module';

import { VaccineDataPage } from './vaccine-data.page';

import { VaccineDataWidgetComponent } from './vaccine-data-widget/vaccine-data-widget.component';

import { StatusOfCasesComponent } from '../status-of-cases/status-of-cases.component';
import {MessageSenderComponent} from '../message-sender/message-sender.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccineDataPageRoutingModule
  ],
  declarations: [VaccineDataPage, VaccineDataWidgetComponent, StatusOfCasesComponent, MessageSenderComponent]
})
export class VaccineDataPageModule {}
