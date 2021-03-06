import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { BuscarFotoResponse } from '../interfaces/buscar-foto';
import { FotoResponse } from '../interfaces/foto';
import { Usuario, Login } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class BuscarItemsService {
  
  public cargando: boolean = false;
 
  constructor(private httpClient: HttpClient ){ }

  getItems(texto:string,perPage:number = 10,page?:number):Observable<BuscarFotoResponse>{
    
    this.cargando=true;

    return this.httpClient.get<BuscarFotoResponse>(`https://api.unsplash.com/search/photos?client_id=Byd1OMIMsJx3PzdQXXmYpYTIf4nXA948ak51PRI2g54&query=${texto.toLowerCase()}&page=${page.toString()}&per_page=${perPage}&lang=es`).pipe(
      tap(()=>{
        this.cargando = false;
      })
    );

  }

  getItem(id:string):Observable<FotoResponse>{

    this.cargando=true;

    return this.httpClient.get<FotoResponse>(`https://api.unsplash.com/photos/${id}/?client_id=Byd1OMIMsJx3PzdQXXmYpYTIf4nXA948ak51PRI2g54&lang=es`).pipe(
      tap(()=>{
        this.cargando = false;
      })
    );

  }

  loginAPI(sub: string, nickname: string){
    this.cargando=true;
    let usuario : Usuario = {
        sub,
        nickname
    };
    return this.httpClient.post<Login>(`http://localhost:3000/api/usuarios`, usuario).pipe(
      tap(()=>{
        this.cargando = false;
      })
    );
  }

  getUsuarios(){
    this.cargando=true;
    let usuario : Usuario = {
        sub: 'dadasdasdasdas',
        nickname: 'daneredu prueba'
    };

    return this.httpClient.post<Usuario>(`http://localhost:3000/api/usuarios`, usuario).pipe(
      tap(()=>{
        this.cargando = false;
      })
    );
  }

  uploadItem(formulario : any):Observable<any>{
    this.cargando=true;

    return this.httpClient.post<Usuario>(`http://localhost:3000/api/items`, formulario).pipe(
      tap(()=>{
        this.cargando = false;
      })
    );
    
    console.log(formulario);
    
  }
}
