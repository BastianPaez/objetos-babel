export class Cliente {
    constructor(nombre){
        this.nombre = nombre;
        this.impuesto = {};
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setImpuesto(impuesto){
        this.impuesto = impuesto;
    }

    calcularImpuesto(){
        return Math.round((this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 100 / 21)
    }
}

