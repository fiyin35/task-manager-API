const express = require('express');
const router = express.Router();

const { getAllTasks,
        createTask,
        updateTask, 
        deleteTask, 
        getTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router

// MongoDB Details//
//m001-mongodb-basics
//m001-student
//fiyin
//Password