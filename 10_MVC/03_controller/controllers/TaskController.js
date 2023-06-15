import Task from '../models/Task.js';

class TaskController {

    static createTast(req, res) {
        res.render('tasks/create');
    }
}

export default TaskController;