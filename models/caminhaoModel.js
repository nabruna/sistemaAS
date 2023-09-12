const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaminhaoSchema = new Schema({
    _id:{
        type: Number,
        unique: true
    },
    marca: String,
    modelo: String,
    placa: String,
    renavam: Number,
}, { 
    versionKey: false }
);

CaminhaoSchema.pre('save', async function(next){
    this._id = this.renavam;
    
    next();
});

module.exports = mongoose.model('caminhao', CaminhaoSchema);