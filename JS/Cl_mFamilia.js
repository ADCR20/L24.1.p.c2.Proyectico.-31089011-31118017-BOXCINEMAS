export default class Cl_mFamilia { 

    constructor ({ familia, personas, dia, dineroInicial }) {
        this.familia = familia;
        this.personas = personas;
        this.dia = dia;
        this.dineroInicial = dineroInicial;
    }
    set familia(fA) { 
        this._familia = fA;
    }
    get familia() { 
        return this._familia;
    }
    set personas(p) { 
        this._personas = p;
    }
    get personas () { 
        return this._personas;
    }
    set dia(d) { 
        this._dia = d;
    }
    get dia() { 
        return this._dia;
    }
    set dineroInicial(dI) { 
        this._diaInicial = dI;
    }
    get dineroInicial() { 
        return this._diaInicial;
    }


}