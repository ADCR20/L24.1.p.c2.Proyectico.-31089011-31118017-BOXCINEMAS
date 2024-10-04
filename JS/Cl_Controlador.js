import class {Cl_mCine} from "./Cl_mCine,js";
import class {Cl_Familia} from "./Cl_mFamilia,js";
import class {Cl_vCine} from "./Cl_vCine,js";
import class {Cl_vFamilia} from "./Cl_vFamilia,js";
export class Cl_Controlador{

    constructor (){
        this.mCine = new this.Cl_mCine();
        this.vCine = new this.Cl_mCine();
        this.vFamilia = new this.Cl_vFamilia();
        this.salida = document.getElementById("salida");
    }
procesarCine(){

}


} 