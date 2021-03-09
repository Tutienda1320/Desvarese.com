import {Request, Response} from 'express';
import Item from '../models/Item';
import fs from 'fs-extra';
import path from 'path';

export async function createItem(req: Request, res:Response):Promise<Response> {
    
    const {nombre, tipo, descripcion, precio, ref, stock, ciudad} = req.body;
    const newItem = {
        nombre,
        tipo,
        descripcion,
        precio,
        ref,
        stock,
        ciudad,
        imagePath: req.file.path
    }
    
    const item = new Item(newItem);
    await item.save();

    return res.json({
        message: 'Item almacenado',
        item
    });
    
}