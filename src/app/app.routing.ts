import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { WalletManagementComponent } from './wallet-management/wallet-management.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'mobile-prepaid',
        loadChildren: () => import('./views/mobile-prepaid/mobile-prepaid.module').then(m => m.MobilePrepaidModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./views/report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'all-service',
        loadChildren: () => import('./views/all-services/all-services.module').then(m => m.AllServicesModule)
      },
      
      {
        path: 'money-transfer',
        loadChildren: () => import('./views/money-transfer/money-transfer.module').then(m => m.MoneyTransferModule)
      },
      {
        path: 'aeps',
        loadChildren: () => import('./views/aeps/aeps.module').then(m => m.AEPSModule)
      },
      {
        path: 'profile-settings',
        loadChildren: () => import('./views/profile-settings/profile-settings.module').then(m => m.ProfileSettingsModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
      },
      {
        path: 'settings-management',
        loadChildren: () => import('./settings-management/settings-management.module').then(m => m.SettingsManagementModule)
      },
      {
        path: 'mis-reports',
        loadChildren: () => import('./mis-reports/mis-reports.module').then(m => m.MisReportsModule)
      },
      {path:'fund-deposit-management',component:WalletManagementComponent},
      
      {path:'transaction-summary',component:TransactionSummaryComponent}
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
