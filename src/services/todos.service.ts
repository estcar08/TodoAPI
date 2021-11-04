import { Todo, TodoCreationAttributes, TodoAttributes } from '../models/Todo';
import {  Types } from 'mongoose';


export class TodosService {
  
    async getTodos(): Promise<Array<TodoAttributes>> {
        try {
            return await Todo.find({});
        } catch (error) {
            throw new Error('Error getting comments');
        }
    }

    async addTodo(todoInfo: TodoCreationAttributes): Promise<TodoAttributes> {
        try {
            const todo = await Todo.create(todoInfo);
            return todo;
        } catch (error) {
            throw new Error('Error creating a todo');
        }
    }

    async getTodoById(id:string): Promise<TodoAttributes> {
        try {
            const valid = Types.ObjectId.isValid(id);
            if(valid){
                const objId = new Types.ObjectId(id);
                const res = await Todo.exists({ _id: objId });
                console.log(res);
                if(res){ 
                    const todo = await Todo.findById(id);
                    return todo!;
                }else {
                    throw new Error('Todo not found');
                }
            }else{
                throw new Error('Invalid Id Object');
            }
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    async deleteTodo(id:string): Promise<String> {
        try {
            const valid = Types.ObjectId.isValid(id);
            if(valid){
                const todo = await Todo.findByIdAndRemove(id);
                if(todo!== null){
                    return "Todo Deleted";
                } else { return "Todo not found"; }
            }
            return "Invalid Id Object";
        } catch (error) {
            throw new Error('Error deleting todo');
        }
    }

    async updateTodo(text: string,id:string): Promise<String> {
        try {
            const todo = await Todo.findById(id);
            if(todo!== null){
                todo.text = text;
                todo.save();
                return "Todo Updated";
            }else { return "Todo not found"; }
        } catch (error) {
            throw new Error('Error updating todo');
        }
    }
}
