"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = require("../Controller/TaskController");
const router = express_1.default.Router();
router.route("/create-task").post(TaskController_1.createTask);
router.route("/get-task").get(TaskController_1.getTask);
router.route("/get-task").get(TaskController_1.getTask);
exports.default = router;
