import main from './../src/main'
const mongoose = require("mongoose")

async function master(){
    try{
        mongoose.set("strictQuery", true);
            
        await mongoose.connect(
            "mongodb+srv://philosophia469:De123456@cluster0.fktg75g.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Conectado ao banco");
    }catch (error){
        console.log(`Erro:${error}`);
        }
    }

    module.exports = master;