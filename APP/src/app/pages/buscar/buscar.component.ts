import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarItemsService } from '../../services/buscar-items.service';
import { Photo } from '../../interfaces/buscar-foto';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  
  public texto:string;
  public items:Photo[] = [];
  public page:number = 1;

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)+1000;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    
    if(pos>max){
      if(this.buscarItemsService.cargando) {return;}
      console.log('llamar servicio');
      this.page += 1;
      this.buscarItemsService.getItems(this.texto,20,this.page).subscribe(resp=>{
        this.items.push(...resp.results);   
        console.log(this.page);
           
      })
  
    }
  }

  constructor(private activatedRoute:ActivatedRoute,
              private buscarItemsService: BuscarItemsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( resp => {
      // console.log(resp);
      this.texto = resp.texto;
      this.buscarItemsService.getItems(resp.texto,20,1).subscribe(items => {
        this.items = items.results;
        console.log(this.items);
        
      })
      
    })
  }

}
