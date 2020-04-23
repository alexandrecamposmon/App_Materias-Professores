import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['Ronaldo Fenômeno', 'Rivaldo', 'Roberto Carlos', 'Ronaldinho Gaucho', 'Denilson Show'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [4, 3, 2, 1, 2,0], label: 'Matérias' }
  ];

  
  public barChartOptionsM: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabelsM: Label[] = ['Matemática', 'Português', 'História', 'Geografia', 'Educação Física', 'Artes', 'Filosofia', 'Sociologia', 'Biologia', 'Física', 'Lógica de Programação'];
  public barChartTypeM: ChartType = 'bar';
  public barChartLegendM = true;

  public barChartDataM: ChartDataSets[] = [
    { data: [4,1,2,1,1,1,1,1,1,2,0], label: 'Professores' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}
