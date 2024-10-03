export default class Cl_mCine { 
    constructor(){ 
        this.acuLunes = 0;
        this.contLunes = 0;
        this.auxMayor = " ";
        this.acumTotal = " ";
        this.dineroInicial = dineroInicial;
    }
    set
    procesarFamilia(f) { 
        
        // familia que más pagó
        if (f.montoPagar() > this.auxMayor) { 
            this.auxMayor = f.montoPagar();
            this.auxMayor = f.familia;
        }

        // acumulador de ventas lunes 

        if (f.dia == 1) {
        this.acuLunes =+ f.montopagar();
        }
        if (f.dia == 1) {
            this.contLunes++;
        }

        // acumulador de todas las ventas
        this.acumTotal += f.montoPagar();
    }
    promLunes() {
        if (this.contLunes > 0)
            return (this.acuLunes/this.contLunes);
        else
        return 0;
     }
     totalCaja() { 
        return (this.acumTotal + this.dineroInicial);
     }
}