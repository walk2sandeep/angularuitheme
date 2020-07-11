import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentManagementComponent } from './agent-management/agent-management.component';
import { DistributorManagementComponent } from './distributor-management/distributor-management.component';
import { PartnerManagementComponent } from './partner-management/partner-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:'agent-management',component:AgentManagementComponent},
  {path:'dirstributor-management',component:DistributorManagementComponent},
  {path:'partner-management',component:PartnerManagementComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'',component:UserManagementComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
