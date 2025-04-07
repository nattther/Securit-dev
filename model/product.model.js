const fs = require("fs");
const listProduit = require("./../data/product.json");
const PRODUIT_FILE = './data/product.json';

let currentId = listProduit.length > 0 ? Math.max(...listProduit.map(p => p.id)) : 0;
if (!currentId) {
    currentId = 0;
}


const save = () => {
    fs.writeFileSync(PRODUIT_FILE, JSON.stringify(listProduit));
};


const getAll = () => {
    return listProduit;
};

const getById = (id) => {
    return listProduit.find(produit => produit.id == parseInt(id));
};


const create = (produit) => {
    let newProduit = { id: ++currentId };
    if (produit.name) {
        newProduit.name = produit.name;
    }
    if (produit.price) {
        newProduit.price = produit.price;
    }
    if (produit.description) {
        newProduit.description = produit.description;
    }
    listProduit.push(newProduit);
    save();
    return newProduit;
};

const update = (id, produit) => {
    const produitToUpdate = listProduit.find(p => p.id == id);
    if (!produitToUpdate) return false;
    produitToUpdate.name = produit.name ? produit.name : produitToUpdate.name;
    produitToUpdate.price = produit.price ? produit.price : produitToUpdate.price;
    produitToUpdate.description = produit.description ? produit.description : produitToUpdate.description;
    save();
    return true;
};

const remove = (id) => {
    listProduit = listProduit.filter(produit => produit.id != id);
    save();
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
