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
  service_category:string;
  partner_transaction_id:number;
  amount_processed:number;
  transaction_status:string;
  transaction_type:string;
  transaction_remark:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,user_id:4265, name: 'John Cena', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  service_category:'IMPS',partner_transaction_id:6598, amount_processed:672000,transaction_status:'Failed', transaction_type:'Debit', transaction_remark:'Nothing'},
  {position: 2,user_id:4265, name: 'Sachin', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,   service_category:'IMPS',partner_transaction_id:6598, amount_processed:672000,transaction_status:'Success ', transaction_type:'Credit', transaction_remark:'Nothing'},
  {position: 3,user_id:4265, name: 'Khane Williamson', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  service_category:'IMPS',partner_transaction_id:6598, amount_processed:672000,transaction_status:'Failed', transaction_type:'Debit', transaction_remark:'Nothing'},
  {position: 4,user_id:4265, name: 'Rohit Sharma', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  service_category:'IMPS',partner_transaction_id:6598, amount_processed:672000,transaction_status:' In-progress ', transaction_type:'Credit', transaction_remark:'Nothing'},
  {position: 5,user_id:4265, name: 'David Warner', user_type:'Agent',state:'Tamil Nadu', district:'Chennai', transaction_date:'27/05/2020 09:30 AM', transaction_id: 84346,  service_category:'IMPS',partner_transaction_id:6598, amount_processed:672000,transaction_status:' In-progress', transaction_type:'Debit', transaction_remark:'Nothing'},
 ]; 

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position','user_id', 'name', 'user_type','state', 'district', 'transaction_date', 'transaction_id', 'service_category','partner_transaction_id','amount_processed','transaction_status','transaction_type', 'transaction_remark',];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
