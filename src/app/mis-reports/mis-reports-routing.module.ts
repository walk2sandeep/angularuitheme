import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTypeWiseMisComponent } from './user-type-wise-mis/user-type-wise-mis.component';
import { ServicWiseMisComponent } from './servic-wise-mis/servic-wise-mis.component';
import { WalletWiseMisComponent } from './wallet-wise-mis/wallet-wise-mis.component';
import { ReconciliationMisComponent } from './reconciliation-mis/reconciliation-mis.component';
import { KpiReportComponent } from './kpi-report/kpi-report.component';
import { UserWiseCommissionComponent } from './user-wise-commission/user-wise-commission.component';
import { SettlementReportComponent } from './settlement-report/settlement-report.component';
import { NotificationMisComponent } from './notification-mis/notification-mis.component';
import { OnboardingMisComponent } from './onboarding-mis/onboarding-mis.component';
import { HelpSupportMisComponent } from './help-support-mis/help-support-mis.component';

const routes: Routes = [
  {path:'user-type-wise-mis',component:UserTypeWiseMisComponent},
  {path:'service-wise-mis',component:ServicWiseMisComponent},
  {path:'wallet-wise-mis',component:WalletWiseMisComponent},
  {path:'reconciliation-wise-mis',component:ReconciliationMisComponent},
  {path:'kpi-report',component:KpiReportComponent},
  {path:'user-wise-commission',component:UserWiseCommissionComponent},
  {path:'settlement-report',component:SettlementReportComponent},
  {path:'notification-mis',component:NotificationMisComponent},
  {path:'onboarding-mis',component:OnboardingMisComponent},
  {path:'help-and-support',component:HelpSupportMisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisReportsRoutingModule { }
