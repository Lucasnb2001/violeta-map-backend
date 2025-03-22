const LocalSeguro = require('../models/localSeguro.model.js');

const getLocais = async (req, res) => {
    try{
      const locais = await LocalSeguro.find({});
      res.status(200).json(locais);
    }catch (error){
      res.status(500).json({message: error.message});
    }
}

const getLocal =  async (req, res) => {
    try{
      const {id} = req.params;
      const local = await LocalSeguro.findById(id);
      res.status(200).json(local);
    }catch (error){
      res.status(500).json({message: error.message});
    }
}

const createLocal = async (req, res) => {
  try{
    const localSeguro = await LocalSeguro.create(req.body);
    res.status(200).json(localSeguro);
  } catch (error){
    res.status(500).json({message: error.message});
  }
}

const updateLocal = async (req, res) => {
    try{
      const {id} = req.params;
      const local = await LocalSeguro.findByIdAndUpdate(id, req.body);
      
      if(!local){
        return res.status(404).json({message: "Local não encontrado"});
      }
  
      const localAt = await LocalSeguro.findById(id);
      res.status(200).json(localAt);
    }catch (error){
      res.status(500).json({message: error.message});
    }
}

const deleteLocal = async (req, res) => {
    try{
      const {id} = req.params;
      await LocalSeguro.findByIdAndDelete(id);
      res.status(200).json({message: "Local removido"});
    }catch (error){
      res.status(500).json({message: error.message});
    }
  }

module.exports = {
    getLocais,
    getLocal,
    createLocal,
    updateLocal,
    deleteLocal
};