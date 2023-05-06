// RESPUESTAs A, B, C, D.

function mostrarPermanencia() {
  const fechaIngresoUsuario = new Date(
    document.getElementById("fecha-ingreso").value
  );
  const fechaActual = new Date();
  const resultados = calcularPermanencia(fechaIngresoUsuario, fechaActual);
  const muestraPermanencia = document.getElementById("muestraPermanencia");
  muestraPermanencia.innerHTML = `
      <p>${resultados[0]}</p>
      <p>${resultados[1]}</p>
      <p>${resultados[2]}</p>
      <p>${resultados[3]}</p>
  `;
}
function mostrarSueldo() {
  const nombreUsuario = document.getElementById("nombres").value;
  const apellidoUsuario = document.getElementById("apellidos").value;
  const sueldoActualUsuario = parseFloat(
    document.getElementById("sueldo-actual").value
  );
  const sueldoSemestreAnterior = parseFloat(
    document.getElementById("sueldoSemestreAnterior").value
  );
  const tieneCargasFamiliares = document.getElementById(
    "tieneCargasFamiliares"
  ).value;
  const cantidadCargasFamiliares = parseInt(
    document.getElementById("cantidadCargas").value
  );
  const resultados = calcularSueldo(
    nombreUsuario,
    apellidoUsuario,
    sueldoActualUsuario,
    sueldoSemestreAnterior,
    tieneCargasFamiliares,
    cantidadCargasFamiliares
  );
  console.log(resultados); // para que se entienda
  const muestraSueldo = document.getElementById("muestraSueldo");
  muestraSueldo.innerHTML = `
      <p>Nombre: ${nombreUsuario} ${apellidoUsuario}</p>
      <p>Sueldo actual: $${resultados[0].toFixed(2)}</p>
      <p>Monto de carga familiar: $${resultados[1].toFixed(2)}</p>
      <p>Sueldo final: $${resultados[2].toFixed(2)}</p>
  `;

  
}

const nombreUsuario = document.getElementById("nombres").value;
const apellidoUsuario = document.getElementById("apellidos").value;
const sueldoActualUsuario = parseFloat(
  document.getElementById("sueldo-actual").value
);
const sueldoSemestreAnterior = parseFloat(
  document.getElementById("sueldoSemestreAnterior").value
);
const tieneCargasFamiliares = document.getElementById("activo").value === "si";
const cantidadCargasFamiliares = parseInt(
  document.getElementById("cantidadCargas").value
);
const fechaDeNacimientoUsuario = new Date(
  document.getElementById("fecha_nacimiento").value
);
const fechaIngresoUsuario = new Date(
  document.getElementById("fecha-ingreso").value
);
let montoCargaFamiliar = 0;
let sueldoFinal = 0;
let fechaActual = new Date();

function calcularPermanencia(fechaIngresoUsuario, fechaActual) {
  const diffTime = Math.abs(fechaActual - fechaIngresoUsuario);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths =
    (fechaActual.getFullYear() - fechaIngresoUsuario.getFullYear()) * 12 +
    (fechaActual.getMonth() - fechaIngresoUsuario.getMonth());
  const diffYears = Math.floor(diffDays / 365);
  const remainingDays =
    fechaIngresoUsuario.getMonth() === 1 &&
    fechaIngresoUsuario.getDate() === 29 &&
    fechaActual.getMonth() === 1 &&
    fechaActual.getDate() === 28
      ? 1
      : Math.floor(diffDays % 365);
  const respuesta1 = `Su permanencia en la organización es de: ${diffDays} días`;
  const respuesta2 = `Su permanencia en la organización es de: ${diffMonths} meses`;
  const respuesta3 = `Su permanencia en la organización es de: ${diffYears} años y ${
    diffMonths % 12
  } meses y ${remainingDays} días`;
  
  const respuesta4 = `Para completar el año de permanencia faltan: ${
    365 - remainingDays
  } días`;
  return [respuesta1, respuesta2, respuesta3, respuesta4];
  console.log(respuesta1, respuesta2, respuesta3, respuesta4);
}

function calcularSueldo(
  nombreUsuario,
  apellidoUsuario,
  sueldoActualUsuario,
  sueldoSemestreAnterior,
  tieneCargasFamiliares,
  cantidadCargasFamiliares
) {
  //inicializar
  let montoCargaFamiliar = 0;
  // (tieneCargasFamiliares === si)
  if (
    tieneCargasFamiliares === "si" &&
    sueldoSemestreAnterior <= 429899 &&
    cantidadCargasFamiliares >= 1
  ) {
    montoCargaFamiliar = cantidadCargasFamiliares * 16828;
    sueldoFinal = sueldoActualUsuario + montoCargaFamiliar;
  } else if (
    tieneCargasFamiliares === "si" &&
    sueldoSemestreAnterior > 429899 &&
    sueldoSemestreAnterior <= 627913 &&
    cantidadCargasFamiliares >= 1
  ) {
    montoCargaFamiliar = cantidadCargasFamiliares * 10327;
    sueldoFinal = sueldoActualUsuario + montoCargaFamiliar;
  } else if (
    tieneCargasFamiliares === "si" &&
    sueldoSemestreAnterior > 627913 &&
    sueldoSemestreAnterior <= 979330 &&
    cantidadCargasFamiliares >= 1
  ) {
    montoCargaFamiliar = cantidadCargasFamiliares * 10327;
    sueldoFinal = sueldoActualUsuario + montoCargaFamiliar;
  } else if (
    tieneCargasFamiliares &&
    sueldoSemestreAnterior > 979330 &&
    cantidadCargasFamiliares >= 1
  ) {
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
