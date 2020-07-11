import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: number;
  depositno:string;
  wallet_type:string;
  depositamount:string;
  depositdate:string;
  created_date:string
  transaction:string;
  status:string;
  remarks:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM',  wallet_type:'Master wallet',  depositamount:' 890940' , depositdate:'1200',created_date:'700',transaction:'Online',  status:'active', remarks:'none', action:' '},
  {position: 2, name: 'Khane Williamson', symbol: 23625,  depositno:'27/05/2020 09:30 AM',  wallet_type:'Reserve wallet',  depositamount:' 890940' , depositdate:'3200',created_date:'300',transaction:'Online',  status:'active', remarks:'none', action:' '},
  {position: 3, name: 'David Warner', symbol: 23625,  depositno:'27/05/2020 09:30 AM',  wallet_type:'Commission wallet',  depositamount:' 890940' , depositdate:'5500',created_date:'500',transaction:'Online',  status:'active', remarks:'none', action:' '},
  {position: 4, name: 'Sachin', symbol: 23625,  depositno:'27/05/2020 09:30 AM',  wallet_type:'Reserve wallet',  depositamount:' 890940' , depositdate:'4270',created_date:'1500',transaction:'Online',  status:'active', remarks:'none', action:' '},
  {position: 5, name: 'Rohit Sharma', symbol: 23625,  depositno:'27/05/2020 09:30 AM',  wallet_type:'Receivable wallet',  depositamount:' 890940' , depositdate:'8700',created_date:'2000',transaction:'Online',  status:'active', remarks:'none', action:' '}, 
]; 

@Component({
  selector: 'app-reconciliation-mis',
  templateUrl: './reconciliation-mis.component.html',
  styleUrls: ['./reconciliation-mis.component.css']
})
export class ReconciliationMisComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'symbol', 'depositno','wallet_type', 'depositamount','depositdate','created_date','transaction', 'status', 'remarks', 'action' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
