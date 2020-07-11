import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: number;
  service_name:string;
  bank:string;
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
  {position: 1, name: 'John Cena', symbol: 23625,service_name:'AEPS', bank:'ICICI Bank',  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
  {position: 2, name: 'John Cena', symbol: 23625,service_name:'DMT', bank:'YES Bank',  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
  {position: 3, name: 'John Cena', symbol: 23625,service_name:'UPI', bank:'Indian Bank',  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
  {position: 4, name: 'John Cena', symbol: 23625,service_name:'Aadhaar Pay', bank:'Axis Bank',  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
  {position: 5, name: 'John Cena', symbol: 23625,service_name:'Razor Pay', bank:'HDFC Bank',  depositno:'27/05/2020 09:30 AM', weight: 84346,  depositamount:' 890940' , depositdate:'27/05/2020',created_date:'27/05/2020',transaction:'Online', depositmode:'Bank', status:'active', remarks:'none', action:' '},
 
 ]; 

@Component({
  selector: 'app-servic-wise-mis',
  templateUrl: './servic-wise-mis.component.html',
  styleUrls: ['./servic-wise-mis.component.css']
})
export class ServicWiseMisComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'symbol','service_name', 'bank', 'depositno', 'weight', 'depositamount','depositdate','created_date','transaction','depositmode', 'status', 'remarks', 'action' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
