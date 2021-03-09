import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

interface IPhoto extends Document{
    title: string;
    descripcion: string;
    imagePath: string;
}

export default model<IPhoto>('Photo', schema);