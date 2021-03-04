import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BuscarFotoResponse, Photo } from '../../interfaces/buscar-foto';
import { BuscarItemsService } from '../../services/buscar-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy { 
  
  public itemsSlide: Photo[] = [];
  public items: Photo[] = [];
  private page:number = 1;

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)+1000;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    
    if(pos>max){
      if(this.buscarItemsService.cargando) {return;}
      console.log('llamar servicio');
      this.page += 1;
      this.buscarItemsService.getItems("machine",20,this.page).subscribe(resp=>{
        this.items.push(...resp.results);      
      })
  
    }
    
  }

  constructor(public auth: AuthService,
              private buscarItemsService: BuscarItemsService) {}

  ngOnInit(): void {

    this.buscarItemsService.getItems("machine",10,1).subscribe(resp=>{
      this.itemsSlide = resp.results;      
    })

    this.buscarItemsService.getItems("machine",20,1).subscribe(resp=>{
      this.items = resp.results;      
    })
    
  }

  ngOnDestroy(){
    this.page = 1;
  }
}
