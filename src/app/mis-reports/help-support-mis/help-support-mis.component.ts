import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
   position: number;
   user:string;
   user_id: number;
   service:string;
   category: string;
   status:string;
   user_message:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, user: 'Agent',  user_id:17, service: 'AEPS',  category:'Network Failure' , status:'Active', user_message:'Network Failure'},
  {position: 2, user: 'Distributor',  user_id:17, service: 'AEPS',  category:'System Failure' , status:'Active', user_message:'System Failure'},
  {position: 3, user: 'Aggregator',  user_id:17, service: 'AEPS',  category:'Application Error' , status:'Active', user_message:'Application Error'},
  {position: 4, user: 'Agent',  user_id:17, service: 'AEPS',  category:'Network Failure' , status:'Active', user_message:'Network Failure '},
  {position: 5, user: 'Aggregator',  user_id:17, service: 'AEPS',  category:'Network Failure' , status:'Active', user_message:'Network Failure'},

]; 

@Component({
  selector: 'app-help-support-mis',
  templateUrl: './help-support-mis.component.html',
  styleUrls: ['./help-support-mis.component.css']
})
export class HelpSupportMisComponent implements OnInit {

  constructor() { }
  
  displayedColumns: string[] = ['position', 'user', 'user_id', 'service', 'category','status', 'user_message' ];
  dataSource = ELEMENT_DATA;
  
  ngOnInit(): void {
  }

}
