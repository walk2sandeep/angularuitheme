import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  symbol: number;
  depositno:string;
  service: string;
  transaction_count:string;
  tds_amount:string;
  status:string;
  remarks:string;
  action:string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
 {position: 1, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', service:'AEPS',  transaction_count:'1000', tds_amount:'120000',  status:'active', remarks:'none', action:' '},
 {position: 2, name: 'Khane Williamson', symbol: 23625,  depositno:'27/05/2020 09:30 AM', service:'AEPS',  transaction_count:'1000', tds_amount:'120000',  status:'active', remarks:'none', action:' '},
 {position: 3, name: 'David Warner', symbol: 23625,  depositno:'27/05/2020 09:30 AM', service:'AEPS',  transaction_count:'1000', tds_amount:'120000',  status:'active', remarks:'none', action:' '},
 {position: 4, name: 'Rohit Sharma', symbol: 23625,  depositno:'27/05/2020 09:30 AM', service:'AEPS',  transaction_count:'1000', tds_amount:'120000',  status:'active', remarks:'none', action:' '},
 {position: 5, name: 'Sachin', symbol: 23625,  depositno:'27/05/2020 09:30 AM', service:'AEPS',  transaction_count:'1000', tds_amount:'120000',  status:'active', remarks:'none', action:' '},
]; 

@Component({
  selector: 'app-user-wise-commission',
  templateUrl: './user-wise-commission.component.html',
  styleUrls: ['./user-wise-commission.component.css']
})
export class UserWiseCommissionComponent implements OnInit {

  constructor() { }
  
  displayedColumns: string[] = ['position', 'name', 'symbol', 'depositno', 'service', 'transaction_count', 'tds_amount', 'status', 'remarks', 'action' ];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
