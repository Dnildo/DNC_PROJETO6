
const mongoose = require("mongoose")

const { Schema } = mongoose;

const serviceSchema = new Schema({ 
titulo{
    type:String,
    require: true,
},
price{
    type: Number,
    require: true,
}
marca{
    type:String,
    require: true,
}
}

{timestamps: true}

);

const Service = mongoose.model("Service", serviceSchema)

module.export = {
    Service,
    serviceSchema,
};