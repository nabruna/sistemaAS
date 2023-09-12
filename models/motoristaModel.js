const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MotoristaSchema = new Schema({
    _id: {
        type:Number,
        unique: true
    },
    nome: String,
    cnh: Number,
    telefone: Number,
    cpf: Number,
    caminhao: {
        type: Number,
        ref:'caminhao'
    }
}, { 
    versionKey: false 
    }
);

MotoristaSchema.pre('save', async function(next){
    this._id = this.cpf;
    
    next();
});

module.exports = mongoose.model('motorista', MotoristaSchema);