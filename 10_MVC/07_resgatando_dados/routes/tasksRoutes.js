import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.get('/add', TaskController.createTast);
router.post('/add', TaskController.createTaskSave);
router.get('/', TaskController.showTasks);

export default router;
