import { Component, OnInit } from '@angular/core';
import { BuscarItemsService } from '../../services/buscar-items.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  
  public usuarios : Usuario[] = [];
  public usuario : Usuario;

  constructor(public buscarItemsService: BuscarItemsService) { }

  ngOnInit(): void {
    // this.buscarItemsService.getUsuarios().subscribe(resp=>{
    //   console.log(resp);    
    //   this.usuario = resp;
    // })
  }

}
