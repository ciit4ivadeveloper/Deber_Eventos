const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const pais_schema = new Schema({
    nombre: req_string,
})

const model = mongoose.model('pais', pais_schema)
module.exports = model
