import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompteComponent } from './compte/compte.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KerguiWebPage';
}
