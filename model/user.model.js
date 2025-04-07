const fs = require("fs");
const listUser = require("./../data/user.json");
const USER_FILE = './data/user.json';
let currentId = listUser.length >0 ? Math.max(...listUser.map(u => u.id)) :0 ;
if(!currentId){
    currentId = 0;
}

const save = () => {
    fs.writeFileSync(USER_FILE, JSON.stringify(listUser));
}

const getAll = () => {
    return listUser;
};

const getById = (id) => {
    return listUser.find(user => user.id == parseInt(id));
};

const create = (user) => {
    let newUser = {id: ++currentId};
    if (user.email){
        newUser.email = user.email
    }
    if (user.password){
        newUser.password = user.password;
    }
    listUser.push(newUser);
    save();
    return newUser
};

const getByIEmail = (email) => {
    return listUser.find(user => user.email === email)
}

const update = (id, user) => {
    const userToUpdate = listUser.find(user => user.id == id);
    if (!userToUpdate) return false;
    userToUpdate.email = user.email ? user.email:userToUpdate.email;
    userToUpdate.password = user.password ? user.password : userToUpdate.password;
    save();
};

const remove = (id) => {
    listUser = listUser.filter(user => user.id !== id);
    save();
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByIEmail
};