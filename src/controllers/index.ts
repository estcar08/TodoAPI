import { TodosGetController } from './todoController/TodosGetController';
import { TodosPostController } from './todoController/TodosPostController';
import { TodosGetByIdController } from './todoController/TodosGetByIdController';
import { TodosDeleteController } from './todoController/TodosDeleteController';
import { TodosUpdateController } from './todoController/TodosUpdateController';
import { todosService} from '../services'; // This should not be here

export const todosGetController = new TodosGetController(todosService);
export const todosPostController = new TodosPostController(todosService);
export const todosGetByIdController = new TodosGetByIdController(todosService);
export const todosDeleteController = new TodosDeleteController(todosService);
export const todosUpdateController = new TodosUpdateController(todosService);