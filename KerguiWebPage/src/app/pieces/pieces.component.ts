import { Component, OnInit } from '@angular/core';
import { Piece } from '../models/piece';
import { CommonModule } from '@angular/common';
import { Appareil } from '../models/appareil';
import { User } from '../models/users';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-pieces',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    SearchBarComponent
],
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent implements OnInit {
  pieces!: Piece[];
  appareils!: Appareil[];
  users!: User[];

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
        'assets/climatiseur.webp'
      ),

      new Appareil(
        'Lampe',
        'Salon',
        'assets/lampe.webp'
      ),

      new Appareil(
        'Baffle',
        'Salon',
        'assets/baffle.webp'
      ),

      new Appareil(
        'Humidifier',
        'Salon',
        'assets/humidifier.webp'
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
  }
}
