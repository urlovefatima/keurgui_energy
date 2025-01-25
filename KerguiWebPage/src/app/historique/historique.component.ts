import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { PremiergraphiqueComponent } from '../premiergraphique/premiergraphique.component';
import { DeuxiemegraphiqueComponent } from '../deuxiemegraphique/deuxiemegraphique.component';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [SidebarComponent, SearchBarComponent,PremiergraphiqueComponent, DeuxiemegraphiqueComponent],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss'
})
export class HistoriqueComponent {

}
