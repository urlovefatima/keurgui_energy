import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MdpOublieComponent } from './mdp-oublie/mdp-oublie.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PiecesComponent } from './pieces/pieces.component';

export const routes: Routes = [
    { path: '', component: ConnexionComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'mdp_oublie', component: MdpOublieComponent},
    { path: 'reset_password', component: ResetPasswordComponent},
    { path: 'reset_password', component: ResetPasswordComponent},
    { path: 'pieces', component: PiecesComponent},
];
