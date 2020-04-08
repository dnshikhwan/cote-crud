const {Model} = require('objection')

class User extends Model{
    static get tableName(){
        return 'userTable'
    }
    static get jsonSchema(){
        return{
            type: 'object',
            required: ['username'],

            properties: {
                id: {type : 'integer'},
                username : { type: 'string' ,minLength: 4 , maxLength : 255}
            }
        }
    }
}



module.exports = {
    User
}