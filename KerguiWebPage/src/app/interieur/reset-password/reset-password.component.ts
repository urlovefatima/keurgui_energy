import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MdpChangeComponent } from './mdp-change/mdp-change.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

}
