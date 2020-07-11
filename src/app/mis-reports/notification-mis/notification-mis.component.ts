import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  name: string;
  symbol: number;
  weight: string;
  depositno:string;
  noti_type:string;
  sms_count:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Cena', symbol: 23625,  weight:'27/05/2020 09:30 AM',  depositno:'AEPS' , noti_type:'SMS', sms_count:23,},
  {position: 2, name: 'John Cena', symbol: 23625,  weight:'27/05/2020 09:30 AM',  depositno:'AEPS' , noti_type:'SMS', sms_count:23,},
  {position: 3, name: 'John Cena', symbol: 23625,  weight:'27/05/2020 09:30 AM',  depositno:'AEPS' , noti_type:'SMS', sms_count:23,},
  {position: 4, name: 'John Cena', symbol: 23625,  weight:'27/05/2020 09:30 AM',  depositno:'AEPS' , noti_type:'SMS', sms_count:23,},
  {position: 5, name: 'John Cena', symbol: 23625,  weight:'27/05/2020 09:30 AM',  depositno:'AEPS' , noti_type:'SMS', sms_count:23,},
]; 

@Component({
  selector: 'app-notification-mis',
  templateUrl: './notification-mis.component.html',
  styleUrls: ['./notification-mis.component.css']
})
export class NotificationMisComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'symbol', 'weight', 'depositno', 'noti_type', 'sms_count',];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
