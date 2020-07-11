import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: number;
  depositno:string;
  weight: number;
  depositamount:string;
  depositdate:string;
  created_date:string
  transaction:string;
  depositmode:string;
  status:string;
  remarks:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
  {position: 2, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
  {position: 3, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
  {position: 4, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
  {position: 5, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
]; 

@Component({
  selector: 'app-user-type-wise-mis',
  templateUrl: './user-type-wise-mis.component.html',
  styleUrls: ['./user-type-wise-mis.component.css']
})
export class UserTypeWiseMisComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'symbol', 'depositno', 'weight', 'depositamount','depositdate','created_date','transaction','depositmode', 'status', 'remarks', 'action' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
