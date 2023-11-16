import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateCategoryController{
  async handle(request: Request, response: Response) {
    try {
        const { name, event_id } = request.body;

        const category = await prismaClient.category.create({
          data:{
            name,
          }
        });
      return response.status(201).json(category);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}

export class ListCategoryController{
  async handle(request: Request, response: Response) {
    try {
      const list = await prismaClient.category.findMany();
      return response.status(200).json(list);
    } catch (error) {
      return response.status(500).json({ error: 'A server error occurred' });
    }
  }
}
