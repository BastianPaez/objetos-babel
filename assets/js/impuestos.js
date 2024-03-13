export class Impuestos {
    constructor(montoBrutoAnual, deducciones){
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones     = deducciones;
    }

    get getMontoBrutoAnual(){
        return this.montoBrutoAnual;
    }

    set setMontoBrutoAnual(monto){
        this.montoBrutoAnual = monto;
    }

    get getDeducciones(){
        return this.deducciones;
    }
    set setDeducciones(deducciones){
        this.deducciones = deducciones; 
    }
}