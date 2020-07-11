import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AEPSComponent } from './aeps/aeps.component';
// import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {path:'',component:AEPSComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AEPSRoutingModule { }
