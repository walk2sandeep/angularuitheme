import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettlementManagementRoutingModule } from './settlement-management-routing.module';
import { SettlementManagementComponent } from './settlement-management/settlement-management.component';
import { UpdateSettlementComponent } from './update-settlement/update-settlement.component';


@NgModule({
  declarations: [SettlementManagementComponent, UpdateSettlementComponent],
  imports: [
    CommonModule,
    SettlementManagementRoutingModule
  ]
})
export class SettlementManagementModule { }
