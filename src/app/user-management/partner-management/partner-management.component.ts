import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  no: number;
  projecttype: string;
  projectid: number;
  agentid: number;
  agentname:string;
  mobno: string;
  email:string;
  deviceid:number;
  createddate:string
  firstlogin:string;
  lastlogin:string;
  walletbal:number;
  incentivebal:number;
  reservedebal:number;
  action:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, projecttype: 'Oasys Core',projectid:577565, agentid: 12345,  agentname:'The Undertaker', mobno: '+1 1200 435 567',  email: 'undertaker@gmail.com' , deviceid:8738, createddate:'27/05/2020', firstlogin:'27/05/2020', lastlogin:'27/05/2020', walletbal:1670000, incentivebal:13750000,reservedebal:1234000, action:' '},
  {no: 2, projecttype: 'Oasys Pay',projectid:577565, agentid: 23625,  agentname:'Khane', mobno: '+1 1200 435 567',  email:'khane@gmail.com' , deviceid:8738, createddate:'27/05/2020', firstlogin:'27/05/2020', lastlogin:'27/05/2020', walletbal:1670000, incentivebal:13750000,reservedebal:1234000,  action:' '},
  {no: 3, projecttype: 'Oasys Pay',projectid:577565, agentid: 34567,  agentname:'Donalt', mobno: '+1 1200 435 567',  email: 'donalt@gmail.com' , deviceid:8738, createddate:'27/05/2020',firstlogin:'27/05/2020', lastlogin:'27/05/2020', walletbal:1670000, incentivebal:13750000,reservedebal:1234000, action:' '},
  {no: 4, projecttype: 'Oasys Core',projectid:577565, agentid: 12345,  agentname:'The Undertaker', mobno: '+1 1200 435 567',  email: 'undertaker@gmail.com' , deviceid:8738, createddate:'27/05/2020', firstlogin:'27/05/2020', lastlogin:'27/05/2020', walletbal:1670000, incentivebal:13750000,reservedebal:1234000, action:' '},
  {no: 5, projecttype: 'Oasys Pay',projectid:577565, agentid: 23625,  agentname:'Khane', mobno: '+1 1200 435 567',  email:'khane@gmail.com' , deviceid:8738, createddate:'27/05/2020', firstlogin:'27/05/2020', lastlogin:'27/05/2020', walletbal:1670000, incentivebal:13750000,reservedebal:1234000,  action:' '},
  {no: 6, projecttype: 'Oasys Pay',projectid:577565, agentid: 34567,  agentname:'Donalt', mobno: '+1 1200 435 567',  email: 'donalt@gmail.com' , deviceid:8738, createddate:'27/05/2020',firstlogin:'27/05/2020', lastlogin:'27/05/2020', walletbal:1670000, incentivebal:13750000,reservedebal:1234000, action:' '},
]; 


@Component({
  selector: 'app-partner-management',
  templateUrl: './partner-management.component.html',
  styleUrls: ['./partner-management.component.css']
})
export class PartnerManagementComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['no', 'projecttype','projectid', 'agentid', 'agentname', 'mobno', 'email','deviceid','createddate','firstlogin','lastlogin','walletbal','incentivebal','reservedebal', 'action' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
