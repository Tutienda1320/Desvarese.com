import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../../../auth_config.json';
import { Item } from '../interfaces/items';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  URI = "http://localhost:4000/api/";

  constructor(private http: HttpClient) {}

  cratePhoto(title:string, description: string,photo : File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(this.URI+'photos', fd);
  }

  createItem(form: FormGroup, image: File){

  const fd = new FormData();
  fd.append('nombre',form.get('nombre').value);
  fd.append('tipo',form.get('tipo').value);
  fd.append('descripcion',form.get('descripcion').value);
  fd.append('precio',form.get('precio').value);
  fd.append('ref',form.get('ref').value);
  fd.append('stock',form.get('stock').value);
  fd.append('ciudad',form.get('ciudad').value);
  fd.append('image',image);

  return this.http.post(this.URI+'items',fd);
  }
}
