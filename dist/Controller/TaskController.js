"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = exports.createTask = void 0;
const TaskModel_1 = __importDefault(require("../model/TaskModel"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const tasks = yield TaskModel_1.default.create({ task, priority });
        return res.status(201).json({
            message: "task has finally been created",
            data: tasks
        });
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        });
    }
});
exports.createTask = createTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield TaskModel_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Viewing all Task",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be Viewed",
            error: error.message
        });
    }
});
exports.getTask = getTask;
