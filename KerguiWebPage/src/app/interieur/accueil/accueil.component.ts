import { Component } from '@angular/core';
import { PieceaccueilComponent } from '../pieceaccueil/pieceaccueil.component';
import { DeviceautomationComponent } from '../deviceautomation/deviceautomation.component';
import { GraphiqueComponent } from '../graphique/graphique.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [PieceaccueilComponent, DeviceautomationComponent, GraphiqueComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
