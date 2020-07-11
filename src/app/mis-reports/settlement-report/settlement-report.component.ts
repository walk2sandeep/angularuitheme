import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  symbol: number;
  depositno:string;
  weight: string;
  depositamount:string;
  transferamount:string;
  walletamount:string;
  remarks:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 'Wallet to Bank',  depositamount:'120000' , transferamount:'70000',walletamount:'480000', remarks:'none', action:' '},
  {position: 2, name: 'Khane Williamson', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 'Wallet to Bank',  depositamount:'120000' , transferamount:'70000',walletamount:'480000', remarks:'none', action:' '},
  {position: 3, name: 'David Warner', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 'Wallet to Bank',  depositamount:'120000' , transferamount:'70000',walletamount:'480000', remarks:'none', action:' '},
  {position: 4, name: 'Sachin', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 'Wallet to Bank',  depositamount:'120000' , transferamount:'70000',walletamount:'480000', remarks:'none', action:' '},
  {position: 5, name: 'Rohit Sharma', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 'Wallet to Bank',  depositamount:'120000' , transferamount:'70000',walletamount:'480000', remarks:'none', action:' '},
]; 

@Component({
  selector: 'app-settlement-report',
  templateUrl: './settlement-report.component.html',
  styleUrls: ['./settlement-report.component.css']
})
export class SettlementReportComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'symbol', 'depositno', 'weight', 'depositamount','transferamount','walletamount', 'remarks', 'action' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
