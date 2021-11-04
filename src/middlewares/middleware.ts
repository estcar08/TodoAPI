import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export class Middleware {
    checkTodoCreate(request: Request, response: Response, next: NextFunction) {
        const { text } = request.body;
        if (text && text.trim() != "") {
            next();
        } else {
            response.status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({ message: "text param is requiered and can not be empty" });
        }
    }

    checkTodoUpdate(request: Request, response: Response, next: NextFunction) {
        const { text } = request.body;
        if (text && text.trim() != "") {
            next();
        } else {
            response.status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({ message: "text param is requiered and can not be empty" });
        }
    }

    checkTodoDelete(request: Request, response: Response, next: NextFunction) {

        if (request.params.id !==  "") {
            next();
        } else {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Invalid Id Object' });
        }
    }
}
