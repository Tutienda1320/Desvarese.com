import { Router } from 'express';
import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from '../controllers/photo.controller';
import multer from '../libs/multer';
import {createItem} from '../controllers/item.controller';
const router = Router();

router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto)
    
router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

router.route('/items')
    .post(multer.single('image'), createItem)

export default router; 