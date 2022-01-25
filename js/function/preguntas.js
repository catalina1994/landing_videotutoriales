"use strict";

var preguntas = [{
  titulo: '¿Quieres saber más sobre la cuenta de ahorro digital?',
  respuestas: ['Es una cuenta de ahorros que puedes abrir y activar sin necesidad de ir a una oficina, 100% online.', 'No cobra mantenimiento independientemente del saldo que mantengas.', 'Te brinda una tarjeta de debito virtual, para realizar todas las compras que necesites.', 'Puedes recoger una Tarjeta de débito física en cualquier oficina banbif.']
}, {
  titulo: '¡Beneficios increíbles!',
  respuestas: ['Es 100% digital, no necesitas acercarte a una oficina para abrirla.', 'No cobra mantenimiento de cuenta.', 'Sin monto mínimo de apertura.', 'Te brinda una tarjeta de débito virtual, para realizar todas las compras que necesites.', 'Puedes recoger una Tarjeta de débito física en cualquier oficina banbif.']
}, {
  titulo: 'Descubre las mejores promociones',
  respuestas: ['3 meses gratis de seguro de protección digital Mapfre ', 'Te devuelve 2 meses del costo de tu suscripción de streaming (Spotify, Netflix o Disney+ entre otros.)', 'Te devuelve 20% en tu primera compra por internet en supermercados y farmacias', 'Accede a muchos descuentos más con ClubHola.']
}, {
  titulo: 'Requisitos',
  respuestas: ['DNI', 'Correo electrónico', 'Celular']
}];
var contenedor = document.getElementById('preguntas');

var insertaPreguntas = function insertaPreguntas(data) {
  data.forEach(function (e, i) {
    /* encabezado del panel */
    var content = document.createElement('div');
    content.classList.add('panel', 'panel-default');
    contenedor.appendChild(content);
    var postDiv = document.createElement('div');
    postDiv.classList.add('panel-heading', 'faq__encabezado');
    postDiv.setAttribute('role', 'tab');
    postDiv.setAttribute('id', "item".concat(i));
    content.appendChild(postDiv);
    var panel = document.createElement('h4');
    panel.classList.add('panel-title');
    postDiv.appendChild(panel);
    var boton = document.createElement('a');
    boton.classList.add('collapsed', 'faq__nombre');
    boton.setAttribute('role', 'button');
    boton.setAttribute('data-toggle', 'collapse');
    boton.setAttribute('data-parent', '#accordion');
    boton.setAttribute('href', "#collapse".concat(i));
    boton.setAttribute('aria-controls', "collapse".concat(i));
    var texto = document.createElement('p');
    texto.classList.add('faq__nombre__pregunta');
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
    postBody.classList.add('panel-body', 'faq__cuerpo');
    postCollapse.appendChild(postBody);

    if (e.respuestas.length > 0) {
      var pasos = document.createElement('ul');
      pasos.classList.add('faq__pasos');
      e.respuestas.forEach(function (p) {
        var paso = document.createElement('li');
        paso.innerHTML = "".concat(p);
        pasos.appendChild(paso);
        postBody.appendChild(pasos);
      });
    }
  });
};

insertaPreguntas(preguntas);