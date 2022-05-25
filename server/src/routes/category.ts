import {Router} from 'express'
import { body } from 'express-validator';
import { Categories, createCategory, deleteCategory, getCategory, updateCategory } from '../conrollers/cateogry';
import { IsAuth } from '../middlewares/auth';

export const categoryRouter = Router();

categoryRouter.post('/create',IsAuth,[
    body('name').notEmpty()
],createCategory);

categoryRouter.get('/all',Categories);

categoryRouter.post('/update',[
    body('name').notEmpty(),
    body('icon').notEmpty(),
    body('id').notEmpty()
],IsAuth,updateCategory)

categoryRouter.post("/delete",[
    body('id').notEmpty()
],deleteCategory);

categoryRouter.post("/get",[
    body('id').notEmpty()
],getCategory);


