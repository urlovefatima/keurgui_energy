import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MdpOublieComponent } from './interieur/mdp-oublie/mdp-oublie.component';
import { ResetPasswordComponent } from './interieur/reset-password/reset-password.component';
import { PiecesComponent } from './interieur/pieces/pieces.component';
import { AccueilComponent } from './interieur/accueil/accueil.component';
import { MdpChangeComponent } from './interieur/reset-password/mdp-change/mdp-change.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AppareilComponent } from './interieur/appareil/appareil.component';
import { HistoriqueComponent } from './interieur/historique/historique.component';
import { InterieurComponent } from './interieur/interieur.component';

export const routes: Routes = [
    { path: '', component: SplashScreenComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'keurgui', component: InterieurComponent,
        children: [
            { path: 'mdp_oublie', component: MdpOublieComponent},
            { path: 'reset_password', component: ResetPasswordComponent},
            { path: 'reset_password', component: ResetPasswordComponent},
            { path: 'password_reset', component: MdpChangeComponent},
            { path: 'pieces', component: PiecesComponent},
            { path: '', component : AccueilComponent},
            { path: 'appareils', component: AppareilComponent},
            { path: 'historique', component: HistoriqueComponent}
        ]
    },
];
