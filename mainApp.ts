import express, { Application, Request, Response } from "express";
import cors from "cors";
import task from "../TaskBE/Router/taskRouter"

export const mainApp = (app: Application) => {
  app.use(cors());
  app.use(express.json());

//   app.use("/api", auth)
  app.use("/api", task)

  app.get("/", (req: Request, res: Response) => {
    try {
      res.status(200).json({
        message: "Welcome Page!!!",
      });
    } catch (error) {
      res.status(404).json({
        message: "Root Error",
      });
    }
  });
};
