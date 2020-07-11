import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { CustomSettingsComponent } from './custom-settings/custom-settings.component';


const routes: Routes = [
 {path:'global-settings',component:GlobalSettingsComponent},
 {path:'custom-settings',component:CustomSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsManagementRoutingModule { }
