import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreatePlaceController{
  async handle(request: Request, response: Response) {
    try {
        const { name, event_id } = request.body;

        const place = await prismaClient.place.create({
          data:{
            name,
          }
        });
      return response.status(201).json(place);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}

export class ListPlaceController{
  async handle(request: Request, response: Response) {
    try {
      const list = await prismaClient.place.findMany();
      return response.status(200).json(list);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}
