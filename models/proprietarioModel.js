const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProprietarioSchema = new Schema({
    _id: {
        type: Number,
        unique: true
    },
    nome: String,
    cnpj: Number,
    rntrc: Number,
    caminhao: [{ 
        type: Number,
        ref: 'caminhao'
    }],
}, { 
    versionKey: false 
    }
);

ProprietarioSchema.pre('save', async function(next){
    this._id = this.cnpj;
    
    next();
});

module.exports = mongoose.model('proprietario', ProprietarioSchema);