const Produit = require('./../model/product.model.js');


const getAll = (req, res, next) => {
    res.status(200).json({ message: "Récupération de tous les produits" });
};

const getById = (req, res, next) => {
    const produit = Produit.getById(req.params.id);
    res.status(200).json(produit);
};


const create = (req, res, next) => {
    const result = Produit.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });
    res.status(201).json({ message: "Produit créé avec succès" });
};


const update = (req, res, next) => {
    const result = Produit.update(req.params.id, req.body);
    res.status(201).json({ message: "Produit mis à jour avec succès" });
};

const remove = (req, res, next) => {
    const result = Produit.remove(req.params.id);
    res.status(200).json({ message: "Produit supprimé avec succès" });
};

module.exports = { getAll, getById, create, update, remove };
