import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../interfaces/buscar-foto';
import Swiper from 'swiper'
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slidesshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit{
  @Input() items: Photo[] = [];

  public swiper:Swiper;

  constructor(private router:Router) { }
 
  ngOnInit(): void {
    //console.log(this.items);
    
  }

  ngAfterViewInit(){
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true    
    }); 
  }

  onSlideNext(){
    this.swiper.slideNext();
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }

  onItemClick(id: string){
    this.router.navigate(['/item',id]);  
    
  }

}
