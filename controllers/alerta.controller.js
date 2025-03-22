const Alerta = require('../models/alerta.model')

const getAlertas = async (req, res) => {
    try{
        const alertas = await Alerta.find({});
        res.status(200).json(alertas);
    }catch (error){
    res.status(500).json({message: error.message});
    }
}

const getAlerta = async (req, res) => {
    try{
      const {id} = req.params;
      const alerta = await Alerta.findById(id);
      res.status(200).json(alerta);
    }catch (error){
      res.status(500).json({message: error.message});
    }
}

const createAlerta = async (req, res) => {
    try{
      const alerta = await Alerta.create(req.body);
      res.status(200).json(alerta);
    } catch (error){
      res.status(500).json({message: error.message});
    }
}

const updateAlerta = async (req, res) => {
  try{
    const {id} = req.params;
    const alerta = await Alerta.findByIdAndUpdate(id, req.body);
    
    if(!alerta){
      return res.status(404).json({message: "Alerta não encontrado"});
    }

    const alertaAt = await Alerta.findById(id);
    res.status(200).json(alertaAt);
  }catch (error){
    res.status(500).json({message: error.message});
  }
}

const deleteAlerta = async (req, res) => {
  try{
    const {id} = req.params;
    await Alerta.findByIdAndDelete(id);
    res.status(200).json({message: "Alerta removido"});
  }catch (error){
    res.status(500).json({message: error.message});
  }
}

module.exports = {
    getAlertas,
    getAlerta,
    createAlerta,
    updateAlerta,
    deleteAlerta
};