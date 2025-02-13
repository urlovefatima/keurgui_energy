import { Component, Input } from '@angular/core';
import { Appareil } from '../../../models/appareil';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appar.component.html',
  styleUrl: './appar.component.scss'
})
export class ApparComponent {
  @Input() appareil!: Appareil;
}
