import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-inscription2',
  standalone: true,
  imports: [RouterLink],
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

  ngOnInit(): void {
      this.title = 'Inscription';
      this.slogan = '“ Controlez votre consommation énergétique en temps réel! ”';
      this.imgPath = 'assets/maison.png';
      this.logoPath = 'assets/Logo_keurguiEnergy.png';
  }
}
