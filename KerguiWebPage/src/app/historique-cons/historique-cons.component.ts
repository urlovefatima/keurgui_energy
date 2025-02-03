import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-historique-cons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique-cons.component.html',
  styleUrl: './historique-cons.component.scss'
})
export class HistoriqueConsComponent {
  historiqueItems = [
    { nom: 'Climatiseur (1)', emplacement: 'salon', duree: '10h', consommation: 20, variation: 0.0025 },
    { nom: 'Réfrigérateur', emplacement: 'salon', duree: '10h', consommation: 5, variation: -0.02 },
    { nom: 'Micro-onde', emplacement: 'salon', duree: '10h', consommation: 20, variation: 0.0025 },
    { nom: 'Climatiseur (2)', emplacement: 'salon', duree: '10h', consommation: 20, variation: 0.0025 },
    { nom: 'Télévision', emplacement: 'salon', duree: '10h', consommation: 5, variation: -0.02 },
    { nom: 'Ordinateur', emplacement: 'bureau', duree: '8h', consommation: 8, variation: 0.01 },
    { nom: 'Chauffe-eau', emplacement: 'salle de bain', duree: '6h', consommation: 12, variation: -0.015 },
    { nom: 'Lave-linge', emplacement: 'buanderie', duree: '3h', consommation: 15, variation: 0.02 },
    { nom: 'Lave-vaisselle', emplacement: 'cuisine', duree: '2h', consommation: 10, variation: 0.005 },
    { nom: 'Climatiseur (3)', emplacement: 'salon', duree: '10h', consommation: 15, variation: 0.0375 },
  ];

}
