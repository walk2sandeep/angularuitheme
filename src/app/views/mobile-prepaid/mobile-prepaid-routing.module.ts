import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobilePrepaidComponent } from './mobile-prepaid/mobile-prepaid.component';

const routes: Routes = [
  {path:'',component:MobilePrepaidComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilePrepaidRoutingModule { }
