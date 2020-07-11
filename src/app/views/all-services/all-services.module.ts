import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllServicesRoutingModule } from './all-services-routing.module';
import { AllServiceComponent } from './all-service/all-service.component';


@NgModule({
  declarations: [AllServiceComponent],
  imports: [
    CommonModule,
    AllServicesRoutingModule
  ]
})
export class AllServicesModule { }
