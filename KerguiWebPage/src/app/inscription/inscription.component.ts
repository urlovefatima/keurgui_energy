import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgIf } from '@angular/common';
import {IUser} from '../interface/infosUser1';
import {RegisterStep1Service} from '../services/register-step1.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
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


export class InscriptionComponent implements OnInit{
  title!: string;
  slogan!: string;
  imgPath!: string;
  logoPath!: string;
  step = 1;
  user: IUser = { nom: '', prenom: '', telephone: '' };

  constructor(private step1Service :RegisterStep1Service, private router : Router) {
  }

  submitStep1() {
    this.step1Service.registerStep1(this.user).subscribe(
      () => {
        this.router.navigateByUrl('inscription2');
      },
      (error: any) => {
        console.error("erreur etape1 ", error);
      }
    );
  }


  ngOnInit(): void {
      this.title = 'Inscription';
      this.slogan = '“ Controlez votre consommation énergétique en temps réel! ”';
      this.imgPath = 'assets/maison.png';
      this.logoPath = 'assets/Logo_keurguiEnergy.png';
  }
}
