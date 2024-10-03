export default class Cl_mCine { 
    constructor(){ 
        this.acuLunes = 0;
        this.contLunes = 0;
        this.mayor = 0;
        this.auxfamilia = "";
        this.acumTotal = "";
        this.dineroInicial = dineroInicial;
    }
    procesarFamilia (f) { 
        
        // familia que más pagó
        if (f.montoPagar () > this.auxMayor) { 
            this.mayor = f.montoPagar ();
            this.auxfamilia = f.familia;
        }

        // acumulador de ventas lunes 

        if (f.dia == 1) {
        this.acuLunes =+ f.montoPagar ();
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
     devolverAuxNombre() { 
        return this.auxMayor;
     } 
}