import express from "express"
import { createTask, getTask } from "../Controller/TaskController"

const router = express.Router()

router.route("/create-task").post(createTask)
router.route("/get-task").get(getTask)
router.route("/get-task").get(getTask)

export default router