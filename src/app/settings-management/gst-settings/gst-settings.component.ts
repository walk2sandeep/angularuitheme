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
  {no: 1, requested_date: '01/06/2020',  txn_id:20200601110254948, previous_value: '18%', updated_value: '10%' , crieteria:'SGST', txn_status:' Active', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'It updatesone',download_proof:''},
  {no: 2, requested_date: '01/06/2020',  txn_id:20200601110133042, previous_value: '10%', updated_value: '23%' , crieteria:'SGST', txn_status:' Pending', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'It updates',download_proof:''},
  {no: 3, requested_date: '01/06/2020',  txn_id:20200526213817133, previous_value: '23%', updated_value: '11%' , crieteria:'IGST', txn_status:' Active', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'check',download_proof:''},
  {no: 4, requested_date: '01/06/2020',  txn_id:20200601110254948, previous_value: '17%', updated_value: '76%' , crieteria:'CGST', txn_status:' Pending', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'check',download_proof:''},
  {no: 5, requested_date: '01/06/2020',  txn_id:20200526213817133, previous_value: '35%', updated_value: '13%' , crieteria:'CGST', txn_status:' Processed', processed_date:'01/06/2020', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Test',download_proof:''},

]; 

@Component({
  selector: 'app-gst-settings',
  templateUrl: './gst-settings.component.html',
  styleUrls: ['./gst-settings.component.css']
})
export class GSTSettingsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['no', 'requested_date','txn_id', 'previous_value', 'updated_value', 'crieteria', 'txn_status','processed_date','updated_by','ip_address','remarks','download_proof' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
