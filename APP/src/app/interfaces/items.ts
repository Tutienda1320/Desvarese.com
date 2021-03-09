import { FormBuilder } from '@angular/forms';

export interface Item{
    nombre: string,
    tipo: string,
    descripcion: string,
    precio: number,
    ref: string,
    stock: number,
    ciudad: string,
    image?: File,
    imagePath?: string
}