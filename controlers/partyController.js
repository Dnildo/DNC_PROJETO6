
const PartModel = require("../modelso/Party");

const checkParyBudget = (budget, services) => {

   const priceSum = services.reduce((sum, service) => sum + service.price, 0);
if(priceSum > budget) {
   return false;
  }

  return true;
};



const partyController = {
     create: async(req, res) => {
    
        try {
        
           const party = {
            title: req.body.title,
            price: req.body.price,
            marca: req.body.marca,
            
           }

           if(party.services && !checkPartyBudget(party.budget, party.services)){
             res.status(406).json({msg:"Saldo insuficiente"}) 
              return
            }
            const.status(201).json({response, msg: "Item adiquirido com sucesso"})

    }, catch (error) {
           console.log(error)
    },
   },
   getAll: async (req, res) => {
      try {
         const parties = await PartyModel.find();
      res.json(parties);
      } catch (error) {
         console.log(error);
      }
   },

   get: async (req, res) => {
      try {
        
         const id = req.params.id
      
         const party = await PartModel.findById(id)

         if(!party) {
            res.status(404).json({msg: "item não econtrado."})

      }

      res.json(party) 

      } catch (error) {
         console.log(error)
      } 
   }
};

module.exports = partyController;