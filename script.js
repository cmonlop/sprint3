
// RESPUESTA A

const nombreUsuario = document.getElementById("nombreUsuario").value;
const apellidoUsuario = document.getElementById("apellidoUsuario").value;
const sueldoActualUsuario = parseFloat(document.getElementById("sueldoActual").value);
const sueldoSemestreAnterior = parseFloat(document.getElementById("sueldoSemestreAnterior").value);
const tieneCargasFamiliaresString = document.getElementById("tieneCargasFamiliares").value;
const cantidadCargasFamiliares = parseInt(document.getElementById("cantidadCargasFamiliares").value);
const fechaDeNacimientoUsuario = new Date (document.getElementById("fechaDeNacimmientoUsuario").value);
const fechaIngresoUsuario = new Date (document.getElementById("fechaIngresoUsuario").value);
const trabajadorActivoString = document.getElementById("trabajadorActivo").value;
const montoCargaFamiliar = 0;
const sueldoFinal = 0;
const fechaActual = new Date();
const tieneCargasFamiliares = (tieneCargasFamiliaresString === "si") ? true : false;
const trabajadorActivo = (trabajadorActivoString === "si") ? true : false;  


// RESPUESTA B

// Para la respuesta b) deberán ser entregados los datos de:
// o Su permanencia en la organización es de: 999 días
// o Su permanencia en la organización es de: 999 meses
// o Su permanencia en la organización es de: 99 años y 99 meses y 99 días
// o Para completar el año de permanencia faltan: 999 días


// ********************** SACADO DE EJERCICIO GRUPAL 4 ****************************


function calcularPermanencia(fechaIngresoUsuario, fechaActual) {
    const diffTime = Math.abs(fechaActual - fechaIngresoUsuario);
  
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = (fechaActual.getFullYear() - fechaIngresoUsuario.getFullYear()) * 12 + (fechaActual.getMonth() - fechaIngresoUsuario.getMonth());
    const diffYears = Math.floor(diffDays / 365);
    const remainingDays = (fechaIngresoUsuario.getMonth() === 1 && fechaIngresoUsuario.getDate() === 29 && fechaActual.getMonth() === 1 && fechaActual.getDate() === 28) ? 1 : Math.floor(diffDays % 365);

    let resultadoDePermanencia = document.getElementById("resultadoPermanencia");

    return resultadoDePermanencia.innerHTML = `Su permanencia en la organización es de: ${diffDays} días \n Su permanencia en la organización es de: ${diffMonths} meses \n Su permanencia en la organización es de: ${diffYears} años y ${diffMonths % 12} meses y ${remainingDays} días \n Para completar el año de permanencia faltan: ${365 - remainingDays} días`;
    
    // const respuesta1 = `Su permanencia en la organización es de: ${diffDays} días`;
    // const respuesta2 = `Su permanencia en la organización es de: ${diffMonths} meses`;
    // const respuesta3 = `Su permanencia en la organización es de: ${diffYears} años y ${diffMonths % 12} meses y ${remainingDays} días`;
    // const respuesta4 = `Para completar el año de permanencia faltan: ${365 - remainingDays} días`;
    
    // return [respuesta1, respuesta2, respuesta3, respuesta4];
  }
  
  //Para Ejecutar
  
  // const respuestas = calcularPermanencia(fechaIngresoUsuario, fechaActual);
  
  // console.log(respuestas);
  


// RESPUESTA C.

// Deberán ser entregados los datos de:

// Nombre y Apellidos
// Sueldo actual
// Monto de Carga familiar
// Sueldo Final (al que se le suma el valor de carga familiar)


// ***************************** SACADO DE EJERCICIO GRUPAL 5 ************************

function calcularSueldo(nombreUsuario, apellidoUsuario, sueldoActualUsuario, sueldoSemestreAnterior, tieneCargasFamiliares, cantidadCargasFamiliares)

 {
 //inicializar
  let montoCargaFamiliar = 0;
 
 if (tieneCargasFamiliares && sueldoSemestreAnterior <= 429899 && cantidadCargasFamiliares >= 1) {
    montoCargaFamiliar = cantidadCargasFamiliares * 16828;
    sueldoFinal = sueldoActualUsuario + montoCargaFamiliar;
      
  } else if (tieneCargasFamiliares && sueldoSemestreAnterior > 429899 && sueldoSemestreAnterior <= 627913 && cantidadCargasFamiliares >= 1){
    montoCargaFamiliar = cantidadCargasFamiliares * 10327;
    sueldoFinal = sueldoActualUsuario + montoCargaFamiliar;
    
  } else if (tieneCargasFamiliares && sueldoSemestreAnterior > 627913 && sueldoSemestreAnterior <= 979330 && cantidadCargasFamiliares >= 1){
    montoCargaFamiliar = cantidadCargasFamiliares * 10327;
    sueldoFinal = sueldoActualUsuario + montoCargaFamiliar;
    
  } else if (tieneCargasFamiliares && sueldoSemestreAnterior > 979330 && cantidadCargasFamiliares >= 1){
    sueldoFinal = sueldoActualUsuario;
    
  }
  
sueldoFinal = Math.round(sueldoFinal * 100) / 100; // Redondea el sueldo final a dos decimales

  let respuestaCalcularSueldo = document.getElementById("resultadoSueldo");

  return respuestaCalcularSueldo.innerHTML = `Nombre: ${nombreUsuario} ${apellidoUsuario} \n Sueldo actual: $${sueldoActualUsuario} \n Monto de carga familiar: ${montoCargaFamiliar} \n Sueldo final: $${sueldoFinal.toFixed(2)}`;


  // console.log(`Nombre: ${nombreUsuario} ${apellidoUsuario}`);
  // console.log(`Sueldo actual: $${sueldoActualUsuario}`);
  // console.log(`Monto de carga familiar: ${montoCargaFamiliar}`);
  // console.log(`Sueldo final: $${sueldoFinal.toFixed(2)}`); // Convierte el número en una cadena con dos decimales
}

//Para Probar
calcularSueldo(nombreUsuario, apellidoUsuario, sueldoActualUsuario, sueldoSemestreAnterior, tieneCargasFamiliares, cantidadCargasFamiliares);



// RESPUESTA D

const persona = {
    nombre : nombreUsuario,
    apellidos : apellidoUsuario,
    fechaDeNacimiento : fechaDeNacimientoUsuario,
    trabajadorActivo : true, 
    fechaIngreso : fechaIngresoUsuario,
    suedoActual : sueldoActualUsuarioUsuario,
    sueldoSemestreAnterior: sueldoSemestreAnterior,
    tieneCargas : tieneCargasFamiliares,
    montoCarga : montoCargaFamiliar,
    cantidadCargas : cantidadCargasFamiliares,
    sueldoFinal : sueldoFinal
}
