
import { RouterModule, Routes } from '@angular/router';
import { IngresaComponent } from './components/ingresa/ingresa.component';

const APP_ROUTES: Routes = [
{ path: 'Inicio', component: IngresaComponent },
{ path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing= RouterModule.forRoot (APP_ROUTES);
