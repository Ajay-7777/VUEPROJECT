const mongoose =require('mongoose');
const  modelSchema = new mongoose.Schema({
    cellData :{
        type: Object
    }
})
module.exports = mongoose.model('model',modelSchema);