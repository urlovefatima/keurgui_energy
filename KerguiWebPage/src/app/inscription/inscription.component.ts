import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})


export class InscriptionComponent implements OnInit{
  title!: string;
  slogan!: string;
  imgPath!: string;
  logoPath!: string;

  ngOnInit(): void {
      this.title = 'Inscription';
      this.slogan = '“ Controlez votre consommation énergétique en temps réel! ”';
      this.imgPath = 'assets/maison.png';
      this.logoPath = 'assets/Logo_keurguiEnergy.png';
  }
}