import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsManagementRoutingModule } from './settings-management-routing.module';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { CustomSettingsComponent } from './custom-settings/custom-settings.component';
import { GSTSettingsComponent } from './gst-settings/gst-settings.component';


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
import { TdsSettingsComponent } from './tds-settings/tds-settings.component';
import { IncentiveToWalletSettingsComponent } from './incentive-to-wallet-settings/incentive-to-wallet-settings.component';
import { IncentiveToBankSettingsComponent } from './incentive-to-bank-settings/incentive-to-bank-settings.component';
import { WalletToBankComponent } from './wallet-to-bank/wallet-to-bank.component';
import { MarkupSettingsComponent } from './markup-settings/markup-settings.component';


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
  declarations: [GlobalSettingsComponent, CustomSettingsComponent, GSTSettingsComponent, TdsSettingsComponent, IncentiveToWalletSettingsComponent, IncentiveToBankSettingsComponent, WalletToBankComponent, MarkupSettingsComponent],
  imports: [
    CommonModule,
    SettingsManagementRoutingModule,
    ...mm,
  ],
  exports: [
    ...mm
  ]
})
export class SettingsManagementModule { }
