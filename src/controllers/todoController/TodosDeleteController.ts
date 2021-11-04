import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { TodosService } from 'src/services'; // This should not be here

export class TodosDeleteController implements Controller {
    constructor(private service: TodosService) {};

    async run(req: Request, response: Response): Promise<void> {
        const { id } = req.params;
        try {
            const comment = await this.service.deleteTodo(id);
            response.status(httpStatus.CREATED).json(comment);
        } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
