import {Impuestos} from './impuestos.js';
import {Cliente} from './cliente.js';

const impuestos1 = new Impuestos();
impuestos1.setMontoBrutoAnual = 1000;
impuestos1.setDeducciones = 250;

console.log(impuestos1)

const cliente1 = new Cliente();
cliente1.setNombre = 'Bastián';
cliente1.setImpuesto = impuestos1;

console.log(cliente1)
console.log(cliente1.calcularImpuesto())