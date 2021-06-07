import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { GraficosService } from '../service/graficos.service';
import { GProyectos } from '../models/graficoProyectos';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-grafico-contador-usuarios',
  templateUrl: './grafico-contador-usuarios.component.html',
  styleUrls: ['./grafico-contador-usuarios.component.scss']
})
export class GraficoContadorUsuariosComponent implements OnInit {

  gProyecto: GProyectos[];

  constructor(
    private graficosService: GraficosService
  ) { }
  
  ngOnInit(): void {
    this.graficoCUsuarios();
  }

  graficoCUsuarios(): void {    
    let variable : number[] = [];
      this.graficosService.graficoContadorUsuarios().subscribe(
        data => {
          this.gProyecto = data;
          this.gProyecto.forEach(dato => {
            variable.push(dato.valor);
            this.doughnutChartLabels.push(dato.nombre); 
            console.log(this.doughnutChartLabels); 
        });
        this.doughnutChartData = [variable];
          console.log(this.doughnutChartData);
        },
        err => {
          console.log(err);
        }
      );
  }//graficoCUsuarios

public doughnutChartLabels: Array<Label> = new Array<Label>();
public doughnutChartData: MultiDataSet = [[0,0,0]];

public doughnutChartType: ChartType = 'doughnut';

//eventos
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

}
