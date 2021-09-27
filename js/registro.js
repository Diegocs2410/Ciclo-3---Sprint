import validaciones from './form.js';

const formulario = document.querySelector('#form-registro');

// Declaracion del arreglo
const valores = [];
// Funcion para agregarRegistro()
const agregarRegistro = (e) => {
  e.preventDefault();
  // Tomamos los valores y asignamos a variables
  const nombre = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const email = document.querySelector('#email').value;
  const telefono = document.querySelector('#telefono').value;
  const password = document.querySelector('#password').value;
  // Declaramos un objeto para agregarlo al arreglo de objetos
  const newObjeto = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
  };
  // Validamos con if y utilizamos las funciones del sprint 2
  if (validaciones.checkNombre(nombre)) {
    newObjeto['nombre'] = nombre;
  }
  if (validaciones.checkApellido(apellido)) {
    newObjeto['apellido'] = apellido;
  }
  if (validaciones.checkCorreo(email)) {
    newObjeto['email'] = email;
  }
  if (validaciones.checkTelefono(telefono)) {
    newObjeto['telefono'] = telefono;
  }
  if (validaciones.checkContrasena(password)) {
    newObjeto['password'] = password;
  }
  valores.push(newObjeto);
  console.log(valores);
};

const ordenarArreglo = (array) => {
  array.sort(function (a, b) {
    if (a.apellido > b.apellido) {
      return 1;
    }
    if (a.apellido < b.apellido) {
      return -1;
    }
    return 0;
  });
};
const btnOrdenar = document.getElementById('btn-ordenar');

btnOrdenar.addEventListener('click', () => {
  console.log(valores);
});

formulario.addEventListener('submit', agregarRegistro);
// Escribimos los modulos que vamos a exportar
// module.exports = { agregarRegistro };
