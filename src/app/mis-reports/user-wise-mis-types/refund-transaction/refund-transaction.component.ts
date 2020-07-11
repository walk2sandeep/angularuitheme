import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  user_id: number;
  name:string;
  user_type:string;
  state:string;
  district: string;
  transaction_id:number;
  transaction_date:string;
  previous_wallet_balance:number;
  transaction_type:string;
  transaction_remark:string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000,  transaction_type:'In-Progress', transaction_remark:'AEPS'},
  {position: 2,user_id:4265, name: 'Sachin', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000,  transaction_type:'In-Progress', transaction_remark:'DMT'},
  {position: 3,user_id:4265, name: 'Khane Williamson', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000,  transaction_type:'In-Progress', transaction_remark:'Aadhaar Pay'},
  {position: 4,user_id:4265, name: 'Rohit Sharma', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000,  transaction_type:'In-Progress', transaction_remark:'Razor Pay'},
  {position: 5,user_id:4265, name: 'David Warner', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  previous_wallet_balance:1230000,  transaction_type:'In-Progress', transaction_remark:'AEPS'},
 ]; 

@Component({
  selector: 'app-refund-transaction',
  templateUrl: './refund-transaction.component.html',
  styleUrls: ['./refund-transaction.component.css']
})
export class RefundTransactionComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position','user_id', 'name', 'user_type','state', 'district', 'transaction_id', 'transaction_date','previous_wallet_balance','transaction_type', 'transaction_remark'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
