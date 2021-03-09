import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { BuscarComponent } from './buscar/buscar.component';
import { PublicarComponent } from './publicar/publicar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    BuscarComponent,
    PublicarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    HighlightModule,
    ReactiveFormsModule,
    NgxFileDropModule
  ],
  providers:[
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    }
  ]
})
export class PagesModule { }
