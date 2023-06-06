//  son 3 preguntas con un contador de respuestas correctas

const pregunta1 = "¿cuanto es 100 + 160?";
const pregunta2 = "¿En qué año empezó la Segunda Guerra Mundial?";
const pregunta3 = "¿Cuántos lados tiene un hexágono?";

const respuesta1 = "260";
const respuesta2 = 1939;
const respuesta3 = 6;

// contador de aciertos
let aciertos = 0;

// primer pregunta 

let respuestaUsuario1 = prompt(pregunta1)
console.log("La respuesta fue: " + respuestaUsuario1);

// Validar primer pregunta

if (verificar_respuesta(respuestaUsuario1, respuesta1)) {
  console.log("La respuesta del usuario a la primera pregunta fue correcta.");
  alert("¡Respuesta correcta!");
  aciertos++;
} else {
  console.log("La respuesta del usuario a la primera pregunta fue incorrecta.");
  alert("Lo siento, la respuesta correcta era " + respuesta1);
}

// segunda pregunta

let respuestaUsuario2 = prompt(pregunta2);
console.log("La respuesta fue: " + respuestaUsuario2);

// Validar segunda pregunta

if (verificar_respuesta(respuestaUsuario2, respuesta2)) {
  console.log("La respuesta del usuario a la segunda pregunta fue correcta.");
  alert("¡Respuesta correcta!");
  aciertos++;
} else {
  console.log("La respuesta del usuario a la segunda pregunta fue incorrecta.");
  alert("Lo siento, la respuesta correcta era " + respuesta2);
}

//tercer pregunta

let respuestaUsuario3 = prompt(pregunta3);
console.log("La respuesta fue: " + respuestaUsuario3);

// Validar tercera pregunta

if (verificar_respuesta(respuestaUsuario3, respuesta3)) {
  console.log("La respuesta del usuario a la tercera pregunta fue correcta.");
  alert("¡Respuesta correcta!");
  aciertos++;
} else {
  console.log("La respuesta del usuario a la tercera pregunta fue incorrecta.");
  alert("Lo siento, la respuesta correcta era " + respuesta3);
}

//número de aciertos totales 

alert("Has respondido correctamente " + aciertos + " preguntas de un total de 3.");

//verificar si la respuesta del usuario es correcta

function verificar_respuesta(respuestaUsuario, respuestaCorrecta) {
  //  respuestas convirtiéndolas a minúsculas y sacando los espacios 
  respuestaUsuario = respuestaUsuario.toLowerCase();
  respuestaCorrecta = respuestaCorrecta.toString().toLowerCase();

  // intente pero no pude, ya lo voy a solucionar//
  /*if (isNaN(respuestaUsuario) && !isNaN(parseInt(respuestaUsuario))) {
    respuestaUsuario = parseInt(respuestaUsuario);
  }*/

  // Verificar si las respuestas son iguales
  return respuestaUsuario === respuestaCorrecta;
}

const mensajeFinal = "fin del cuestionario";
console.log(mensajeFinal);

