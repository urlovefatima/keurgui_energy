import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MdpOublieComponent } from './mdp-oublie/mdp-oublie.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MdpChangeComponent } from './reset-password/mdp-change/mdp-change.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AppareilComponent } from './appareil/appareil.component';
import { HistoriqueComponent } from './historique/historique.component';

export const routes: Routes = [
    { path: '', component: SplashScreenComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'mdp_oublie', component: MdpOublieComponent},
    { path: 'reset_password', component: ResetPasswordComponent},
    { path: 'reset_password', component: ResetPasswordComponent},
    {path: "password_reset", component: MdpChangeComponent},
    { path: 'pieces', component: PiecesComponent},
    {path: 'accueil', component : AccueilComponent},
    { path: 'appareils', component: AppareilComponent},
    {path: 'historique', component: HistoriqueComponent}
];
