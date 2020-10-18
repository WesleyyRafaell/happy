import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import orphanageView from '../views/orphanages_views';


import Orpanage from '../models/Orphanage';


export default {
    async show(req:Request, res:Response){
        const { id } = req.params;

        const orphanagesRepository = getRepository(Orpanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id,{
            relations: ['images']
        });

        return res.json(orphanageView.render(orphanage));

    },
    async index(req:Request, res:Response){
        const orphanagesRepository = getRepository(Orpanage);

        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        return res.json(orphanageView.renderMany(orphanages));

    },
    async create(req:Request, res:Response) {
        const {
        name,
        latitude,
        longitude,
        about,
        instructions, 
        opening_hours,
        open_on_weekends
    } = req.body;

    const orphanagesRepository = getRepository(Orpanage);

    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map(image => {
        return {
            path: image.filename
        }
    })


    const orpanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions, 
        opening_hours,
        open_on_weekends,
        images
    });

    await orphanagesRepository.save(orpanage);


    return res.status(201).json(orpanage);
    }
};