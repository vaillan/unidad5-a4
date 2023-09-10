// Import stylesheets
import './style.css';

//Variables globales
let numInput;
let lista = [];
let listaNumerosPrimos = [];

// Write Javascript code!
document.getElementById('c').addEventListener('click', onInit);

function onInit(e) {
  lista = [];
  listaNumerosPrimos = [];

  numInput = document.getElementById('num1').value;

  //Generar lista
  generarLista(numInput);

  //Verificar numeros primos
  obtenerNumerosPrimos();

  //Muestra etiqueta
  setAlert();
}

function generarLista(numeroInicial) {
  for (let i = 1; i <= numeroInicial; i++) {
    lista.push(i);
  }
}

function obtenerNumerosPrimos() {
  lista.forEach((num) => {
    let result = esPrimo(num);
    if (result) {
      listaNumerosPrimos.push(num);
    }
  });
}

function esPrimo(numero) {
  let x = 2;
  // Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;

  while (x < numero / 2) {
    if (numero % x == 0) {
      return false;
    }
    x++;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return true;
}

/*
 * Función para mostrar etiqueta
 * @return {void}
 */
function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
    <p class="text-break">Lista de numeros primos: ${listaNumerosPrimos.toString()}  </p>
  `;
}
