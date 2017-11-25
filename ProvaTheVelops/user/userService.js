var mongoose = require('mongoose');

// Criação da modelo
var usersSchema = mongoose.Schema({
   nome: {
       type: String,
       require: true
   }
});

// Colecao com usuarios
var User = module.exports = mongoose.model('users', usersSchema);

/**
 * Pega todos os usuários do banco de dados e retorna no @callback o resultado
 */
module.exports.getUsers = function (callback, limit) {
   User.find(callback).limit(limit);
}

/**
 * Adiciona usuario no banco de dados com o @nome e retorna no @callback o resultado
 */
module.exports.addUser = function (nome, callback) {
   User.create(nome, callback);
}

/**
 * Deleta usuario no banco de dados pelo @id e retorna no @callback o resultado
 */
module.exports.deleteUser = function (id, callback) {
   var query = {_id: id};
   User.findOneAndRemove(query, callback);
}

/**
 * Pega usuário do banco de dados pelo @id e retorna no @callback o resultado
 */
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

/**
 * Altera o nome do usuario no banco de dados pelo @id passando valores pelo @user e retorna no @callback o resultado
 */
module.exports.updateUser = function(id, user, options, callback){
    var query = {_id: id};
    var update = {
        nome: user
    }
    User.findOneAndUpdate(query, update, options, callback);
}