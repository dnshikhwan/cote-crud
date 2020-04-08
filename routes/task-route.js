const express = require('express')
const router = express.Router()
const cote = require('cote')

const taskRequester = new cote.Requester({
    name: 'task Requester'
})

router.get('/' , (req , res) => {
    taskRequester.send({
        type: 'list'
    })
})

router.post('/' , (req , res) => {
    taskRequester.send({
        type: 'create',
        task: req.body.task_title
    }).then(task => res.json(task))
})

router.get('/:id' , (req ,res) => {
    taskRequester.send({
        type: 'listbyID',
        id : req.params.id
    })
})

router.post('/:id' , (req , res) => {
    taskRequester.send({
        type: 'update',
        id : req.params.id,
        task : req.body.task_title
    })
})

router.delete('/:id' , (req, res) => {
    taskRequester.send({
        type: 'delete',
        id: req.params.id
    })
})

module.exports = router