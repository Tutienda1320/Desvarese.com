import { Component, OnInit } from '@angular/core';
import { BuscarItemsService } from '../../services/buscar-items.service';
import { Usuario } from "../../interfaces/usuario";
import { Item } from '../../interfaces/items';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { IndexType } from 'typescript';
import { Type } from '../../interfaces/buscar-foto';
import {ApiService} from '../../services/api.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  public file: File[] = [];
  private contFile : number = 0;
  public photoPreview: string[] | ArrayBuffer ;
  
  public usuarios : Usuario[] = [];
  public usuario : Usuario;
  public form : FormGroup;
  public maxDesc : number = 100;
  public imagenes : any[] = [];
  public imgPreview : string[] =[];
  public cargando : boolean = false;
  // public nuevoItem : Item = {files : [], formulario : {
  //   nombre : '',
  //   tipo : '',
  //   descripcion : '',
  //   precio : 0,
  //   ref : '',
  //   stock : 0,
  //   ciudad : ''
  // }};

  constructor(public apiService: ApiService, public buscarItemsService: BuscarItemsService, private formBuilder: FormBuilder, private sanitizer: DomSanitizer) { 
    
    this.buildForm();
    // this.nuevoItem.files = [];
  }

  ngOnInit(): void {
    // this.buscarItemsService.getUsuarios().subscribe(resp=>{
    //   console.log(resp);    
    //   this.usuario = resp;
    // })
  }
  
  photoselected(event: HtmlInputEvent):void{
    if(event.target.files && event.target.files[0]){
      if(this.contFile){
        if(event.target.files.length>1){
          for(let i=0; i<event.target.files.length; i++){
            this.file[this.contFile] = <File>event.target.files[i];
            this.contFile++;
          }  
        }
        else {
          this.file[this.contFile] = <File>event.target.files[0];
          this.contFile++;
        }
      } 
      else {
        if(event.target.files.length>1){
          for(let i=0; i<event.target.files.length; i++){
            this.file[this.contFile] = <File>event.target.files[i];
            this.contFile++;
          }  
        }
        else {
          this.file[0] = <File>event.target.files[0];
          this.contFile++;
        }
      }

      
      this.photoPreview = [''];
      for(let i=0; i<this.file.length; i++)
      {
        const reader = new FileReader();
        reader.onload = e => this.photoPreview[i] = reader.result;
        reader.readAsDataURL(this.file[i]);
      }
      
    }
  }

  onClick(){
    console.log(this.form.value);
    
  }

  // OnChangeFile(event){
  //   const captured = event.target.files[0];
  //   this.extraerBase64(captured).then((imagen : any) =>{
  //     this.imgPreview.push(imagen.base);
  //   })
  //   this.nuevoItem.files.push(captured)
  //   console.log(event.target.files[0]);
    
  //   // console.log(this.nuevoItem);
    
  //   // console.log(this.imagenes);
    
  // }

  // deletePhoto(i: number){
  //   this.imgPreview.splice(i,1);
  //   this.nuevoItem.files.splice(i,1);
  // }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['dasdsa', [Validators.required]],
      tipo: ['producto', [Validators.required]],
      descripcion: ['dasdas',[ Validators.maxLength(this.maxDesc), Validators.required]],
      precio: [2, [Validators.required]],
      ref: ['dsda', [Validators.required]],
      stock: [1, [Validators.required]],
      ciudad: ['asda', [Validators.maxLength(200)]],
      ok: ['', [Validators.required]]
    });

    // this.form.valueChanges
    //  .pipe(
    //    debounceTime(500)
    //  )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  save(event: Event){

    if(this.form.valid){
      event.preventDefault();

      // const item : Item ={
      //   nombre: this.form.get('nombre').value,
      //   tipo : this.form.get('tipo').value,
      //   descripcion : this.form.get('descripcion').value,
      //   precio : this.form.get('precio').value,
      //   ref : this.form.get('ref').value,
      //   stock : this.form.get('stock').value,
      //   ciudad : this.form.get('ciudad').value,
      //   image : this.file
      // };
      
      this.apiService.createItem(this.form, this.file[0])
        .subscribe(res=>console.log(res), err => console.log(err));
    
      this.contFile = 0;
      
      // const title = this.form.get('nombre').value;
      // const description = this.form.get('descripcion').value;

      // this.apiService.cratePhoto(title, description, this.file)
      //   .subscribe(res => console.log(res), err => console.log(err));
        
        
      
      
      // this.buscarItemsService.uploadItem(this.file).subscribe(res => console.log(res), error => console.log(error));

      // this.nuevoItem.formulario = {
      //   nombre : this.form.get('nombre').value,
      //   tipo : this.form.get('tipo').value,
      //   descripcion : this.form.get('descripcion').value,
      //   precio : this.form.get('precio').value,
      //   ref : this.form.get('ref').value,
      //   stock : this.form.get('stock').value,
      //   ciudad : this.form.get('ciudad').value
      // };

      // console.log(this.nuevoItem);
      // console.log(formulario);
      
      // this.buscarItemsService.uploadItem(this.nuevoItem).subscribe(resp =>{
      //   console.log(resp);
        
      // });
    }else{
      this.form.markAllAsTouched();
      console.log("Formulario invalido");
      
    }
    
  }

  get descripcionField(){
    return this.form.get('descripcion');
  }

  get nombreField(){
    return this.form.get('nombre');
  }
  
  get refField(){
    return this.form.get('ref');
  }

  get stockField(){
    return this.form.get('stock');
  }

  get precioField(){
    return this.form.get('precio');
  }
  

}
