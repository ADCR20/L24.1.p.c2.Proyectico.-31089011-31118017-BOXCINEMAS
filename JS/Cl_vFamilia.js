export class Cl_vFamilia { //prefijo "in" es por input
    
  constructor(controlador){
    this.vista = document.getElementById("familyform");
    this.infamilia = document.getElementById("familyform_familia");
    this.inpersonas = document.getElementById("familyform_personas");
    this.india = document.getElementById("familyform_dia");
    this.btAceptar = document.getElementById("familyform_btAceptar");
    this.btAceptar.onclick = () =>
    
    controlador.agregarfamilia({
        familia: this.infamilia.value,
        personas: this.inpersonas.value,
        dia: this.india.value,
    });
        this.ocultar();

    }
     
mostrar(){
    this.vista.hidden = false;
    }

ocultar(){
    this.vista.hidden = true;
    }
}
