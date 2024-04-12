import { NextFunction, Request, Response } from "express";
import { OK } from "../config/httpErrors";


const textTodo = (req: Request, res: Response, next: NextFunction) => {
    res.status(OK.code).json({messageForFront: "You are on todo route"})

}

const todoController = {
    test: textTodo
}

export default todoController