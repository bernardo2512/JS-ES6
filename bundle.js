"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item === 4;
}); //====================== //======================

var arr2 = [1, 3, 4, 5, 6];
var newArr2 = arr2.map(function (item) {
  return item * 2;
});

var teste = function teste() {
  return {
    nome: 'Bernardo'
  };
};

var teste2 = function teste2() {
  return {
    nome: 'Bernardo Luz',
    dataNasc: '25/12/2000'
  };
};

console.log(teste2); //===============Desestruturação de Objetos ===================

var usuario = {
  nome: 'Bernardo',
  idade: 19,
  endereco: {
    cidade: 'Florianopolis',
    estado: 'SC'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarNome(usuario); //==================== Rest/Spread ================
