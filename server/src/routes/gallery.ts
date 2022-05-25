import { Router } from 'express'
import { body } from 'express-validator';

import { createGallery, Galleries,updateGallery,deleteGallery, getGallery } from '../conrollers/Gallery';
import { IsAuth } from '../middlewares/auth';

export const galleryRouter = Router();

galleryRouter.get('/all', Galleries);
galleryRouter.post('/create', IsAuth, [
    body('name').notEmpty(),
   
    body('era').notEmpty(),
    body('type').notEmpty(),
    body('description').notEmpty(),
    body('location').notEmpty(),
    body('categoryId').notEmpty()
], createGallery)
galleryRouter.post('/update', IsAuth, [
    body('name').notEmpty(),
    body('id').notEmpty(),
    
    body('era').notEmpty(),
    body('type').notEmpty(),
    body('description').notEmpty(),
    body('location').notEmpty(),
    body('categoryId').notEmpty()
], updateGallery)

galleryRouter.post('/delete', IsAuth, [

    body('id').notEmpty(),

], deleteGallery)

galleryRouter.get("/:id",getGallery)


