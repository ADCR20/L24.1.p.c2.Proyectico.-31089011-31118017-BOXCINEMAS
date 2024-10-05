export class Cl_vCine { 
    reportar( salida, devolverAuxNombre, promLunes,totalCaja) { 
    salida.innerHTML += `<br>Familia que pagó más: ${devolverAuxNombre}`;
    salida.innerHTML += `<br>Promedio ppagado los días lunes: ${totalCaja}`;
    salida.innerHTML += `<br>Total de dinero al final de la jornada: ${promLunes}`;
  }
} 