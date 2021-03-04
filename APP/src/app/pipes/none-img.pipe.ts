import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noneImg'
})
export class NoneImgPipe implements PipeTransform {

  transform(url:string): string {
    if(url){
      return url;
    }else{
      return './assets/img/no-image.jpg'
    }
  }

}
