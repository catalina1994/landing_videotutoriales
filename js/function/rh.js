"use strict";

var data = [{
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/beneficios-coyunturales.png',
  titulo: 'Beneficios coyunturales',
  parrafo: 'Iniciativas pensadas en el colaborador y la coyuntura'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/cercania-cuarentena.png',
  titulo: 'Cercanía en cuarentena',
  parrafo: 'Con espacios y momentos para compartir'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/com-int.png',
  titulo: 'Comunicación interna',
  parrafo: 'Todos siempre en contacto'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/cuidado-apoyo.png',
  titulo: 'Cuidado y apoyo',
  parrafo: 'Nos preocupamos por el Bienestar familiar'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/bienestar-org.png',
  titulo: 'Bienestar organizacional',
  parrafo: 'Acompañamiento y ambiente flexible'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/desarrollo.png',
  titulo: 'Desarrollo personal y organizacional',
  parrafo: 'Tu crecimiento no entra en cuarentena.'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/balance.png',
  titulo: 'Balance personal y laboral',
  parrafo: 'Desconexión fuera de horarios de trabajo'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/liderazgo.png',
  titulo: 'Liderazgo que trasciende',
  parrafo: 'Liderando desde la confianza'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/prevencion.png',
  titulo: 'Prevención Covid-19',
  parrafo: 'Nos cuidamos todos'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/reconocimiento.png',
  titulo: 'Reconocimiento Bravo',
  parrafo: 'Valoración de esfuerzos en equipo'
}, {
  imagen: 'https://www.banbif.com.pe/Portals/0/Landings/trascendiendo-en-tiempos-de-crisis/img/iconos/trabajo-remoto.png',
  titulo: 'Trabajo Remoto',
  parrafo: 'Facilitamos recursos para el homeoffice.'
}];
var contenedor = document.getElementById('features');
var desk = window.matchMedia('(max-width:1023px)');

var caracteristicas = function caracteristicas() {
  contenedor.innerHTML = '';

  if (desk.matches) {
    contenedor.classList.add('owl-carousel');
  } else {
    contenedor.classList.remove('owl-carousel');
  }

  data.forEach(function (e) {
    var postDiv = document.createElement('div');
    postDiv.classList.add('dic__features__item');
    contenedor.appendChild(postDiv);
    var imagen = document.createElement('img');
    imagen.setAttribute('src', "".concat(e.imagen));
    postDiv.appendChild(imagen);
    var texto = document.createElement('div');
    texto.classList.add('dic__features__item__text');
    postDiv.appendChild(texto);
    var titulo = document.createElement('p');
    titulo.innerText = e.titulo;
    texto.appendChild(titulo);
    var parrafo = document.createElement('p');
    parrafo.innerText = e.parrafo;
    texto.appendChild(parrafo);
  });
};

caracteristicas();
$('.owl-carousel').owlCarousel({
  loop: true,
  dots: true,
  dotsEach: 1,
  dotClass: 'banbif-dots',
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    768: {
      item: 3
    }
  }
});