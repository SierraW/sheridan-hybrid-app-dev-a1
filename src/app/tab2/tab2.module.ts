import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { StatusOfCasesComponent } from '../status-of-cases/status-of-cases.component';
import { MessageComponent } from '../message/message.component';
import { ListRecordsComponent } from './list-records/list-records.component';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import {DataReferenceComponent} from '../data-reference/data-reference.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, StatusOfCasesComponent, MessageComponent, ListRecordsComponent, DataReferenceComponent]
})
export class Tab2PageModule {}
