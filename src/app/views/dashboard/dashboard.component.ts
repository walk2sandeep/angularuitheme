import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40,77,45,23], label: 'Traffic & Sales' }
  ];

  public chartLabels: Array<any> = ['NAM', 'NBM', 'NGM', 'BAM', 'BBM', 'BGM','CAM', 'CBM', 'CGM'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(76, 202, 187,0.1)',
        'rgba(76, 202, 187, 0.3)',
        'rgba(76, 202, 187, 0.5)',
        'rgba(250, 123, 141, 0.1)',
        'rgba(250, 123, 141, 0.3)',
        'rgba(250, 123, 141, 0.5)',
        'rgba(86, 170, 237, 0.1)',
        'rgba(86, 170, 237, 0.3)',
        'rgba(86, 170, 237, 0.5)',
      ],
      borderColor: [
        'rgb(76, 202, 187)',
        'rgb(76, 202, 187)',
        'rgb(76, 202, 187)',
        'rgba(250, 123, 141,0.5)',
        'rgba(250, 123, 141,0.7)',
        'rgb(250, 123, 141)',
        'rgb(86, 170, 237)',
        'rgb(86, 170, 237)',
        'rgb(86, 170, 237)',
      ],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  public officerchartType: string = 'horizontalBar';

  public officerchartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40,77,45,23], label: 'Traffic & Sales' }
  ];

  public officerchartLabels: Array<any> = ['SOC', 'SOA', 'COC', 'COA', 'FOC', 'FOA'];

  public officerChart: Array<any> = [
    {
      backgroundColor: [
        'rgba(156, 135, 182,0.1)',
        'rgba(156, 135, 182,0.3)',
        'rgba(248, 190, 93, 0.1)',
        'rgba(248, 190, 93, 0.3)',
        'rgba(135, 219, 118, 0.1)',
        'rgba(135, 219, 118, 0.3)',
      ],
      borderColor: [
        'rgba(156, 135, 182,0.5)',
        'rgba(156, 135, 182,0.7)',
        'rgba(248, 190, 93,0.5)',
        'rgba(248, 190, 93,1)',
        'rgb(135, 219, 118)',
        'rgb(135, 219, 118)',
      ],
      borderWidth: 1,
    }
  ];

  public officerchartOptions: any = {
    responsive: true
  };
  public officerchartClicked(e: any): void { }
  public officerchartHovered(e: any): void { }
  ngOnInit(): void {}
}
