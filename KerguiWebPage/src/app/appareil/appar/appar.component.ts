import { Component, Input } from '@angular/core';
import { Appareil } from '../../models/appareil';

@Component({
  selector: 'app-appar',
  standalone: true,
  imports: [],
  templateUrl: './appar.component.html',
  styleUrl: './appar.component.scss'
})
export class ApparComponent {
  @Input() appareil!: Appareil;
}
