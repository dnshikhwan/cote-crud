
const {Model} = require('objection')


class Task extends Model{
    static get tableName(){
        return 'taskTable'
    }
}

module.exports = {
    Task
}