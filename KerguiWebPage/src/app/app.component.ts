import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AccueilComponent } from './accueil/accueil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KerguiWebPage';
}
