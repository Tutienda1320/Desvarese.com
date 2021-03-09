import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    nombre: String,
    tipo: String,
    descripcion: String,
    precio : Number,
    ref: String,
    stock: Number,
    ciudad: String,
    imagePath: String
});

interface IItem extends Document{
    nombre: string;
    tipo: string;
    descripcion: string;
    precio: number;
    ref : string;
    stock: number;
    ciudad: string;
    imagePath: string;
}

export default model<IItem>('Item', schema);