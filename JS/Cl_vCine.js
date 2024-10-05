export class Cl_vCine { 
constructor (controlador){
this.vista = document.getElementById("mainform");
this.tabla = document.getElementById("mainform_table");
this.lblFamilia = document.getElementById("mainform_lblFamilia");
this.lblPromedio = document.getElementById("main_lblPromedio");
this.lblTotal = document.getElementById("mainform_lblTotal");
this.btAgregar = document.getElementById("mainform.btAgregar");
this.btAgregar.onclick = () => controlador.mostrarVFamilia();
}

  mostrar(){
    this.vista.hidden = false;
    }

  ocultar(){
    this.vista.hidden = true;
    }

} 