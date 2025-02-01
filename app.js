// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const amigoInput = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
  const valorCadena = amigoInput.value.toLowerCase();

  if (valorCadena === "") {
    alert("Ingre el nombre de un amigo para continuar...");
    return;
  }
  if (!validaTexto(amigoInput.value)) {
    alert("Ingresa un nombre válido para continuar...");
    limpiarYEnfocar();
    return;
  }

  amigos.push(valorCadena);
  console.log(amigos);

  // Desplegar lista
  listarMisAmigos();

  limpiarYEnfocar();
}

function validaTexto(txt) {
  const cosita = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(txt) ? true : false;
  console.log("cosita: ", cosita);
  return cosita;
  //   amigoInput.value = ""; // reseta valor
  //   limpiarYEnfocar();
}

function listarMisAmigos() {
  // Limpiar lista para evitar duplicados
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<ul>${amigos[i]}</ul>`;
  }
}

// Funcion para obtener amigo sorteado
function sortearAmigo() {
  if (amigos.length === 0) return;

  const indiceATomar = Math.floor(Math.random() * amigos.length);
  resultado.innerHTML = `<li>${amigos[indiceATomar]}</li>`;
}

function limpiarYEnfocar() {
  amigoInput.value = ""; // reseta valor
  amigoInput.focus();
}
