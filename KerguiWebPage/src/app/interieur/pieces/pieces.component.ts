import { Component, OnInit } from '@angular/core';
import { Piece } from '../../models/piece';
import { CommonModule } from '@angular/common';
import { Appareil } from '../../models/appareil';
import { User } from '../../models/users';
import { Consommation } from '../../models/historique';
import {HistoriqueConsComponent} from '../../historique-cons/historique-cons.component';

@Component({
  selector: 'app-pieces',
  standalone: true,
  imports: [
    CommonModule,
    HistoriqueConsComponent,
  ],
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent implements OnInit {

  pieces!: Piece[];
  appareils!: Appareil[];
  users!: User[];
  consommations!: Consommation[];
  showHistoriquePiece: boolean = false;
  selectedPieceIndex: number | null = null;
  selectedPiece: Piece | null = null;
  color = "#D0E3FF";

  onPieceClick(pieceIndex: number): void{

    if (pieceIndex === 0) {

      this.selectedPiece = this.pieces[pieceIndex];
      this.selectedPieceIndex = pieceIndex;
      this.showHistoriquePiece = true;

    }else{

      this.showHistoriquePiece = false;

    }
  }

  ngOnInit(): void {
    this.pieces = [
      new Piece(
        'Salon',
        '20m²',
        'assets/salon.png'
      ),

      new Piece(
        'Cuisine',
        '10m²',
        'assets/cuisine.jpg'
      ),

      new Piece(
        'Chambre parent',
        '16m²',
        'assets/chambre_parent.jpg'
      ),

      new Piece(
        'Chambre enfant1',
        '8m²',
        'assets/chambre_enfant1.jpg'
      ),

      new Piece(
        'Toilette publique',
        '12m²',
        'assets/toilette.jpg'
      ),
    ];

    this.appareils = [

      new Appareil(
        'Climatiseur',
        'Salon',
        'assets/climatiseur.webp',
        true
      ),

      new Appareil(
        'Lampe',
        'Salon',
        'assets/lampe.webp',
        false
      ),

      new Appareil(
        'Baffle',
        'Salon',
        'assets/baffle.webp',
        false
      ),

      new Appareil(
        'Humidifier',
        'Salon',
        'assets/humidifier.webp',
        false
      ),
    ];

    this.users = [
      new User(
        'Mamadou Falilou Diaw',
        'diawmf@ept.sn',
        'assets/homme.jpg'
      ),

      new User(
        'Fatima Dieye',
        'bbfa@ept.sn',
        'assets/femme.jpg'
      ),

    ];

    this.consommations = [

      new Consommation(
        'Journalier',
        '1.5kWh',
        '0.25%'
      ),

      new Consommation(
        'Hebdomadaire',
        '10.5kWh',
        '1.75%'
      ),

      new Consommation(
        'Mensuel',
        '45kWh',
        '7.5%'
      ),
    ]
  }
}
