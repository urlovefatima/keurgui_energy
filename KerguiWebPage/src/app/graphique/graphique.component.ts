import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {NgChartsModule} from 'ng2-charts'

@Component({
  selector: 'app-graphique',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './graphique.component.html',
  styleUrl: './graphique.component.scss'
})
export class GraphiqueComponent {
    ngOnInit(){
        const ctx= document.getElementById('myChart') as HTMLCanvasElement;
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            datasets : [
              {
                label: 'Consommation (kWh)',
                data : [100, 200, 400, 300, 700, 800, 600],
                borderColor:'#ff1493',
                borderWidth: 2,
                tension : 0.4
              }
            ]
          },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position : 'top',
            },
          },
          scales: {
            y : {
              beginAtZero: true
            },
          },
        },
        });
    }
}
