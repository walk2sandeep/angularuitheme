import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  user_id: number;
  name:string;
  user_type:string;
  state:string;
  district: string;
  transaction_date:string;
  wallet_date:string;
  transaction_id:number;
  deposit_type:string;
  deposit_mode:string;
  previous_wallet_balance:number
  amount_processed:number;
  updated_wallet_balance:number;
  approved_id:number;
  approved_name:string;
  ip_address:string;
  transaction_status:string;
  transaction_remark:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', wallet_date:'27/05/2020 09:30 AM', transaction_id: 84346, deposit_type:'Offline',deposit_mode:'IMPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, approved_id:24654, approved_name:'David Warner',ip_address:'180:140:1120', transaction_status:'Failed', transaction_remark:'Nothing'},
  {position: 2, user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', wallet_date:'27/05/2020 09:30 AM', transaction_id: 84346, deposit_type:'Offline',deposit_mode:'IMPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, approved_id:24654, approved_name:'David Warner',ip_address:'180:140:1120', transaction_status:'Failed', transaction_remark:'Nothing'},
  {position: 3, user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', wallet_date:'27/05/2020 09:30 AM', transaction_id: 84346, deposit_type:'Offline',deposit_mode:'IMPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, approved_id:24654, approved_name:'David Warner',ip_address:'180:140:1120', transaction_status:'Failed', transaction_remark:'Nothing'},
  {position: 4, user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', wallet_date:'27/05/2020 09:30 AM', transaction_id: 84346, deposit_type:'Offline',deposit_mode:'IMPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, approved_id:24654, approved_name:'David Warner',ip_address:'180:140:1120', transaction_status:'Failed', transaction_remark:'Nothing'},
  {position: 5, user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', wallet_date:'27/05/2020 09:30 AM', transaction_id: 84346, deposit_type:'Offline',deposit_mode:'IMPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, approved_id:24654, approved_name:'David Warner',ip_address:'180:140:1120', transaction_status:'Failed', transaction_remark:'Nothing'},
 ]; 

@Component({
  selector: 'app-wallet-recharge-history',
  templateUrl: './wallet-recharge-history.component.html',
  styleUrls: ['./wallet-recharge-history.component.css']
})
export class WalletRechargeHistoryComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position','user_id', 'name', 'user_type','state', 'district', 'transaction_date','wallet_date', 'transaction_id','deposit_type','deposit_mode', 'previous_wallet_balance','amount_processed','updated_wallet_balance','approved_id','approved_name','ip_address','transaction_status', 'transaction_remark'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
