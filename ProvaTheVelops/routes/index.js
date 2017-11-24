var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Instancia do banco de dados com conexao
var db = mongoose.connect('mongodb://localhost/TheVelopsBD2');

// Objeto que recebe a classe com o model de usuario
Obj_User = require('./../model/ModelUser');

// Tela Home
router.get('/', function (req, res, next) {
  res.render("index");
});

/**
 * Pega todos os usuarios e apresenta em JSON
 */
router.get('/users', function (req, res, next) {
  Obj_User.getUsers(function (err, users) {
    if (err) {
      throw err;
    }
    res.json(users);
  });
});

/**
 * Rota para adicionar usuario e retorno de resultados
 */
router.post('/users', function (req, res, next) {
  var nome = req.body;
  Obj_User.addUser(nome, function (err, nome) {
    if (err) {
      res.send('Não adicionado');
    }
    res.send('Adiconado com sucesso');
  });
});

/**
 * Rota para deleter usuario o localizando pelo id e retorno de resultados
 */
router.delete('/users/:_id', function (req, res, next) {
  var id = req.params._id;
  Obj_User.deleteUser(id, function (err, user) {
    if (err) {
      res.send('Usuario não encontrado');
    }
    res.send('Excluido com sucesso');
  });
});

/**
 * Rota para localizar usuario pelo id e retorno de resultados
 */
router.get('/users/:_id', function (req, res, next) {
  Obj_User.getUserById(req.params._id, function (err, user) {
    if (err) {
      res.send('Usuario não encontrado');
    }
    res.json(user);
  });
});

/**
 * Rota para alterar nome do usuario o localizando pelo id e retorno de resultados
 */
router.put('/users/:_id', function (req, res, next) {
  var id = req.params._id;
  var user = req.body.nome;
  Obj_User.updateUser(id, user, {}, function (err, user) {
    if (err) {
        res.send('Usuario não encontrado');
    }
    res.send('Usuario alterado');
  });
});


module.exports = router;
