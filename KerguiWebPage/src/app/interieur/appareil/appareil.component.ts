import { Component, OnInit } from '@angular/core';
import { ApparComponent } from "./appar/appar.component";
import { Appareil } from '../../models/appareil';
import { Conso } from '../../models/consommation';
import { ConsoComponent } from './conso/conso.component';


@Component({
  selector: 'app-appareil',
  standalone: true,
  imports: [ApparComponent, ConsoComponent],
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss'
})
export class AppareilComponent {
  appareils!: Appareil[];
  consommations!: Conso[];
  ngOnInit(): void{
    this.appareils = [
      new Appareil(
        'Climatiseur',
        'Salon',
        'assets/clim2.png'
      ),
      new Appareil(
        'Smart Tv',
        'Salon',
        'assets/tele.png'
      ),
      new Appareil(
        'Smart Tv',
        'Salon',
        'assets/tele.png'
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png'
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png'
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png'
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png'
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png'
      )      
    ]
    this.consommations = [
      new Conso(
        1.5,
        0.25,
        10.5,
        1.75,
        45,
        3.2
      ),
      new Conso(
        1.5,
        0.25,
        10.5,
        1.75,
        45,
        3.2
      ),
      new Conso(
        1.5,
        0.25,
        10.5,
        1.75,
        45,
        3.2
      ),
      new Conso(
        1.5,
        0.25,
        10.5,
        1.75,
        45,
        3.2
      ),
      new Conso(
        1.5,
        0.25,
        10.5,
        1.75,
        45,
        3.2
      ),
      new Conso(
        1.5,
        0.25,
        10.5,
        1.75,
        45,
        3.2
      ),
      new Conso(
        1.5,
        0.25,
        10.5,
        1.75,
        45,
        3.2
      )
    ]
  }
}
