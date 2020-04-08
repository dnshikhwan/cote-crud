const cote = require('cote')
const {Task} = require('../models/task-model')
const knexConfig = require('../knexfile')
const {Model} = require('objection')
const Knex = require('knex')
const knex = Knex(knexConfig.development)

Model.knex(knex)

const taskResponder = new cote.Responder({
    name: 'task Responder'
})

// taskResponder.on('*' , console.log)

taskResponder.on('list' , (req,cb) => {
    async function list(){
        const task = await Task.query()
        .then(task => console.log(task))
    }list()
})

taskResponder.on('create' , (req,cb) => {
    async function createTask(){
        await Task.query().insert({
            task_title : req.task
        }).then(task => console.log('task added'))
    }createTask()
})

taskResponder.on('listbyID' , (req,cb) => {
    async function listbyId(){
        let id = req.id
        const task = await Task.query().findById(id)
        .then(task => console.log(task))
    }listbyId()
})

taskResponder.on('update' , (req,cb) => {
    async function updatebyid(){
        let id = req.id
        const task = await Task.query().findById(id).patch({
            task_title : req.task
        }).then(task => console.log('task updated'))
    }updatebyid()
})

taskResponder.on('delete' , (req,cb) => {
    async function deletebyID(){
        let id = req.id
        const task = await Task.query().deleteById(id)
        .then(task => console.log('task deleted'))
    }deletebyID()
})
