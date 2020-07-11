import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  user_id: number;
  name:string;
  user_type:string;
  state:string;
  district: string;
  transaction_date:string;
  transaction_date1:string;
  transaction_date2:string;
  transaction_id:number;
  previous_wallet_balance:number
  amount_processed:number;
  updated_wallet_balance:number;
  transaction_type:string;
  transaction_remark:string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM',transaction_date1:'27/05/2020 09:30 AM',transaction_date2:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Debit', transaction_remark:'Nothing'},
  {position: 2,user_id:4265, name: 'Sachin', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM',transaction_date1:'27/05/2020 09:30 AM',transaction_date2:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Credit', transaction_remark:'Nothing'},
  {position: 3,user_id:4265, name: 'Khane Williamson', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM',transaction_date1:'27/05/2020 09:30 AM',transaction_date2:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Debit', transaction_remark:'Nothing'},
  {position: 4,user_id:4265, name: 'Rohit Sharma', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM',transaction_date1:'27/05/2020 09:30 AM',transaction_date2:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Credit', transaction_remark:'Nothing'},
  {position: 5,user_id:4265, name: 'David Warner', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM',transaction_date1:'27/05/2020 09:30 AM',transaction_date2:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Debit', transaction_remark:'Nothing'},
 ]; 

@Component({
  selector: 'app-incentive-to-wallet',
  templateUrl: './incentive-to-wallet.component.html',
  styleUrls: ['./incentive-to-wallet.component.css']
})
export class IncentiveToWalletComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position','user_id', 'name', 'user_type','state', 'district', 'transaction_id', 'transaction_date','transaction_date1','transaction_date2', 'previous_wallet_balance','amount_processed','updated_wallet_balance','transaction_type', 'transaction_remark'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
