import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccineDataPage } from './vaccine-data.page';

const routes: Routes = [
  {
    path: '',
    component: VaccineDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccineDataPageRoutingModule {}
