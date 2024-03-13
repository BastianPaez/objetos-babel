"use strict";

var _impuestos = require("./impuestos.js");
var _cliente = require("./cliente.js");
var impuestos1 = new _impuestos.Impuestos();
impuestos1.setMontoBrutoAnual = 1000;
impuestos1.setDeducciones = 250;
console.log(impuestos1);
var cliente1 = new _cliente.Cliente();
cliente1.setNombre = 'Bastián';
cliente1.setImpuesto = impuestos1;
console.log(cliente1);
console.log(cliente1.calcularImpuesto());