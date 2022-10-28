const Contato = require('../models/contatoModel')
const { ObjectId } = require('bson')

async function criar(req, res) {
    const contato = new Contato(req.body);
    const erros = [];
    await contato.save().catch(error => {
        if (error.errors['nome'])
            erros.push(error.errors['nome'].message);
        if (error.errors['fone'])
            erros.push(error.errors['fone'].message);
    });
    if (erros) {
        return res.status(422).json(erros);
    }
    return res.status(201).json(contato);
}

async function listar(req, res) {
    const contatos = await Contato.find({})
        .then(lista => { return lista });
    return res.json(contatos);
}

async function consultarPeloId(req, res) {
    const contato = await Contato.findOne({ _id: ObjectId(req.params.id) })
        .then(localizado => { return localizado });
    return res.json(contato);
}

async function atualizar(req, res) {
    await Contato.updateOne({ _id: ObjectId(req.params.id) }, req.body);
    return res.status(204).end();
}

async function remover(req, res) {
    await Contato.deleteOne({ _id: ObjectId(req.params.id) })
    return res.status(204).end();
}

module.exports = { criar, listar, consultarPeloId, atualizar, remover }