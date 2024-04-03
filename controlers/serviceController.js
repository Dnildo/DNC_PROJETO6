
import product.mock from "../src/mock/product.mock"
import ProductDetail from "../src/components/ProductDetail/ProductDetail";
const { Service: ServiceModel } = require("../models/Service");

const serviceController = {

    create: async (req, res) => {
        try {
            const service = {
                titulo: req.body.titulo,
                price: req.body.price,
                marca: req.body.cor,
            };

            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: "Serviço criado com sucesso!"});   
        } catch(error) {
            console.log(error);
        }
},

getALL: async (req, res) => {
 try {
    const services = await ServiceModel.find();
    res.json(services);
} catch (error) {
    console.log(error);
     }
  },
  get: async(req, res) => {
    try {
        const id = req.params.id
        const service = await ServiceModel.findById(id)
if(!service) {
   res.status(404).json({msg: "Serviço não encontrado"})
   return;

}

    res.json(service);

    } catch (error) {
        console.log(error)

    }
  },
  delete: async (req, res) => {
  try {
    const id = req.params.id;

    const service = await ServiceModel.findById(id);

    if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado."})
        return;
    }
    const deletedService = await ServiceModel.findByIdAndDelete(id)
res.status(200).json({deletedService, msg: "Serviço excluído com sucesso"});

  } catch (error) {
    console.log(error);
  }

  },
  upadate:
  async (req, res) => {

    const id = req.params.id;

        const service = {
            titulo: req.body.titulo,
            price: req.body.price,
            cor: req.body.cor,
    };

    const updatedService = await ServiceModel.findByIdAndDelete(id, service)

    if (!updatedService) {
        res.status(404).json({ msg: "Serviço não encontrado."});
        return;
    }

    res.status(200).json({service, msg: "Serviço atualizado com sucesso."})
  },
};

module.exports = serviceController;