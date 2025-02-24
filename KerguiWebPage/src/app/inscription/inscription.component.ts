import { Component, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterLink, NgIf],
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


  ngOnInit(): void {
      this.title = 'Inscription';
      this.slogan = '“ Controlez votre consommation énergétique en temps réel! ”';
      this.imgPath = 'assets/maison.png';
      this.logoPath = 'assets/Logo_keurguiEnergy.png';
  }
}