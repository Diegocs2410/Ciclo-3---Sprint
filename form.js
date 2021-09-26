<<<<<<< HEAD
// Objeto con las expresiones regulares
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Expresion funcional para campos nombre y apellido. Recibe solo caracteres letras, pueden ser con acento, espacios, longitud restringida entre 4 - 30 caracteres, sin opcion de campo vacio.
  telefono: /^\d{7}$/, // Expresion funcional para campo telefono. Recibe solo caracteres numericos, longitud restringida de 7 caracteres, sin opcion de campo vacio.
  correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Expresion funcional para campo correo. Recibe estructura de correo ej: correo@correo.com, sin opcion de campo vacio.
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, //  Expresion funcional para campo contrasena. Recibe caracteres letras y numeros, con minimo una Mayuscula una minuscula y un numero con una longitud igual o mayor a 8 caracteres, sin opcion de campo vacio.
  
  
};

// Funcion Check Nombre
const checkNombre = function (valor) {
  // Expresion regular para testear la condicion del parametro valor
  const expReg = new RegExp(/^[a-zA-ZÀ-ÿ\s]{4,30}$/);
    return expReg.test(valor) ? true : false;
};
  
// Funcion checkApellido
const checkApellido = function (valor) {
  // Expresion regular para testear la condicion del parametro valor
  const expReg = new RegExp(/^[a-zA-ZÀ-ÿ\s]{4,30}$/);
    return expReg.test(valor) ? true : false;
};
 
// Funcion checkTelefono
const checkTelefono = (valor) => (expresiones.telefono.test(valor) ? true : false); //  Testeo de la condicion del parametro valor, a traves de el llamado del objeto telefono, donde reside la expresion regular.

// Funcion checkCorreo
const checkCorreo = (valor) => {
  // Expresion regular para testear la condicion del parametro valor
  const expReg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return expReg.test(valor) ? true : false;
};
  
// Funcion checkContraseña
const checkContrasena = (valor) => (expresiones.password.test(valor) ? true : false); //  Testeo de la condicion del parametro valor, a traves de el llamado del objeto password, donde reside la expresion regular.

// Cada función retorna true or false según los requisitos solicitados en el sprint 2.

// Exportar modulos
module.exports = {checkNombre, checkApellido, checkTelefono, checkCorreo, checkContrasena};
=======
//  Bienvenidos equipo !!
// Objeto con las expresiones regulares
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7}$/, // 7 numeros.
};
// Funcion checkCorreo
const checkCorreo = (valor) => {
  // Espresion regular para testear la condicion del parametro valor
  // Recuerden que debe retornar true or false
  const expReg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return expReg.test(valor) ? true : false;
};
// Funcion Check Nombre
const checkNombre = function (valor) {
  const expReg = new RegExp(/^[a-zA-ZÀ-ÿ\s]{4,30}$/);

  return expReg.test(valor) ? true : false;
};
// Funcion checkApellido
const checkApellido = function (valor) {
  const expReg = new RegExp(/^[a-zA-ZÀ-ÿ\s]{4,30}$/);

  return expReg.test(valor) ? true : false;
};
// Funcion checkTelefono
const checkTelefono = (valor) => (expresiones.telefono.test(valor) ? true : false);
// Funcion checkContraseña
const checkContrasena = (valor) => (expresiones.password.test(valor) ? true : false);

// Exportar modulos
module.exports = { checkCorreo, checkApellido, checkNombre, checkTelefono, checkContrasena };
>>>>>>> f5342d4adcbb3025800977d752524f7c3b0a7afb
