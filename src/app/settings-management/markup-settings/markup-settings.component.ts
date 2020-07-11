import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  no: number;
  requested_date: string;
  txn_id:number;
  user_type:string;
  crieteria:string;
  amount_slabs:number;
  previous_value:string
  updated_value:string;
  transaction_status:string;
  updated_by:string;
  ip_address:string;
  remarks:string;
  download_proof:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, requested_date: '01/06/2020',  txn_id:20200529201230787, user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM', amount_slabs:1-25000,previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:''},
  {no: 2, requested_date: '01/06/2020',  txn_id:20200529201230787, user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM', amount_slabs:1-25000,previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:''},
  {no: 3, requested_date: '01/06/2020',  txn_id:20200529201230787, user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM',amount_slabs:1-25000,previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:''},
  {no: 4, requested_date: '01/06/2020',  txn_id:20200529201230787, user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM', amount_slabs:1-25000,previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:''},
  {no: 5, requested_date: '01/06/2020',  txn_id:20200529201230787, user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM',amount_slabs:1-25000,previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:''},

]; 

@Component({
  selector: 'app-markup-settings',
  templateUrl: './markup-settings.component.html',
  styleUrls: ['./markup-settings.component.css']
})
export class MarkupSettingsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['no', 'requested_date','txn_id', 'user_type', 'crieteria', 'amount_slabs','previous_value','updated_value','transaction_status', 'updated_by','ip_address','remarks','download_proof'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
