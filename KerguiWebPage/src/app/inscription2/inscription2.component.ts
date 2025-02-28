import { Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import {FormsModule} from '@angular/forms';
import {IUser} from '../interface/infosUser1';
import {infoUser2} from '../interface/infosUser2';
import {RegisterStep1Service} from '../services/register-step1.service';


@Component({
  selector: 'app-inscription2',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './inscription2.component.html',
  styleUrl: './inscription2.component.scss',
  animations: [
      trigger('superSmoothSlide', [
        transition(':enter', [
          style({
            opacity: 0,
            transform: 'translateX(30px) scale(0.98)',
            filter: 'blur(3px)'
          }),
          animate('1s ease-out',
            style({
              opacity: 1,
              transform: 'translateX(0) scale(1)',
              filter: 'blur(0px)'
            })
          )
        ]),
        transition(':leave', [
          animate('0.5s ease-in',
            style({
              opacity: 0,
              transform: 'translateX(-30px) scale(1.02)',
              filter: 'blur(3px)'
            })
          )
        ])
      ])
    ]
})
export class Inscription2Component {
  title!: string;
  slogan!: string;
  imgPath!: string;
  logoPath!: string;

  user: infoUser2 = { email: '', password: '', confirmPassword: '' };

  constructor(private stepService :RegisterStep1Service, private router : Router) {
  }

  ngOnInit(): void {
      this.title = 'Inscription';
      this.slogan = '“ Controlez votre consommation énergétique en temps réel! ”';
      this.imgPath = 'assets/maison.png';
      this.logoPath = 'assets/Logo_keurguiEnergy.png';
  }

  submitStep2(){
    this.stepService.registerStep2(this.user).subscribe(
      ()=>{
        this.router.navigate(['connexion']);
      },
      (error) => {
        console.error('Erreur lors de l’inscription :', error);
      }
    )
  }
}
