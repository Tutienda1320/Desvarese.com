
import { RouterModule, Routes } from '@angular/router';
import { IngresaComponent } from './components/ingresa/ingresa.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
{ path: 'Ingresa', component: IngresaComponent },
{ path: 'Cuenta', component: CuentaComponent },
{ path: 'Home', component: HomeComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'ingresa' }
];

export const APP_ROUTING = RouterModule.forRoot (APP_ROUTES, { useHash : true });
