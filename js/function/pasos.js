"use strict";

/* interacción en los botones para mostrar la información correspondiente a Banca Digital y BanBif App */
var botonDigital = document.getElementById('bancaDigital');
var botonApp = document.getElementById('banbifApp');
var contenedor = document.getElementsByClassName('tutorialesContenedor')[0]; //sección para tutoriales

var tituloTuto = document.getElementById('tituloTutorial');
tituloTuto.innerText = 'Banca Digital';
var descriptiontuto = document.getElementById('descriptionTutorial');
descriptiontuto.innerHTML = "La Banca por Internet de BanBif es uno de los canales principales de nuestro mundo digital HOLAbank que lo pueden encontrar a trav\xE9s de nuestra p\xE1gina web www.banbif.com.pe para que puedas usar y operar dentro nuestra Banca por Internet de manera gratuita. En caso a\xFAn no est\xE9s afiliado a este canal digital, aqu\xED te ense\xF1amos c\xF3mo hacerlo:\n<br/>\n<ul class=\"tutoriales__pasos\">\n    <li>Ingresa a www.banbif.com.pe y selecciona el bot\xF3n de \u201CHOLAbank\u201D.</li>\n    <li>Luego, ingresa a \u201C\xBFNo tienes un usuario de Banca por Internet? Registrate aqu\xED\u201D</li>\n    <li>Completa los datos que te piden y listo. Puedes usar el mismo usuario y clave para ingresar a nuestra BanBif App.\n    </li>\n</ul>\n<br/>\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4F09unSJclk?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n";

var seleccionandoOpcion = function seleccionandoOpcion() {
  var selector = document.getElementById('opcion');
  var seleccionado = selector.value;

  if (seleccionado == '0') {
    tituloTuto.innerText = '';
    tituloTuto.innerText = 'Banca Digital';
    contenedor.innerHTML = '';
    insertaPreguntas(dataDigital);
  } else {
    tituloTuto.innerText = '';
    tituloTuto.innerText = 'BanBif App';
    contenedor.innerHTML = '';
    insertaPreguntas(dataApp);
  }
};

var insertaPreguntas = function insertaPreguntas(data) {
  data.forEach(function (e, i) {
    /* encabezado del panel */
    var content = document.createElement('div');
    content.classList.add('panel', 'panel-default');
    contenedor.appendChild(content);
    var postDiv = document.createElement('div');
    postDiv.classList.add('panel-heading', 'tutoriales__encabezado');
    postDiv.setAttribute('role', 'tab');
    postDiv.setAttribute('id', "item".concat(i));
    content.appendChild(postDiv);
    var panel = document.createElement('h4');
    panel.classList.add('panel-title');
    postDiv.appendChild(panel);
    var boton = document.createElement('a');
    boton.classList.add('collapsed', 'tutoriales__nombre');
    boton.setAttribute('role', 'button');
    boton.setAttribute('data-toggle', 'collapse');
    boton.setAttribute('data-parent', '#accordion');
    boton.setAttribute('href', "#collapse".concat(i));
    boton.setAttribute('aria-controls', "collapse".concat(i));
    var texto = document.createElement('p');
    texto.classList.add('tutoriales__nombre__pregunta');
    texto.innerHTML = "".concat(e.titulo);
    boton.appendChild(texto);
    var flecha = document.createElement('div');
    flecha.classList.add('flechaDespliegue');
    boton.appendChild(flecha);
    panel.appendChild(boton);
    /* cuerpo del panel */

    var postCollapse = document.createElement('div');
    postCollapse.setAttribute('id', "collapse".concat(i));
    postCollapse.classList.add('panel-collapse', 'collapse');
    postCollapse.setAttribute('role', 'tabpanel');
    postCollapse.setAttribute('aria-labelledby', "item".concat(i));
    content.appendChild(postCollapse);
    var postBody = document.createElement('div');
    postBody.classList.add('panel-body', 'tutoriales__cuerpo');
    postCollapse.appendChild(postBody);
    var parrafo = document.createElement('p');
    parrafo.classList.add('tutoriales__parrafo');
    parrafo.innerHTML = "".concat(e.parrafo);
    postBody.appendChild(parrafo);

    if (e.respuestas.length > 0) {
      var pasos = document.createElement('ol');
      pasos.classList.add('tutoriales__pasos');
      e.respuestas.forEach(function (p) {
        var paso = document.createElement('li');
        paso.innerHTML = "".concat(p);
        pasos.appendChild(paso);
        postBody.appendChild(pasos);
      });
    }

    var video = document.createElement('div');
    video.innerHTML = "".concat(e.video);
    postBody.appendChild(video);
  });
};

insertaPreguntas(dataDigital);

var activaDigital = function activaDigital() {
  botonDigital.classList.add('botonActivo');
  botonApp.classList.remove('botonActivo');
  tituloTuto.innerText = '';
  tituloTuto.innerText = 'Banca Digital';
  descriptiontuto.innerHTML = "La Banca por Internet de BanBif es uno de los canales principales de nuestro mundo digital HOLAbank que lo pueden encontrar a trav\xE9s de nuestra p\xE1gina web www.banbif.com.pe para que puedas usar y operar dentro nuestra Banca por Internet de manera gratuita. En caso a\xFAn no est\xE9s afiliado a este canal digital, aqu\xED te ense\xF1amos c\xF3mo hacerlo:\n        <br/>\n        <ul class=\"tutoriales__pasos\">\n            <li>Ingresa a www.banbif.com.pe y selecciona el bot\xF3n de \u201CHOLAbank\u201D.</li>\n            <li>Luego, ingresa a \u201C\xBFNo tienes un usuario de Banca por Internet? Registrate aqu\xED\u201D</li>\n            <li>Completa los datos que te piden y listo. Puedes usar el mismo usuario y clave para ingresar a nuestra BanBif App.\n            </li>\n        </ul>\n        <br/>\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4F09unSJclk?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        ";
  contenedor.innerHTML = '';
  insertaPreguntas(dataDigital);
};

botonDigital.addEventListener('click', activaDigital);

var activaApp = function activaApp() {
  botonApp.classList.add('botonActivo');
  botonDigital.classList.remove('botonActivo');
  tituloTuto.innerText = '';
  tituloTuto.innerText = 'BanBif App';
  contenedor.innerHTML = '';
  descriptiontuto.innerHTML = "\n    Realiza tus operaciones de forma segura desde donde est\xE9s. Ingresa con tu DNI y\n    tu clave. \xBFA\xFAn no la tienes? Desc\xE1rgala en tres simples pasos desde tu tienda de\n    aplicaciones favoritas:\n    <ul class=\"tutoriales__pasos\">\n      <li>Instala nuestra App desde Google Play, Apple Store o App Gallery</li>\n      <li>\n        Reg\xEDstrate con tu DNI, una tarjeta de cr\xE9dito o d\xE9bito, la clave de cajero\n        de la tarjeta que est\xE9s utilizando para registrarte, establece una\n        contrase\xF1a segura \xA1y listo! Puedes usar y operar nuestra BanBif App de\n        manera gratuita.\n      </li>\n    </ul> \n        ";
  insertaPreguntas(dataApp);
};

botonApp.addEventListener('click', activaApp);