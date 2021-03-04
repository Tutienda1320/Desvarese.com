import { Location } from '@angular/common';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../../interfaces/buscar-foto';

@Component({
  selector: 'app-item-poster-grid',
  templateUrl: './item-poster-grid.component.html',
  styleUrls: ['./item-poster-grid.component.css']
})
export class ItemPosterGridComponent implements OnInit, AfterContentInit {
  
  @Input() items:Photo[] = [];
  private itemsAux: Photo[] = [];
  private itemsAux2: Photo[] = [];
  public opc1: boolean = true;
  public opc2: boolean = true;
  public opc3: boolean = true;

  constructor(private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    //  console.log(this.items);
    
    
  }

  ngAfterContentInit(){
    this.itemsAux2 = this.items;
  }

  onChange1(){
    this.opc1 = !this.opc1;
    // console.log([this.opc1,this.opc2,this.opc3]);
    this.onChange();
  }
  
  
  onChange2(){
    this.opc2 = !this.opc2;
    // console.log([this.opc1,this.opc2,this.opc3]);
    this.onChange();
  }

  onChange3(){
    this.opc3 = !this.opc3;
    // console.log([this.opc1,this.opc2,this.opc3]);
    this.onChange();
  }

  onChange(){
    // console.log(this.itemsAux2);
    this.items = this.itemsAux2;
    this.itemsAux = [];
    let i=0;
    // console.log([this.items, this.items.length]);
    
    for(let i:number=0; i < this.items.length; i++)
    {
      // console.log([this.items[i].likes,this.opc1,this.opc2,this.opc3]);
      
      if(this.opc3 && this.items[i].likes > 200 ){
        this.itemsAux.push(this.items[i]);
      }
      if(this.opc2 && this.items[i].likes > 100 && this.items[i].likes < 200 ){
        this.itemsAux.push(this.items[i]);
      }
      if(this.opc1 && this.items[i].likes < 50){
        this.itemsAux.push(this.items[i]);
      }
    }
      
    this.items = this.itemsAux;
    console.log(this.items);
    
  }

  onItemClick(id: string){
    this.router.navigate(['/item',id]);  
    
  }

}
