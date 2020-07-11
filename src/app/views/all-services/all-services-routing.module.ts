import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllServiceComponent } from './all-service/all-service.component';


const routes: Routes = [
  {path:'all-service',component:AllServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllServicesRoutingModule { }
