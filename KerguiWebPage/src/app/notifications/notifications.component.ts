import { Component } from '@angular/core';
import {NgClass, NgFor} from '@angular/common';
import {SidebarComponent} from '../interieur/sidebar/sidebar.component';
import {SearchBarComponent} from '../interieur/search-bar/search-bar.component';
import {HistoriqueConsComponent} from '../historique-cons/historique-cons.component';




interface Notification {
  type: 'success' | 'alert' | 'info';
  title: string;
  message: string;
  timestamp: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgClass, NgFor, SidebarComponent, SearchBarComponent, HistoriqueConsComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})

export class NotificationsComponent {


  notifications: Notification[] = [
    {
      type: 'success',
      title: 'Félicitations!',
      message: 'Vous avez économisé 10 kWh cette semaine par rapport à la semaine dernière',
      timestamp: 'Maintenant',
    },
    {
      type: 'alert',
      title: 'Alerte!',
      message: "Votre appareil [Nom de l'appareil] semble consommer plus que d'habitude. Vérifiez s'il fonctionne correctement",
      timestamp: 'il y a 4 minutes',
    },
    {
      type: 'info',
      title: 'Profitez en Fallou!',
      message: "L'heure creuse commence dans 30 minutes. C'est le moment idéal pour utiliser vos appareils gourmands en énergie",
      timestamp: '10:14 AM',
    },
    {
      type: 'alert',
      title: 'Pointe de consommation détectée!',
      message: 'Votre pic de consommation a atteint un niveau élevé aujourd’hui. Essayez de réduire l’utilisation des appareils gourmands en énergie.',
      timestamp: 'Il y a 1 heure',
    },
    {
      type: 'info',
      title: 'Météo et énergie',
      message: 'Une vague de froid est prévue cette semaine. Pensez à optimiser votre chauffage!',
      timestamp: 'Hier',
    },
  ];

}
