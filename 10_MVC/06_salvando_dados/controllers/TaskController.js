import Task from '../models/Task.js';

class TaskController {

    static createTast(req, res) {
        res.render('tasks/create');
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }
        await Task.create(task);
        res.redirect('/tasks');
    }

    static showTasks(req, res) {
        res.render('tasks/all');
    }
}

export default TaskController;