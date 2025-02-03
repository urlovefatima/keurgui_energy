import { Component, Input } from '@angular/core';
import { Appareil } from '../../../models/appareil';
import { Conso } from '../../../models/consommation';

@Component({
  selector: 'app-conso',
  standalone: true,
  imports: [],
  templateUrl: './conso.component.html',
  styleUrl: './conso.component.scss'
})
export class ConsoComponent {
  @Input() appareil!: Appareil;
  @Input() conso!: Conso;
}
