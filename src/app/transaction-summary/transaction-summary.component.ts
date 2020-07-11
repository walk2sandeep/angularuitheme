import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  no: number;
  agent_id: number;
  transaction_date:string;
  transaction_id: number;
  ref_no:string;
  amount_processed:number;
  category:string
  tansaction_status:string;
  transaction_remarks:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, agent_id: 12345,  transaction_date:'31/05/2020 & 08:15PM', transaction_id: 74367, ref_no: 'EFA34TS67' , amount_processed:182738000, category:'Bank ', tansaction_status:'Approved', transaction_remarks:'none'},
  {no: 2, agent_id: 12345,  transaction_date:'31/05/2020 & 08:15PM', transaction_id: 74367, ref_no: 'EFA34TS67' , amount_processed:182738000, category:'Bank ', tansaction_status:'Approved', transaction_remarks:'none'},
  {no: 3, agent_id: 12345,  transaction_date:'31/05/2020 & 08:15PM', transaction_id: 74367, ref_no: 'EFA34TS67' , amount_processed:182738000, category:'Bank ', tansaction_status:'Approved', transaction_remarks:'none'},
  {no: 4, agent_id: 12345,  transaction_date:'31/05/2020 & 08:15PM', transaction_id: 74367, ref_no: 'EFA34TS67' , amount_processed:182738000, category:'Bank ', tansaction_status:'Approved', transaction_remarks:'none'},
  {no: 5, agent_id: 12345,  transaction_date:'31/05/2020 & 08:15PM', transaction_id: 74367, ref_no: 'EFA34TS67' , amount_processed:182738000, category:'Bank ', tansaction_status:'Approved', transaction_remarks:'none'},

]; 

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['no', 'agent_id','transaction_date', 'transaction_id', 'ref_no', 'amount_processed', 'category','tansaction_status','transaction_remarks' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
