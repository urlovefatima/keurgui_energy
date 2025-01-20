import { Component, OnInit } from '@angular/core';
import { Appautomation } from '../models/appautomation';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-deviceautomation',
  standalone: true,
  imports: [CommonModule, NgFor, ],
  templateUrl: './deviceautomation.component.html',
  styleUrl: './deviceautomation.component.scss'
})
export class DeviceautomationComponent {
appauto! : Appautomation[];

ngOnInit(): void{
  this.appauto = [
       new Appautomation(
              'climatiseur (1)',
              'salon',
              'assets/clim.jpg'
            ),
      
            new Appautomation(
              'Réfrigérateur',
              'cuisine',
              'assets/frigo.jpg'
            ),
      
            new Appautomation(
              'Baffle',
              'Chambre enfant',
              'assets/baffle.webp'
            ),
      
            new Appautomation(
              'micro-onde',
              'cuisine',
              'assets/microwave.png'
            ),
      
            new Appautomation(
              'Télévision',
              'salon',
              'assets/tele.png'
            ),
            new Appautomation(
              'Lampe',
              'Chambre parent',
              'assets/lampe.webp'
            ),
            new Appautomation(
              'Humidifieur ',
              'Cuisine',
              'assets/humidifier.webp'
            ),
    ]
}

}
