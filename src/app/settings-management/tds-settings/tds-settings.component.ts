import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  no: number;
  requested_date: string;
  txn_id:number;
  previous_value: string;
  updated_value:string;
  crieteria:string;
  txn_status:string
  processed_date:string;
  updated_by:string;
  ip_address:string;
  remarks:string;
  download_proof:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, requested_date: '01/06/2020',  txn_id:20200526213911288, previous_value: '5%', updated_value: '10%' , crieteria:'With Pancard', txn_status:' Active', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'None',download_proof:''},
  {no: 2, requested_date: '01/06/2020',  txn_id:20200423153237169, previous_value: '15%', updated_value: '5%' , crieteria:'With Pancard', txn_status:' Pending', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'None',download_proof:''},
  {no: 3, requested_date: '01/06/2020',  txn_id:20200526213911288, previous_value: '5%', updated_value: '10%' , crieteria:'With Pancard', txn_status:' Active', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'None',download_proof:''},
  {no: 4, requested_date: '01/06/2020',  txn_id:20200423153237169, previous_value: '15%', updated_value: '5%' , crieteria:'With Pancard', txn_status:' Pending', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'None',download_proof:''},
  {no: 5, requested_date: '01/06/2020',  txn_id:20200526213911288, previous_value: '5%', updated_value: '10%' , crieteria:'With Pancard', txn_status:' Active', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'None',download_proof:''},

]; 

@Component({
  selector: 'app-tds-settings',
  templateUrl: './tds-settings.component.html',
  styleUrls: ['./tds-settings.component.css']
})
export class TdsSettingsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['no', 'requested_date','txn_id', 'previous_value', 'updated_value', 'crieteria', 'txn_status','processed_date','updated_by','ip_address','remarks','download_proof' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
