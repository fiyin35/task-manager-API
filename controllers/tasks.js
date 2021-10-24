const Task = require('../models/Task');
const asyncwrapper = require('../middleware/async')
const {customError} = require('../errors/custom-error')

const getAllTasks = asyncwrapper( async (req, res) => {
    
        const tasks = await Task.find({})
        res.status(201).json({ tasks })
    })

const createTask = asyncwrapper( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task, msg: `Task created successfully` })
  
} )

const getTask = asyncwrapper( async (req, res) => {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task) {
            return next(customError(`no task with id: ${taskID}`, 404))
        }
        res.status(200).json({id: req.params.id})    
      
} )

const updateTask = asyncwrapper( async (req, res) => {
    
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID}, req.body, {
            new: true,
            runValidators: true
        })
        if(!task) {
            return next(customError(`no task with id: ${taskID}`, 404))
        }
        res.status(200).json({msg: `task updated successfully`})
   
}) 

const deleteTask = asyncwrapper(async (req, res) => {
   
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task) {
            return next(customError(`no task with id: ${taskID}`, 404))
        }
        res.status(200).json({msg: `task with id : ${taskID} deleted successfully`})
        res.status(500).json({msg: err})
} )



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}



