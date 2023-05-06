
// RESPUESTA A

// *************************** EJEMPLO VALIDACION **********************************

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("formulario").addEventListener('submit', validarFormulario); 
//   });
  
//   function validarFormulario(evento) {
//     evento.preventDefault();
//     var usuario = document.getElementById('usuario').value;
//     if(usuario.length == 0) {
//       alert('No has escrito nada en el usuario');
//       return;
//     }
//     var clave = document.getElementById('clave').value;
//     if (clave.length < 6) {
//       alert('La clave no es válida');
//       return;
//     }
//     this.submit();
//   }


// ***************************** DATOS A VALIDAR *********************************

//  NOMBRE (String)
//  APELLIDOS (String)
//  Fecha de nacimiento (fecha o string, según decida el grupo)
//  Si es o no el trabajador activo (lógico si/no)
//  Fecha de ingreso a la organización (fecha o string, según decida el grupo)
//  Sueldo actual (número entero)
//  Sueldo semestre anterior (número entero)
//  Valor lógico para indicar si corresponde cargas familiares o no, para trabajador activo (lógico si/no)
//  Cantidad de cargas familiares (número, sólo leerá a quienes si corresponda)

//Aca creamos el objete Persona
// const  persona ={
//     nombre : "",
//     apellidos : "",
//     fechNac : DATE,
//     trabajadorActivo : false, 
//     fechaIngreso : DATE,
//     suedoActualUsuarion : 0,
//     sueldoSemestreAnterior: 0,
//     tieneCargas : false,
//     cantidadCargas : 0,
// }


// RESPUESTA B

// Para la respuesta b) deberán ser entregados los datos de:
// o Su permanencia en la organización es de: 999 días
// o Su permanencia en la organización es de: 999 meses
// o Su permanencia en la organización es de: 99 años y 99 meses y 99 días
// o Para completar el año de permanencia faltan: 999 días


// ********************** SACADO DE EJERCICIO GRUPAL 4 ****************************

  const nombreUsuario = document.getElementById("nombreUsuario").value;
  const apellidoUsuario = document.getElementById("apellidoUsuario").value;
  const sueldoActualUsuario = parseFloat(document.getElementById("sueldoActual").value);
  const sueldoSemestreAnterior = parseFloat(document.getElementById("sueldoSemestreAnterior").value);
  const tieneCargasFamiliares = document.getElementById("tieneCargasFamiliares").value === "si";
  const cantidadCargasFamiliares = parseInt(document.getElementById("cantidadCargasFamiliares").value);


  const fechaDeNacimientoUsuario = parseInt(document.getElementById("fechaDeNacimientoUsuario").value);
  const fechaIngresoUsuario = parseInt(document.getElementById("fechaIngresoUsuario").value);

//let nombreUsuario = "cualquiera";
//let apellidoUsuario = "casilomismo";
//let fechaDeNacimientoUsuario = new Date ('1991-04-19');
//let trabajadorActivo = true;
//let fechaIngresoUsuario = new Date('1999-12-19');
//let sueldoActualUsuario = 500000;
//let sueldoSemestreAnterior = 490000;
//let tieneCargasFamiliares = true;
let montoCargaFamiliar = 0;
//let cantidadCargasFamiliares = 3;
let sueldoFinal = 0;
let fechaActual = new Date();

function calcularPermanencia(fechaIngresoUsuario, fechaActual) {
    const diffTime = Math.abs(fechaActual - fechaIngresoUsuario);
  
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = (fechaActual.getFullYear() - fechaIngresoUsuario.getFullYear()) * 12 + (fechaActual.getMonth() - fechaIngresoUsuario.getMonth());
    const diffYears = Math.floor(diffDays / 365);
    const remainingDays = (fechaIngresoUsuario.getMonth() === 1 && fechaIngresoUsuario.getDate() === 29 && fechaActual.getMonth() === 1 && fechaActual.getDate() === 28) ? 1 : Math.floor(diffDays % 365);
    
    const respuesta1 = `Su permanencia en la organización es de: ${diffDays} días`;
    const respuesta2 = `Su permanencia en la organización es de: ${diffMonths} meses`;
    const respuesta3 = `Su permanencia en la organización es de: ${diffYears} años y ${diffMonths % 12} meses y ${remainingDays} días`;
    const respuesta4 = `Para completar el año de permanencia faltan: ${365 - remainingDays} días`;
    
    return [respuesta1, respuesta2, respuesta3, respuesta4];

    alert(respuesta1, respuesta2, respuesta3, respuesta4);


  }
  
  //Para Ejecutar
  
  const respuestas = calcularPermanencia(fechaIngresoUsuario, fechaActual);
  
  console.log(respuestas);
  


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



  console.log(`Nombre: ${nombreUsuario} ${apellidoUsuario}`);
  console.log(`Sueldo actual: $${sueldoActualUsuario}`);
  console.log(`Monto de carga familiar: ${montoCargaFamiliar}`);
  console.log(`Sueldo final: $${sueldoFinal.toFixed(2)}`); // Convierte el número en una cadena con dos decimales

// ejemplo para el innerHTML

    const muestraSueldo = document.getElementById("muestraSueldo");
    muestraSueldo.innerHTML = `
    <p>Nombre: ${nombreUsuario} ${apellidoUsuario}</p>
    <p>Sueldo actual: $${sueldoActualUsuario.toFixed(2)}</p>
    <p>Monto de carga familiar: $${montoCargaFamiliar.toFixed(2)}</p>
    <p>Sueldo final: $${sueldoFinal.toFixed(2)}</p>
  `;
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
