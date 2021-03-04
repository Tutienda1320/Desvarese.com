import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    }
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
