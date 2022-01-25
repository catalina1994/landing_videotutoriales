"use strict";

/* interacción en los botones para mostrar la información correspondiente a Banca Digital y BanBif App */
var botonDigital = document.getElementById('bancaDigital');
var botonApp = document.getElementById('banbifApp');
var contenedor = document.getElementsByClassName('tutorialesContenedor')[0]; //sección para tutoriales

var tituloTuto = document.getElementById('tituloTutorial');
tituloTuto.innerText = 'Banca Digital';
var descriptiontuto = document.getElementById('descriptionTutorial');
descriptiontuto.innerHTML = "La banca digital en BanBif est\xE1 compuesta por dos canales: BanBif App y Banca por Internet.\n        <br/>El banco en tus manos a toda hora, todos los d\xEDas del a\xF1o y en cualquier  lugar.";

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
  descriptiontuto.innerHTML = "La banca digital en BanBif est\xE1 compuesta por dos canales: BanBif App y Banca por Internet.\n        <br/>El banco en tus manos a toda hora, todos los d\xEDas del a\xF1o y en cualquier  lugar.\n        ";
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
  descriptiontuto.innerHTML = "\n        <p>Realiza tus operaciones de forma segura desde donde est\xE9s. Ingresa con tu DNI y tu clave. <br/>\n        \xBFA\xFAn no la tienes? Desc\xE1rgala en tres simples pasos desde tu tienda de aplicaciones favoritas: </p>\n        <ul class=\"tutoriales__pasos\">\n        <li>Inst\xE1lala desde Google Play, Apple Store o App Gallery</li>\n        <li>Reg\xEDstrate con tu DNI, una tarjeta de cr\xE9dito o d\xE9bito, la clave de cajero de la tarjeta que est\xE9s utilizando para registrarte, establece una contrase\xF1a segura y</li>\n        <li>\xA1Listo! Empieza a utilizarla</li>\n        </ul>\n        Usar y operar en la BanBif App es totalmente gratuito. Pero ten en cuenta que algunas operaciones como transferencias interbancarias o pagos de tarjetas de otros bancos pueden tener alg\xFAn costo adicional como el cobro de ITF o alguna comisi\xF3n. \n        ";
  insertaPreguntas(dataApp);
};

botonApp.addEventListener('click', activaApp);