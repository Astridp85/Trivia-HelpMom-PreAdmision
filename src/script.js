var x = document.getElementById("continue");
 x.addEventListener("click", myFunction);
 function myFunction() {
  const name=prompt ("Cual es tu nombre")
  document.getElementById("greetings").innerHTML = "Bienvenid@ "+name;
}
 
const checkBtn = (option) => {
  switch (option) {
   case 'A':
    alert ('Escogiste la respuesta correcta')
   break;
   case 'G':
    alert ('Escogiste la respuesta correcta')
   break;
   case 'K':
    alert ('Escogiste la respuesta correcta')
   break;
   case 'M':
    alert ('Escogiste la respuesta correcta')
   break;
   case 'S':
    alert ('Escogiste la respuesta correcta')
   break;
   case 'Y':
    alert ('Escogiste la respuesta correcta')
   break;
   default:
    alert ('la respuesta es incorrecta')
   }
}

const boton = document.getElementById("buttonOptions");
boton.addEventListener("click",mostrarOcultar);
function mostrarOcultar(){
const trivia = document.getElementById("opcs-trivia");

trivia.classList.remove("disabled-trivia");
trivia.classList.add("enable-trivia");

  }

  const secondBtn = document.getElementById ("buttonOptionstar");
  secondBtn.addEventListener("click",mostrar);
  function mostrar (){
    const tareas = document.getElementById("opcs-tareas");
    tareas.classList.remove("disabled-trivia")
    tareas.classList.add("enable-trivia")

  

  }
 
