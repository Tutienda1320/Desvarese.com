import { Component, OnInit } from '@angular/core';
import { BuscarItemsService } from '../../services/buscar-items.service';
import { Usuario } from '../../interfaces/usuario';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  
  public usuarios : Usuario[] = [];
  public usuario : Usuario;
  public form : FormGroup;

  constructor(public buscarItemsService: BuscarItemsService) { 
    
    this.buildForm();
  }

  ngOnInit(): void {
    // this.buscarItemsService.getUsuarios().subscribe(resp=>{
    //   console.log(resp);    
    //   this.usuario = resp;
    // })
  }
  
  onClick(){
    console.log(this.form.value);
    
  }

  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      pass: new FormControl('', [Validators.maxLength(200)]),
      ok: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    .subscribe(value => {
      //console.log(value);
    });
  }

}
