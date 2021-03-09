import {Request, Response} from 'express';
import Photo from '../models/Photo';
import fs from 'fs-extra';
import path from 'path';

export async function createPhoto(req: Request, res: Response):Promise<Response>{
    
    const {title, description} = req.body;
    
    const newPhoto={
        title:title,
        description:description,
        imagePath: req.file.path
    };

    const photo = new Photo(newPhoto);
    await photo.save();
    
    return res.json({
        message: 'Photo successfully saved',
        photo
    });
}

export async function getPhotos(req: Request, res: Response):Promise<Response>{
    const photos = await Photo.find();
    return res.json(photos);
}

export async function getPhoto(req: Request, res: Response):Promise<Response> {
    const photo = await Photo.findById(req.params.id);
    return res.json(photo);
    
}

export async function updatePhoto(req:Request, res: Response):Promise<Response> {
    const {id} = req.params;
    const {title, description} = req.body;

    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, {new:true});
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    })
    
}

export async function deletePhoto(req:Request, res:Response):Promise<Response> {
    const {id} = req.params;
    const photo = await Photo.findByIdAndDelete(id);
    if(photo){
        fs.unlink(path.resolve(photo.imagePath));
    }
    return res.json({
        message: 'Photo Deleted',
        photo
    });
    
}