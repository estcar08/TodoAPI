import { Router, Request, Response } from 'express';
import { todosGetController,todosPostController, todosGetByIdController,todosDeleteController,todosUpdateController  } from '../controllers'; // This should not be here
import { middleware } from '../middlewares'; 

export const register = (router: Router) => {

    /**
     * GET /
     * initial menssage
     */
     router.get('/', (req: Request, res: Response) => { res.send('Welcome to TODO API BY C.E.') });

    /**
     * GET /todos
     * Get all todos
     */
    router.get('/todos', (req: Request, res: Response) => todosGetController.run(req, res));

    /**
     * POST /todos
     * Create a new todo
     */
    router.post('/todos',  middleware.checkTodoCreate,(req: Request, res: Response) => todosPostController.run(req, res));

    /**
     * GET /todos/:id
     * Get by id
     */
    router.get('/todos/:id', (req: Request, res: Response) => todosGetByIdController.run(req, res));

     /**
     * DELETE /
     * Delete a todo
     */
    router.delete('/todos/:id',  (req: Request, res: Response) => todosDeleteController.run(req, res));

    /**
     * PUT /
     * Update a todo
     */
    router.put('/todos/:id', middleware.checkTodoUpdate,(req: Request, res: Response) => todosUpdateController.run(req, res));

    /**
     * GET *
     * validated endpoint
     */
    router.get('*', (req: Request, res: Response) => { res.send('The Endpoint is no valid') });

};