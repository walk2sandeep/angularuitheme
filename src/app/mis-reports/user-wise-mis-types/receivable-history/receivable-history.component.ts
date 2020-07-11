import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  user_id: number;
  name:string;
  user_type:string;
  state:string;
  district: string;
  transaction_date:string;
  transaction_id:number;
  transaction_status:string;
  previous_wallet_balance:number
  amount_processed:number;
  updated_wallet_balance:number;
  transaction_type:string;
  transaction_remark:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,transaction_status:'AEPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Debit', transaction_remark:'Nothing'},
  {position: 2,user_id:4265, name: 'Sachin', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346, transaction_status:'AEPS', previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Credit', transaction_remark:'Nothing'},
  {position: 3,user_id:4265, name: 'Khane Williamson', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,transaction_status:'AEPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Debit', transaction_remark:'Nothing'},
  {position: 4,user_id:4265, name: 'Rohit Sharma', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,transaction_status:'AEPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Credit', transaction_remark:'Nothing'},
  {position: 5,user_id:4265, name: 'David Warner', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,transaction_status:'AEPS',  previous_wallet_balance:1230000, amount_processed:672000,updated_wallet_balance:320000, transaction_type:'Debit', transaction_remark:'Nothing'},
 ]; 

@Component({
  selector: 'app-receivable-history',
  templateUrl: './receivable-history.component.html',
  styleUrls: ['./receivable-history.component.css']
})
export class ReceivableHistoryComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position','user_id', 'name', 'user_type','state', 'district', 'transaction_date', 'transaction_id','transaction_status', 'previous_wallet_balance','amount_processed','updated_wallet_balance','transaction_type', 'transaction_remark'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
