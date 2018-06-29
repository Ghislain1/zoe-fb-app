import { Input, Component } from "@angular/core";
import { PieChart } from "./pieChart";

@Component({
  templateUrl: './pieChart.component.html',
  selector: 'pieChart',
  styleUrls: ['./pieChart.scss']
})
export class PieChartComponent {
  @Input('data') properties: PieChart = { color: "#30a5ff", current: 0, max: 100, label: "fa-line-chart" };

  constructor() {
  }

  ngOnInit() {

  }
}