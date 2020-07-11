import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-dashboard'
  },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },

  {
    name: 'Master List Management',
    url: '/base',
    icon: 'fa fa-laptop',
    children: [
      {
        name: 'Entity Type Master',
        url: '/master-list-management/entity-type-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'User Type Master',
        url: '/master-list-management/user-type-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Role Master',
        url: '/master-list-management/role-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'State Master',
        url: '/master-list-management/state-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'District Master',
        url: '/master-list-management/district-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'PIN Code Master',
        url: '/master-list-management/pincode-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bank Master',
        url: '/master-list-management/bank-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'AEPS IIN Master - Bank wise',
        url: '/master-list-management/aeps-in-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bank Account Type Master',
        url: '/master-list-management/bank-account-type-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Nature of Business Master',
        url: '/master-list-management/nature-of-business-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Store Category Master',
        url: '/master-list-management/nature-of-business-master',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Marital Status',
        url: '/base/collapses',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Religion Master',
        url: '/base/collapses',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Gender Master',
        url: '/base/collapses',
        icon: 'fa fa-genderless'
      },
      {
        name: 'Education Master',
        url: '/base/collapses',
        icon: 'fa fa-book'
      },
      {
        name: 'User Type (Merchant / Distributor / Aggregator) Category Master (Normal / Bronze / Silver / Gold / Diamond)',
        url: '/base/collapses',
        icon: 'fa fa-users'
      },
      {
        name: 'Subscription Master (Daily / Weekly / Monthly / Quaterly / Half-Yearly / Yearly)',
        url: '/base/collapses',
        icon: 'fa fa-envelope-o'
      },
      {
        name: 'Plan Master (Basic / Premium)',
        url: '/base/collapses',
        icon: 'fa fa-cogs'
      },
      {
        name: 'Services Master (Financial / Non-Financial)',
        url: '/base/collapses',
        icon: 'fa fa-cogs'
      },


    ]
  },
  {
    name: 'API Management',
    // url: '/buttons',
    icon: 'fa fa-rocket'
  },


  {
    name: 'User Management',
    url: '/user-management',
    icon: 'fa fa-user',
    // children: [
    //   {
    //     name: 'Agent Management',
    //     url: '/user-management/agent-management',
    //     icon: 'fa fa-dot-circle-o'
    //   },
    //   {
    //     name: 'Distributor Management',
    //     url: '/user-management/dirstributor-management',
    //     icon: 'fa fa-dot-circle-o'
    //   },
    //   {
    //     name: 'Partner Management',
    //     url: '/user-management/partner-management',
    //     icon: 'fa fa-dot-circle-o'
    //   }
    //]
  },

  {
    name: 'Fund Deposit Management',
    url: '/fund-deposit-management',
    icon: 'fa fa-money'
  },
  {
    name: 'Device Management',
    // url: '/buttons',
    icon: 'fa fa-mobile'
  },

  {
    name: 'Commission Master Management',
    // url: '/buttons',
    icon: 'fa fa-percent',
    children: [
      {
        name: 'Global Settings',
        url: '/commission-master-management/global-settings',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Custom Settings',
        url: '/commission-master-management/custom-settings',
        icon: 'fa fa-dot-circle-o'
      }
    ]
  },
  {
    name: 'Offers Management',
    // url: '/buttons',
    icon: 'fa fa-percent',
    children: [
      {
        name: 'Religion wise Offers',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Area Specific (Pin code/District/State wise) Offers',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Occasion wise Offers (Birthday, Anniversary, Usage wise, AON wise, Festival)',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Gender wise Offers ',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Service wise Offers',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'On the fly Offers which can provide by our field staff to any Merchant/Distributor/Aggregator',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Combination of Offers',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
    ]
  },
  {
    name: 'Notification Management',
    // url: '/buttons',
    icon: 'fa fa-bell'
  },

  {
    name: 'Campaign Manager',
    // url: '/buttons',
    icon: 'fa fa-file-text-o',
    children: [
      {
        name: 'Campaign Processing Engine',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Alert Processing Engine',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Transaction/Message Personalisation',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Email/SMS/OBD Notifications',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Customer Lead Download Engine',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Product Cross Sell Engine',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Campaign Upload Engine',
        // url: '/buttons/buttons',
        icon: 'fa fa-dot-circle-o'
      },
    ]
  },
  {
    name: 'Transaction Summary',
    url: '/transaction-summary',
    icon: 'fa fa-newspaper-o'
  },

  {
    name: 'MIS/Reports',
    url: '/mis-reports',
    icon: 'fa fa-newspaper-o',
    children: [
      {
        name: 'User Type MIS',
        url: '/mis-reports/user-type-wise-mis',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Service Wise MIS',
        url: '/mis-reports/service-wise-mis',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Wallet Wise MIS',
        url: '/mis-reports/wallet-wise-mis',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Reconciliation MIS',
        url: '/mis-reports/reconciliation-wise-mis',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Commission & TDS MIS',
        url: '/mis-reports/user-wise-commission',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Settlement Report',
        url: '/mis-reports/settlement-report',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Notification MIS',
        url: '/mis-reports/notification-mis',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Onboarding MIS',
        url: '/mis-reports/onboarding-mis',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Help & Support',
        url: '/mis-reports/help-and-support',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Hourly Report',
        url: '/mis-reports/hourly-report',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Daily Report',
        url: '/mis-reports/daily-report',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Monthly Report',
        url: '/mis-reports/monthly-report',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Hourly Error Report',
        url: '/mis-reports/hourly-error-report',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Daily Error Report',
        url: '/mis-reports/daily-error-report',
        icon: 'fa fa-dot-circle-o'
      },
    ]
  },

  {
    name: 'Reconciliation Management',
    // url: '/buttons',
    icon: 'fa fa-user'
  },
  {
    name: 'Settlement Management',
    // url: '/buttons',
    icon: 'fa fa-money'
  },

  {
    name: 'Settings Management',
    url: '/settings-management',
    icon: 'fa fa-cog',
    children: [
      {
        name: 'Global Settings',
        url: '/settings-management/global-settings',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Custom Settings',
        url: '/settings-management/custom-settings',
        icon: 'fa fa-dot-circle-o'
      },
    ]
  },

  {
    name: 'Analytics Management',
    // // url: '/buttons',
    icon: 'fa fa-bar-chart',
    children: [
      {
        name: 'Customer Analytics',
        url: '/analytics-management/customer-analytics',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Merchant Analytics',
        url: '/analytics-management/merchant-analytics',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Distributor Analytics',
        url: '/analytics-management/distributor-analytics',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Aggregator Analytics',
        url: '/analytics-management/aggregator-analytics',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Risk Analytics',
        url: '/analytics-management/risk-analytics',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Operational Analytics',
        url: '/analytics-management/operational-analytics',
        icon: 'fa fa-dot-circle-o'
      },
    ]
  },
  {
    name: 'User Access Management',
    // url: '/buttons',
    icon: 'fa fa-universal-access'
  },
  {
    name: 'Service wise / Duration wise / Time wise/ Total Count / Total Amount wise / Period wise',
    // url: '/buttons',
    icon: 'fa fa-clock-o'
  },

  {
    name: 'Bulk Deposit into Users Wallet/Incentive',
    // url: '/pages',
    icon: 'fa fa-university',
    children: [
      {
        name: 'Bulk Deposit into Agents Trade Wallet ',
        url: 'bulk-deposit-into-agents-trade-wallet',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deposit into Agents Incentive Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deposit into Distributors Trade Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deposit into Distributors Incentive Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deposit into Aggregators Trade Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deposit into Aggregators Incentive Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      }
    ]
  },
  {
    name: 'Bulk Deduction from Users Wallet/Incentive',
    url: '/pages',
    icon: 'fa fa-university',
    children: [
      {
        name: 'Bulk Deduction into Agents Trade Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deduction into Agents Incentive Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deduction into Distributors Trade Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deduction into Distributors Incentive Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deduction into Aggregators Trade Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk Deduction into Aggregators Incentive Wallet',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
    ]
  },
  {
    name: 'Bulk On-Boarding [CO-FO process will be not come]',
    url: '/pages',
    icon: 'fa fa-university',
    children: [
      {
        name: 'Bulk On-Boarding [Agent]',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk On-Boarding [Distributor]',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      },
      {
        name: 'Bulk On-Boarding [Aggregator]',
        url: '/notifications/modals',
        icon: 'fa fa-dot-circle-o'
      }
    ]
  },
  {
    name: 'Help Desk / Customer Care Management',
    url: '/pages',
    icon: 'fa fa-question-circle',

  },
  {
    name: 'Website Management',
    url: '/pages',
    icon: 'fa fa-chrome',

  },
  {
    name: 'Invoice Management [ User Type wise / Service wise / Duration wise]',
    url: '/pages',
    icon: 'fa fa-newspaper-o',

  },
];
