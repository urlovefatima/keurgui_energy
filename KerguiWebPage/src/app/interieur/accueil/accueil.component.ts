import { Component } from '@angular/core';
import { PieceaccueilComponent } from '../pieceaccueil/pieceaccueil.component';
import { DeviceautomationComponent } from '../deviceautomation/deviceautomation.component';
import { GraphiqueComponent } from '../graphique/graphique.component';
import { HistoriqueConsComponent} from '../../historique-cons/historique-cons.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [PieceaccueilComponent, DeviceautomationComponent, GraphiqueComponent, HistoriqueConsComponent, RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
