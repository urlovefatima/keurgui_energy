import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import {RegisterStep1Service} from '../services/register-step1.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss',
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

export class ConnexionComponent implements OnInit{
  title!: string;
  slogan!: string;
  imgPath!: string;
  logoPath!: string;

  email: string ='';
  password: string ='';

  constructor(private stepService :RegisterStep1Service, private router : Router) {
  }

  login(){
    this.stepService.login(this.email, this.password).subscribe(
      ()=>{
        this.router.navigate(['keurgui'])
      },
      (error: any) => {
        console.error('Erreur de connexion :', error);
      }
    )
  }

  ngOnInit(): void {
      this.title = 'Connexion';
      this.slogan = '“ Controlez votre consommation énergétique en temps réel! ”';
      this.imgPath = 'assets/maison.png';
      this.logoPath = 'assets/Logo_keurguiEnergy.png';

  }
}
