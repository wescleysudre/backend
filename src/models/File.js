const mongoose = require('mongoose');

const File = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true
        },
        files: []
    }, 
    {
        timestamps: true, //cria campos para controlar as datas de criação e alteração do registro
        toObject: { virtuals: true },
        toJSON: { virtuals: true}
    }
);

File.virtual('url').get(function() {
    const url = process.env.URL || 'http://localhost:3333'
    return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);