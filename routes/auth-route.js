const express = require('express')
const router = express.Router()
const cote = require('cote')

const authRequester = new cote.Requester({
    name: 'auth requester'
})

router.post('/register' , (req , res ) => {
    authRequester.send({
        type: 'createUser',
        username : req.body.username
    })
})

module.exports = router