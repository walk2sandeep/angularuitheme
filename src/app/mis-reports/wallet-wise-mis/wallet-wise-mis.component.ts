import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  symbol: number;
  depositno:string;
  weight: string;
  depositamount:string;
  status:string;
  remarks:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020', weight:'Master wallet',  depositamount:'1289000' , status:'active', remarks:'none', action:' '},
  {position: 2, name: 'Khane Williamson', symbol: 23625,  depositno:'27/05/2020', weight:'Master wallet',  depositamount:'1289000' , status:'active', remarks:'none', action:' '},
  {position: 3, name: 'David Miller', symbol: 23625,  depositno:'27/05/2020', weight:'Master wallet',  depositamount:'1289000' , status:'active', remarks:'none', action:' '},
  {position: 4, name: 'Sachin', symbol: 23625,  depositno:'27/05/2020', weight:'Master wallet',  depositamount:'1289000' , status:'active', remarks:'none', action:' '},
  {position: 5, name: 'Rohit Sharma', symbol: 23625,  depositno:'27/05/2020', weight:'Master wallet',  depositamount:'1289000' , status:'active', remarks:'none', action:' '},
]; 

@Component({
  selector: 'app-wallet-wise-mis',
  templateUrl: './wallet-wise-mis.component.html',
  styleUrls: ['./wallet-wise-mis.component.css']
})
export class WalletWiseMisComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'symbol', 'depositno', 'weight', 'depositamount', 'status', 'remarks', 'action' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
