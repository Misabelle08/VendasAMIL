import mongoose from 'mongoose';

const VendaMensalSchema = new mongoose.Schema({
    mes: Number,
    valor: Number
});

export default mongoose.model('VendaMensal', VendaMensalSchema);
