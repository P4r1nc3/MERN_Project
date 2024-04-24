import Task from '../models/task.model.js';

// get tasks
export const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        next(error);
    }
};

// create task
export const createTask = async (req, res, next) => {
    const { description } = req.body;
    const newTask = new Task({
        description,
        user: req.user.id
    });

    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        next(error);
    }
};

// update task
export const updateTask = async (req, res, next) => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            req.body,
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "No task found with this ID for the user." });
        }
        res.json(updatedTask);
    } catch (error) {
        next(error);
    }
};

// delete task
export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!task) {
            return res.status(404).json({ message: "No task found with this ID for the user." });
        }
        res.status(200).json({ message: "Task deleted successfully." });
    } catch (error) {
        next(error);
    }
};