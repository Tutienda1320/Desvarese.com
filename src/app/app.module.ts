import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING} from './app.routes';


// Servicios



// componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.componetn';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { IngresaComponent } from './components/ingresa/ingresa.component';
import { Publica } from './component/publica.ts/publica.ts.component';
import { Publica } from './components/publica.ts/publica.ts.component';
import { PublicaComponent } from './components/publica/publica.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CuentaComponent,
    IngresaComponent,
    Publica.Component,
    Publica.TsComponent,
    PublicaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
