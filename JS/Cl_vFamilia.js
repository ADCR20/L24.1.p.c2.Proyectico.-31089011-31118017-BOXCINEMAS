export class Cl_vFamilia { 
    leerDatos() {
        let familia = prompt("familia");
        let personas = prompt("personas");
        let dia = prompt("dia");
        return { familia, personas, dia }; 
    } 
    reportar (salida, familia, montoPagar) { 
        salida.innerHTML += `<br>La familia ${familia} tiene que pagar ${montoPagar}`;
    } 
}
