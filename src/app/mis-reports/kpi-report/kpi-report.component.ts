import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
   name: string;
   position: number;
   symbol: number;
   depositno:string;
   oss_count: number;
   oss_amount:string;
   bank:string;
   bank_count: number;
   bank_amount:string;
   settlement_amount:string;
   status:string;
   remarks:string;
   action:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', oss_count: 1200,  oss_amount:'120000', bank:'YES Bank', bank_count:800, bank_amount:'20000',settlement_amount:'320000', status:'active', remarks:'none', action:' '},
  {position: 2, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', oss_count: 1200,  oss_amount:'120000', bank:'YES Bank', bank_count:800, bank_amount:'20000',settlement_amount:'320000', status:'active', remarks:'none', action:' '},
  {position: 3, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', oss_count: 1200,  oss_amount:'120000', bank:'YES Bank', bank_count:800, bank_amount:'20000',settlement_amount:'320000', status:'active', remarks:'none', action:' '},
  {position: 4, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', oss_count: 1200,  oss_amount:'120000', bank:'YES Bank', bank_count:800, bank_amount:'20000',settlement_amount:'320000', status:'active', remarks:'none', action:' '},
  {position: 5, name: 'John Cena', symbol: 23625,  depositno:'27/05/2020 09:30 AM', oss_count: 1200,  oss_amount:'120000', bank:'YES Bank', bank_count:800, bank_amount:'20000',settlement_amount:'320000', status:'active', remarks:'none', action:' '},
]; 

@Component({
  selector: 'app-kpi-report',
  templateUrl: './kpi-report.component.html',
  styleUrls: ['./kpi-report.component.css']
})
export class KpiReportComponent implements OnInit {

  constructor() { }
  
  displayedColumns: string[] = ['position', 'name', 'symbol', 'depositno', 'oss_count', 'oss_amount', 'bank','bank_count','bank_amount','settlement_amount', 'status', 'remarks', 'action' ];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
