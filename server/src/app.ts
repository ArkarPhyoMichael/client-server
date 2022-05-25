import express, { Request } from 'express';
import { serverPort } from './config';
import cors from 'cors'
import multer, { FileFilterCallback } from 'multer';
import {v4} from 'uuid'
import { GlobalErrorHandler } from './middlewares/errorHandler';
import { userRouter } from './routes/user';
import { categoryRouter } from './routes/category';
import {join} from 'path'
import { galleryRouter } from './routes/gallery';

const app = express();



app.use(express.json({limit:"100mb"}));
app.use(express.urlencoded({extended:true}))
app.use("gallery",express.static(join(__dirname,"..","public","gallery")));
app.use(express.static(join(__dirname,"..","public")));
app.use(cors())
const storage = multer.diskStorage({
    destination:(_req,_file,cb)=>{
        cb(null,`${join(__dirname,"..","public","gallery")}`)
    },
    filename:(_req,file,cb)=>{
        cb(null,`${v4()}_${file.originalname}`)
    }
})
const filter =(_req:Request,file:any,cb:FileFilterCallback)=>{
    if(file.mimetype==="image/jpg" || "image/png" || "image/jpeg" ){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

app.use(multer({storage:storage,fileFilter:filter}).fields([{ name: 'icon', maxCount: 1 }, { name: 'img', maxCount: 20}]));
app.listen(serverPort,()=>{
    console.log(`Server is running at http://localhost:${serverPort}`);
    
    // user
    app.use('/api/user',userRouter)
    app.use('/api/category',categoryRouter)
    app.use('/api/gallery',galleryRouter)
    app.use(GlobalErrorHandler)
})