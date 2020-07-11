import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';


const routes: Routes = [
  {path:'',component:MoneyTransferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyTransferRoutingModule { }
