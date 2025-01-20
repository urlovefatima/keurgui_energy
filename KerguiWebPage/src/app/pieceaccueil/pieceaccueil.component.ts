import { Component, OnInit } from '@angular/core';
import { pieceaccueil } from '../models/pieceaccueil';
import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-pieceaccueil',
  standalone: true,
  imports: [CommonModule, NgFor, ],
  templateUrl: './pieceaccueil.component.html',
  styleUrl: './pieceaccueil.component.scss'
})
export class PieceaccueilComponent {
lespieces! : pieceaccueil[];

ngOnInit(): void{
  this.lespieces = [
     new pieceaccueil(
            'Salon',
            '20m²',
            'assets/salon.png'
          ),
    
          new pieceaccueil(
            'Cuisine',
            '10m²',
            'assets/cuisine.jpg'
          ),
    
          new pieceaccueil(
            'Chambre parent',
            '16m²',
            'assets/chambre_parent.jpg'
          ),
    
          new pieceaccueil(
            'Chambre enfant1',
            '8m²',
            'assets/chambre_enfant1.jpg'
          ),
    
          new pieceaccueil(
            'Toilette publique',
            '12m²',
            'assets/toilette.jpg'
          ),
          new pieceaccueil(
            'Toilette parent',
            '12m²',
            'assets/toilette.jpg'
          ),
          new pieceaccueil(
            'Toilette enfant',
            '12m²',
            'assets/toilette.jpg'
          ),
  ]
}
}
