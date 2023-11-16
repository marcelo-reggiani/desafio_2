import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateEventController{
  async handle(request: Request, response: Response) {
    try {
        const { name, date, description, place, category } = request.body;

        const event = await prismaClient.event.create({
          data: {
            name,
            date,
            description,
            place,
            category
          },
        });
      return response.status(201).json(event);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}

export class ListEventController{
  async handle(request: Request, response: Response) {
    try {
      const list = await prismaClient.event.findMany();
      return response.status(200).json(list);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}
