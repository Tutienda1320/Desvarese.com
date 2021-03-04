import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoResponse } from '../../interfaces/foto';
import { BuscarItemsService } from '../../services/buscar-items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  public item: FotoResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private buscarItemsService:BuscarItemsService,
              private location: Location) { }

  ngOnInit(): void {
    const id:string = this.activatedRoute.snapshot.params.id;
    //console.log(id);

    this.buscarItemsService.getItem(id).subscribe(resp => {
      this.item = resp;
      console.log(this.item.urls.small);
    })
    
  }

  onVolver(){
    this.location.back();
  }

}
