const mongoose = require('mongoose');

const LocalSeguroSchema = mongoose.Schema(
    {
        name:{ type: String, required: true },
        tipo:{ type: String },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    { timestamps: true }
);

const LocalSeguro = mongoose.model("LocalSeguro", LocalSeguroSchema);
module.exports = LocalSeguro;