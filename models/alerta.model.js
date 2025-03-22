const mongoose = require("mongoose");

const AlertaSchema = mongoose.Schema(
  {
    descricao: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Alerta = mongoose.model("Alerta", AlertaSchema);
module.exports = Alerta;
