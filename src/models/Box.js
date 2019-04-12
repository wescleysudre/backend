const mongoose = require('mongoose');

const Box = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File'}]
    }, 
    {
        timestamps: true //cria campos para controlar as datas de criação e alteração do registro
    }
);

module.exports = mongoose.model('Box', Box);