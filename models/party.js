import main from './../src/main'

const mongoose = require("mongoose")

const {Schema} = mongoose

const {serviceSchema} = require("./Service")

const partySchema = new Schema({
 
  title:{
    type:String,
    required: true,
  },

  price:{
    type:Number,
    required: true,
  },

  marca:{
    type:String,
    required: true,
  },


},
{ timestamps: true }
)

const Party = mongoose.model( "Party", partySchema)

module.exports = Party;