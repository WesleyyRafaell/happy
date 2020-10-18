import { Router } from 'express';
import multer from 'multer'; 

import uploadConfig from './config/upload';
import OrpanagesController from './controllers/OrpanagesController';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrpanagesController.index);
routes.get('/orphanages/:id', OrpanagesController.show);
routes.post('/orphanages', upload.array('images'), OrpanagesController.create);


export default routes; 