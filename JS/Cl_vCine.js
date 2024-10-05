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
//verificar reportarCine
reportarCine((acumlunes, contlunes, mayor, auxfamilia, acumtotal, dinero)) {
  this.tabla.innerHTML += `
  <tr>
  <td>${Familia}</td>
  <td>${Personas}</td>
  <td>${Día}</td>
  <td>${Monto a pagar}</td>
  </tr>`;

  this.lblFamilia.innerHTML = ;
  this.lblPromdeio.innerHTML = ;
  this.lbltotal.innerHTML =;

  mostrar(){
    this.vista.hidden = false;
    }

  ocultar(){
    this.vista.hidden = true;
    }

} 