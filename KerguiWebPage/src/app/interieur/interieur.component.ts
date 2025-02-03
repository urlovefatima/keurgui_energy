import { Component } from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-interieur',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, SidebarComponent],
  templateUrl: './interieur.component.html',
  styleUrl: './interieur.component.scss'
})
export class InterieurComponent {

}
