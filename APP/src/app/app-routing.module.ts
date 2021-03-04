import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ItemComponent } from './components/item/item.component';
import { PublicarComponent } from './pages/publicar/publicar.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'buscar/:texto',
    component: BuscarComponent
  },
  {
    path: 'publicar',
    component: PublicarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
