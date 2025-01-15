import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})

export class ConnexionComponent implements OnInit{
  title!: string;
  slogan!: string;
  imgPath!: string;
  logoPath!: string;

  ngOnInit(): void {
      this.title = 'Connexion';
      this.slogan = '“ Controlez votre consommation énergétique en temps réel! ”';
      this.imgPath = 'assets/maison.png';
      this.logoPath = 'assets/Logo_keurguiEnergy.png';

  }
}
