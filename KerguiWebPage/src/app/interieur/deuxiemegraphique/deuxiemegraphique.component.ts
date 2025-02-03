import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-deuxiemegraphique',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './deuxiemegraphique.component.html',
  styleUrl: './deuxiemegraphique.component.scss'
})
export class DeuxiemegraphiqueComponent {

  ngOnInit(){
          const ctx= document.getElementById('mySecondChart') as HTMLCanvasElement;
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: [1,2, 3,4, 5, 6, 7], 
              datasets : [
                {
                  label: 'Consommation (kWh)',
                  data : [100, 200, 400, 300, 700, 800, 600],
                  borderColor:'#173b61',
                  pointBackgroundColor: '#173b61',
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
