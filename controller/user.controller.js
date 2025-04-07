const User = require('./../model/user.model.js')
const bcrypt = require('bcrypt');

const getAll = (req,res,next)=>{
    res.status(200).json({message: "récuperation user"});
}
const create = (req,res,next)=>{
    let result = User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10)
    });
    res.status(201).json({message: "création user"});
}
const getById = (req,res,next) => {
    let result = UserActivation.getById(req.params.id);
    res.status(200).json(result);
}
const remove = (req,res,next)=>{
    let result = User.remove(req.body)
    res.status(201).json({message: "remove user"});
}
const update = (req,res,next)=>{
    let result = User.update(req.body)
    res.status(201).json({message: "update user"});
}

module.exports = {getAll, create , getById};