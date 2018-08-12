import { Component, OnInit } from '@angular/core';
import { StatsCard } from '../shared/statsCard/statsCard';
import { PieChart } from '../shared/pieChart/pieChart';



@Component({
  templateUrl: './dashboard.component.html',
  // tslint:disable-next-line:component-selector
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor
    () {

  }
  public chartHeight = 35;

  public ChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    mainAspectRatio: false
  };

  // Timeline Related
  public completeListener(item) {
    console.log(item);
    return true;
  }


  // tslint:disable-next-line:member-ordering
  public timelineData: Array<Object> = [
    {
      title: 'Step 1',
      icon: '<i class="fa fa-home"></i>',
      content: 'Hello World',
      complete: true
    },
    {
      title: 'Step 2',
      icon: '<i class="fa fa-pencil"></i>',
      content: 'Welcome World',
      complete: false
    }
  ];

  ngOnInit(): void {

    this.log('Init()');




    const self = this;

    setTimeout(function () {
      self.timelineData.push({
        title: 'Step 3',
        icon: '<i class="fa fa-remove"></i>',
        content: 'Bye World',
        complete: false
      });
    }, 5000);

  }

  // Card
  // tslint:disable-next-line:member-ordering
  public card1: StatsCard = {
    color: '#1ebfae',
    icon: 'fa-users',
    label: 'Users',
    data: 50
  };
  // tslint:disable-next-line:member-ordering
  public card2: StatsCard = { color: '#30a5ff', icon: 'fa-cogs', label: 'Items', data: 80 };
  // tslint:disable-next-line:member-ordering
  public card3: StatsCard = { color: '#ffb53e', icon: 'fa-cogs', label: 'Orders', data: 90 };
  // tslint:disable-next-line:member-ordering
  public card4: StatsCard = { color: '#f9243f', icon: 'fa-cog', label: 'Delivered', data: 2 };

  // ProgressBars
  // tslint:disable-next-line:member-ordering
  public pbar1: PieChart = { color: '#1ebfae', max: 100, label: 'Load', current: 2 };
  // tslint:disable-next-line:member-ordering
  public pbar2: PieChart = { color: '#30a5ff', max: 100, label: 'Traffic', current: 20 };
  // tslint:disable-next-line:member-ordering
  public pbar3: PieChart = { color: '#ffb53e', max: 100, label: 'Users', current: 50 };
  // tslint:disable-next-line:member-ordering
  public pbar4: PieChart = { color: '#f9243f', max: 100, label: 'RAM', current: 57 };


  // lineChart
  // tslint:disable-next-line:member-ordering
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  // tslint:disable-next-line:member-ordering
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // tslint:disable-next-line:member-ordering
  public lineChartType = 'line';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // News Component
  // tslint:disable-next-line:member-ordering
  public newsList: Array<Object> = [
    {
      large: '30',
      small: 'Jun',
      link: 'http://www.aebiss.com',
      title: 'AEBISS',
      content: 'Fullstack development, IoT, Blockchain related services in the U.A.E'
    },
    {
      large: '1',
      small: 'Jul',
      link: 'http://www.tayar.ae',
      title: 'Tayar',
      content: 'One device that let you control any electrical device at home'
    },
    {
      large: '1',
      small: 'Jul',
      link: 'http://www.wavex.io',
      title: 'WaveX',
      content: 'Blockchain based electricity trading platform'
    }
  ];

  private log(taskName: string) {
    console.log('DashboardService says: ' + taskName);
  }
}
