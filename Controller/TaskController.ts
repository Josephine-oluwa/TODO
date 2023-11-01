import {Request, Response} from "express"
import TaskModel from "../model/TaskModel"



export const createTask = async (req: Request, res: Response)=> {
    try {
        const {task, priority } = req.body

        const tasks  = await TaskModel.create({task, priority})

        return res.status(201).json({
            message: "task has finally been created",
            data: tasks
        })
    } catch (error:any) {
        return res.status(404).json({
            message: error.message
        })
    }
}


export const getTask = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const tasked = await TaskModel.find().sort({ createdAt: -1 });
      return res.status(200).json({
        message: "Viewing all Task",
        data: tasked,
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "Task cannot be Viewed",
        error: error.message
      });
    }
  };