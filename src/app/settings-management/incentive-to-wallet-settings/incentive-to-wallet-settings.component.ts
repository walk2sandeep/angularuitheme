import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  no: number;
  requested_date: string;
  txn_id:number;
  processed_date: string;
  user_type:string;
  crieteria:string;
  amount_slabs:number;
  selltement_period:string;
  selected_day:string;
  previous_value:string
  updated_value:string;
  transaction_status:string;
  updated_by:string;
  ip_address:string;
  remarks:string;
  download_proof:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, requested_date: '01/06/2020',  txn_id:20200529201230787, processed_date: '01/06/2020', user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM', amount_slabs:1-25000, selltement_period:'REALTIME',selected_day:'Monday',previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:'', action:''},
  {no: 2, requested_date: '01/06/2020',  txn_id:20200529201230787, processed_date: '01/06/2020', user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM', amount_slabs:1-25000, selltement_period:'REALTIME',selected_day:'Monday',previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:'', action:''},
  {no: 3, requested_date: '01/06/2020',  txn_id:20200529201230787, processed_date: '01/06/2020', user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM', amount_slabs:1-25000, selltement_period:'REALTIME',selected_day:'Monday',previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:'', action:''},
  {no: 4, requested_date: '01/06/2020',  txn_id:20200529201230787, processed_date: '01/06/2020', user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM', amount_slabs:1-25000, selltement_period:'REALTIME',selected_day:'Monday',previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:'', action:''},
  {no: 5, requested_date: '01/06/2020',  txn_id:20200529201230787, processed_date: '01/06/2020', user_type: 'Aggregator/Partner	' , crieteria:'MINIMUM', amount_slabs:1-25000, selltement_period:'REALTIME',selected_day:'Monday',previous_value:'0',updated_value:'10',transaction_status:'Active', updated_by:'OssAdmin',ip_address:'242:601:911', remarks:'Minimum',download_proof:'', action:''},
]; 


@Component({
  selector: 'app-incentive-to-wallet-settings',
  templateUrl: './incentive-to-wallet-settings.component.html',
  styleUrls: ['./incentive-to-wallet-settings.component.css']
})
export class IncentiveToWalletSettingsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['no', 'requested_date','txn_id', 'processed_date', 'user_type', 'crieteria', 'amount_slabs','selltement_period','selected_day','previous_value','updated_value','transaction_status', 'updated_by','ip_address','remarks','download_proof','action' ];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
