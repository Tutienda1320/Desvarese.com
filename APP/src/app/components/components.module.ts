import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ItemPosterGridComponent } from './item-poster-grid/item-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomeContentComponent,
    LoadingComponent,
    SlideshowComponent,
    ItemPosterGridComponent,
    ItemComponent,

  ],
  exports:[
    NavBarComponent,
    FooterComponent,
    HomeContentComponent,
    LoadingComponent,
    SlideshowComponent,
    ItemPosterGridComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FontAwesomeModule,
    NgbModule,
    RatingModule,
    FontAwesomeModule
  ]
})
export class ComponentsModule { }
