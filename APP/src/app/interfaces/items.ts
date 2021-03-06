import { FormBuilder } from '@angular/forms';

export interface Item{
    files: any[];
    formulario : formularioItem;
}

export interface formularioItem{
    nombre: string,
    tipo: string,
    descripcion: string,
    precio: number,
    ref: string,
    stock: number,
    ciudad: string
}