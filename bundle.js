"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
//rest

var usuario1 = {
  nome: 'bernardo',
  idade: 19,
  empresa: 'Koerich'
};

var nome1 = usuario1.nome1,
    resto = _objectWithoutProperties(usuario1, ["nome1"]);

var arr3 = [1, 2, 3, 4];
var a = arr3[0],
    b = arr3[1],
    c = arr3.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 3, 4)); //spread

var arr4 = [1, 2, 3];
var arr5 = [4, 5, 6];
var arr6 = [].concat(arr4, arr5);
var usuario2 = {
  nome2: "Bernardo",
  idade1: 19,
  empresa1: 'Koerich'
};

var usuario3 = _objectSpread(_objectSpread({}, usuario2), {}, {
  nome: 'Carlos'
});
