// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let amigoInput = document.getElementById("amigo");

function agregarAmigo() {
  console.log(amigoInput.value);
  if (amigoInput.value === "") {
    alert("Ingre el nombre de un amigo para continuar...");
    return;
  }
  //   if(!validaTexto(amigoInput.value))
  //   {
  //   }
  amigos.push(amigoInput.value);
  console.log(amigos);
  amigoInput.value = ""; // reseta valor
  amigoInput.focus();
}

// function validaTexto(txt) {
//   if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(txt)) return false;
// }
