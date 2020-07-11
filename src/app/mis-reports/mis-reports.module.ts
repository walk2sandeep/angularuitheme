import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisReportsRoutingModule } from './mis-reports-routing.module';
import { MisReportsComponent } from './mis-reports/mis-reports.component';
import { UserTypeWiseMisComponent } from './user-type-wise-mis/user-type-wise-mis.component';


import {MatNativeDateModule } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { ServicWiseMisComponent } from './servic-wise-mis/servic-wise-mis.component';
import { WalletWiseMisComponent } from './wallet-wise-mis/wallet-wise-mis.component';
import { ReconciliationMisComponent } from './reconciliation-mis/reconciliation-mis.component';
import { KpiReportComponent } from './kpi-report/kpi-report.component';
import { UserWiseCommissionComponent } from './user-wise-commission/user-wise-commission.component';
import { SettlementReportComponent } from './settlement-report/settlement-report.component';
import { NotificationMisComponent } from './notification-mis/notification-mis.component';
import { OnboardingMisComponent } from './onboarding-mis/onboarding-mis.component';
import { HelpSupportMisComponent } from './help-support-mis/help-support-mis.component';
import { WalletBalanceHistoryComponent } from './user-wise-mis-types/wallet-balance-history/wallet-balance-history.component';
import { WalletRechargeHistoryComponent } from './user-wise-mis-types/wallet-recharge-history/wallet-recharge-history.component';
import { TransactionHistoryComponent } from './user-wise-mis-types/transaction-history/transaction-history.component';
import { IncentiveAndTdsHistoryComponent } from './user-wise-mis-types/incentive-and-tds-history/incentive-and-tds-history.component';
import { ReservedHistoryComponent } from './user-wise-mis-types/reserved-history/reserved-history.component';
import { ReceivableHistoryComponent } from './user-wise-mis-types/receivable-history/receivable-history.component';
import { IncentiveToWalletComponent } from './user-wise-mis-types/incentive-to-wallet/incentive-to-wallet.component';
import { IncentiveToBankComponent } from './user-wise-mis-types/incentive-to-bank/incentive-to-bank.component';
import { WalletToBankComponent } from './user-wise-mis-types/wallet-to-bank/wallet-to-bank.component';
import { RefundTransactionComponent } from './user-wise-mis-types/refund-transaction/refund-transaction.component';


const mm = [
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [MisReportsComponent, UserTypeWiseMisComponent, ServicWiseMisComponent, WalletWiseMisComponent, ReconciliationMisComponent, KpiReportComponent, UserWiseCommissionComponent, SettlementReportComponent, NotificationMisComponent, OnboardingMisComponent, HelpSupportMisComponent, WalletBalanceHistoryComponent, WalletRechargeHistoryComponent, TransactionHistoryComponent, IncentiveAndTdsHistoryComponent, ReservedHistoryComponent, ReceivableHistoryComponent, IncentiveToWalletComponent, IncentiveToBankComponent, WalletToBankComponent, RefundTransactionComponent,],
  imports: [
    CommonModule,
    MisReportsRoutingModule,
    ...mm
  ],
  exports: [
    ...mm
  ]
})
export class MisReportsModule { }
