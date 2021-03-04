import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlVacioPipe } from './url-vacio.pipe';
import { NoneImgPipe } from './none-img.pipe';



@NgModule({
  declarations: [UrlVacioPipe, NoneImgPipe],
  imports: [
    CommonModule
  ],
  exports: [
    UrlVacioPipe,
    NoneImgPipe
  ]
})
export class PipesModule { }
