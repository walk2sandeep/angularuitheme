import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyTransferRoutingModule } from './money-transfer-routing.module';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';


@NgModule({
  declarations: [MoneyTransferComponent],
  imports: [
    CommonModule,
    MoneyTransferRoutingModule
  ]
})
export class MoneyTransferModule { }
