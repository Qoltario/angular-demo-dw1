import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageEditionUtilisateurComponent } from './page-edition-utilisateur/page-edition-utilisateur.component';
import { PageListeUtilisateurComponent } from './page-liste-utilisateur/page-liste-utilisateur.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';
import { PageResultatRechercheComponent } from './page-resultat-recherche/page-resultat-recherche.component';

const routes: Routes = [
  {path:"", component: PageAccueilComponent},
  {path:"connexion", component: PageConnexionComponent},
  {path:"liste-utilisateur", component: PageListeUtilisateurComponent},
  {path:"edition-utilisateur/:id", component: PageEditionUtilisateurComponent},
  {path:"edition-utilisateur", component: PageEditionUtilisateurComponent},
  {path:"resultat-recherche/:recherche", component: PageResultatRechercheComponent},
  {path:"**", component: PageNonTrouveComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
