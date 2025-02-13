import { Component, OnInit } from '@angular/core';
import { ApparComponent } from "./appar/appar.component";
import { Appareil } from '../../models/appareil';
import { Conso } from '../../models/consommation';
import { ConsoComponent } from './conso/conso.component';
import { CommonModule } from '@angular/common';
import { HistoriqueConsComponent } from '../../historique-cons/historique-cons.component';


@Component({
  selector: 'app-appareil',
  standalone: true,
  imports: [ApparComponent, ConsoComponent, CommonModule, HistoriqueConsComponent],
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss'
})
export class AppareilComponent {
  appareils!: Appareil[];
  consommations!: Conso[];
  showHistoriqueAppareil: boolean = false;
  selectedAppareilIndex: number | null = null;
  selectedAppareil: Appareil | null = null;
  color = "#D0E3FF";

  onAppareilClick(appareilIndex: number): void{

    if (appareilIndex === 0) {

      this.selectedAppareil = this.appareils[appareilIndex];
      this.selectedAppareilIndex = appareilIndex;
      this.showHistoriqueAppareil = !this.showHistoriqueAppareil;
    } else{
      this.showHistoriqueAppareil = false;
    }
  }
  

  ngOnInit(): void{
    this.appareils = [
      new Appareil(
        'Climatiseur',
        'Salon',
        'assets/clim2.png',
        true
      ),
      new Appareil(
        'Smart Tv',
        'Salon',
        'assets/tele.png',
        false
      ),
      new Appareil(
        'Smart Tv',
        'Salon',
        'assets/tele.png',
        false
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png',
        true
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png',
        true
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png',
        false
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png',
        true
      ),
      new Appareil(
        'Micro Onde',
        'Cuisine',
        'assets/miconde.png',
        true
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
