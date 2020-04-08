const cote = require('cote')
const {User} = require('../models/user-model')
const knexConfig = require('../knexfile')
const {Model} = require('objection')
const Knex = require('knex')
const knex = Knex(knexConfig.development)

Model.knex(knex)

const userResponder = new cote.Responder({
    name: 'user Responder'
})

userResponder.on('createUser' , (req,cb) => {
    async function addUser(){
        await User.query().insert({
          username : req.username
      }).then(user => console.log('user added'))
  }addUser()
})