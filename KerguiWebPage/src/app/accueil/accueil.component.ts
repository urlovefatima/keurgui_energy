import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { PieceaccueilComponent } from '../pieceaccueil/pieceaccueil.component';
import { DeviceautomationComponent } from '../deviceautomation/deviceautomation.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [SidebarComponent, SearchBarComponent, PieceaccueilComponent, DeviceautomationComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
