import { Pipe, PipeTransform } from '@angular/core';
import { CoverPhoto } from '../interfaces/buscar-foto';

@Pipe({
  name: 'urlVacio'
})
export class UrlVacioPipe implements PipeTransform {

  transform(url:CoverPhoto): string {
    if(url){
      return url.urls.thumb;
    }else{
      return './assets/img/no-image.jpg'
    }
  }

}
