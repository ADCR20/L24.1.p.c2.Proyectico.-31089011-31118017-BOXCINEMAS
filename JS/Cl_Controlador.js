import  {Cl_mCine} from "./Cl_mCine,js";
import  {Cl_mFamilia} from "./Cl_mFamilia,js";
import  {Cl_vCine} from "./Cl_vCine,js";
import  {Cl_vFamilia} from "./Cl_vFamilia,js";
export class Cl_Controlador{

    constructor (){
        this.mCine = new this.Cl_mCine();
        this.vCine = new this.Cl_mCine();
        this.vFamilia = new this.Cl_vFamilia();
        this.salida = document.getElementById("salida");
    }
procesarCine(){
do{      //family para diferenciiar del atributo del nombre "familia"
    let datos = this.vFamilia.LeerDatos();
    family = new Cl_mFamilia(datos); 
    this.mCine.procesarCine(family);
    this.vFamilia.reportar(this.salida, family.familia, family.montoPagar());

}while (confirm("¿Desea procesar otra familia?"));

this.vCine.reportar( //Reportar los datos procesados de las familias 
    this.salida, 
    this.vCine.devolverAuxNombre(), 
    this.vCine.promLunes(),
    this.vCine.totalCaja()
 );
}

mostrarVFamilia(){//oculta la vista cine y muestra la vista familia
this.vCine.Ocultar();
this.vFamilia.Mostrar();
    }
    
mostrarVCine(){//oculta la vista familia y muestra la vista cine 
    this.vFamilia.Ocultar();
    this.vCine.mostrar();
    }
    /// prueba de actuali9zación no hay cambios
} 