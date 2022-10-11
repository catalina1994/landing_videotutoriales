"use strict";

var dataApp = [{
  titulo: "1. ¿Olvidaste tu clave o bloqueaste tu acceso?",
  parrafo: "Al detectar el intento de ingreso de una clave errada por 3 veces consecutivas, por temas de seguridad, automáticamente se procederá con el bloqueo temporal del usuario. En caso no recuerdes tu clave digital, podrás recuperarlo a través de los siguientes pasos:",
  respuestas: ["Ingresa a tu BanBif App.", "Ingresa a la opción “¿Olvidaste tu contraseña o bloqueaste tu acceso?      ", "Completa tus datos en la Solicitud de Nueva Clave (incluyendo número de tarjeta y clave de cajero)", "Confirma que se haya enviado una contraseña temporal a tu correo personal. (en caso no recuerdes cuál es tu correo electrónico que registraste en el Banco o deseas actualizarla, consulta con nuestra Banca Telefónica al 01 631 9000 para Lima o 0 801 0 0456 para Provincias, o en todo caso acércate a cualquiera de nuestras Oficinas a nivel nacional)      ", "Ingresa nuevamente a tu BanBif App usando la contraseña temporal.", "Una vez ingresado, automáticamente se te solicitará generar una nueva contraseña ¡y listo!"],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Ia1tUEOoQvA?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "2. Cambia tu contraseña temporal y genera tu propia clave digital",
  parrafo: "Una vez que ya cuentes con tu contraseña temporal y el sistema te pide que generas una nueva, deberás tener en cuenta lo siguiente:",
  respuestas: ["Tu nueva clave debe contar con mínimo 8 caracteres y máximo 10. ", "Debe estar conformado por: al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (p.e: -, _, #, $, &, @, ¡, !, ?, ¿, “, /, etc.)", "\xA1Y listo! Ya cuentas con tu propia clave digital.\n      <br/><br/>\n      Recuerda que el env\xEDo de una contrase\xF1a temporal se puede realizar solo una vez al d\xEDa. Si solicitas otra clave temporal en el transcurso del d\xEDa, el sistema no te permitir\xE1 seguir con el proceso. Podr\xE1s realizar otra solicitud al d\xEDa siguiente.\n      "],
  video: ""
}, {
  titulo: "3. ¿Qué operaciones puedo hacer en la Banca por Internet",
  parrafo: "A través de nuestra Banca por Internet, puedes realizar diferentes operaciones:",
  respuestas: ["Transferencias entre cuentas propias, a otras cuentas BanBif, a otros bancos y al exterior.", "Pagar tus tarjetas BanBif, tarjetas de otros Bancos, Tarjetas Diners, tus pr\xE9stamos y diferentes servicios.", "Env\xEDo de dinero PLIN.", "Pago y cobro con QR para PLIN y Niubiz.", "Activa y desactiva tus servicios/notificaciones de tus tarjetas.", "Acceder a las diferentes ofertas de productos que tenemos para ti.", "Gestionar tus operaciones frecuentes y programadas, as\xED como revisar tu historial de operaciones.", "Comprar y vender d\xF3lares.", "Ahorra tus vueltos y programa tus ahorros.", "Realiza retiros sin tarjetas.", "Abre cuentas de ahorro y dep\xF3sitos a plazo.", "Revisa el tipo de cambio"],
  video: ""
}, {
  titulo: "4. Afíliate a la Clave SMS Token para que realices todas tus operaciones digitales",
  parrafo: "La Clave SMS Token es un elemento de seguridad que podr\xE1s utilizar para confirmar algunas operaciones que vas a realizar a trav\xE9s de HOLAbank como, por ejemplo: PLIN, transferencias, pagos, etc. El SMS Token est\xE1 conformado por 6 d\xEDgitos generados aleatoriamente y lo recibir\xE1s en tu celular y/o correo electr\xF3nico cada vez que realices una operaci\xF3n.\n    <br/> <br/> Para afiliarte a la Clave SMS Token, cuentas con 2 opciones: ",
  respuestas: ["Si cuentas con una Tarjeta de D\xE9bito o Cr\xE9dito BanBif, puedes afiliarte directamente desde la Banca Telef\xF3nica (01 631 9000 para Lima o 0 801 0 0456 para Provincias).", "En caso no cuentes con una Tarjeta con nosotros, deber\xE1s acercarte a la Oficina m\xE1s cercana a tu disposici\xF3n para confirmar tu n\xFAmero y solicitar la afiliaci\xF3n."],
  video: ""
}, {
  titulo: "5. ¿Qué es PLIN?",
  parrafo: "PLIN es la nueva forma de cobrar y pagar desde el app de BBVA, Interbank,\n    Scotiabank, BanBif y otras entidades solamente usando tu n\xFAmero de celular o con\n    c\xF3digo QR sin necesidad de contar con el n\xFAmero de cuenta ni c\xF3digo\n    interbancario. Para m\xE1s informaci\xF3n, puedes ingresar a <a href=\"http://www.plin.pe\" target=\"_blank\" rel=\"noopener noreferrer\">www.plin.pe</a>. ",
  respuestas: [],
  video: ""
}, {
  titulo: "6. ¿Cómo afiliarte a PLIN?",
  parrafo: "Descubre c\xF3mo afiliarte a PLIN antes de realizar tus operaciones: ",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Selecciona \u201CTransferencias\u201D, y luego \u201CPlin\u201D", "Selecciona \u201CEmpezar\u201D y comienza tu afiliaci\xF3n.", "Confirma tu n\xFAmero de celular y elige una cuenta, desde esta podr\xE1s enviar y recibir dinero.", "Acepta los \u201CT\xE9rminos y Condiciones\u201D eligiendo el recuadro en blanco.", "\xA1Plin y listo! ya puedes enviar y recibir dinero."],
  video: ""
}, {
  titulo: "7. ¿Cómo envío dinero por PLIN?",
  parrafo: "Descubre c\xF3mo utilizar PLIN desde tu celular para enviar y recibir dinero.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Selecciona \u201CTransferencias\u201D y luego \u201CPlin\u201D.", "Elige el contacto al que deseas enviar dinero.", "Ingresa el importe (m\xEDnimo s/. 1 hasta s/. 500 por operaci\xF3n).", "Confirma tu operaci\xF3n.", "Ingresa tu clave SMS Token y selecciona el bot\xF3n Validar c\xF3digo.", "\xA1Plin y listo!."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/rCOHxVZoBbg?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "8. ¿Cómo pagar con Plin QR?",
  parrafo: "\xA1Tus pagos con Plin QR ya son una realidad! Aqu\xED te ense\xF1amos c\xF3mo:",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ingresa a la opci\xF3n \"QR\".", "Escanea el c\xF3digo QR enfocando con tu c\xE1mara el c\xF3digo QR del comercio o contacto.", "Ingresa el monto que deseas enviar, tambi\xE9n podr\xE1s colocar una descripci\xF3n.      ", "Confirma los datos del destinatario y el monto.", "Ingresa el c\xF3digo token que se enviar\xE1 a tu SMS o Email.", "\xA1Plin y listo! El comercio o contacto recibir\xE1 el dinero en su cuenta de forma inmediata."],
  video: ""
}, {
  titulo: "9. ¿Cómo cobrar con Plin QR?",
  parrafo: "\xA1Tus cobros con Plin QR ya son una realidad! Aqu\xED te ense\xF1amos c\xF3mo:",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ingresa a la opci\xF3n \"QR\".", "Desde el esc\xE1ner del c\xF3digo QR., selecciona \"Mostrar mi QR Plin\".", "Selecciona \"Compartir\" para que puedas enviarlo a tus contactos.", "\xA1Plin y listo! ya puedes recibir dinero compartiendo tu c\xF3digo QR."],
  video: ""
}, {
  titulo: "10. Quiero activar/desactivar mis servicios adicionales de Tarjeta de Débito y Crédito",
  parrafo: "\xBFQuieres activar o desactivar tus servicios adicionales de Tarjeta de Cr\xE9dito o D\xE9bito? Aqu\xED te ense\xF1amos los pasos para hacerlo:",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y contrase\xF1a.      ", "Selecciona el men\xFA superior (las tres l\xEDneas blancas de la esquina superior izquierda).", "En el men\xFA, encontrar\xE1s la opci\xF3n: \u201CServicios de mis tarjetas\u201D. Ingresa a esta opci\xF3n.", "Luego, ingresa a la opci\xF3n \u201CMis Servicios de Tarjetas\u201D.", "Una vez ah\xED, podr\xE1s visualizar las diferentes tarjetas con las que cuentas, y podr\xE1s hacer clic en el \xEDcono de editar para configurarlas.", "Para Tarjetas de D\xE9bito encontrar\xE1s las siguientes opciones: \u201CCompras en exterior\u201D, \u201CCompras por internet\u201D y \u201CDisposici\xF3n de efectivo en el exterior\u201D.", "Para Tarjetas de Cr\xE9dito encontrar\xE1s las siguientes opciones: \u201CCompras en el exterior\u201D, \u201CCompras por Internet\u201D, \u201CDisposici\xF3n de efectivo\u201D y \u201CSobregiro\u201D.", "Recuerda, tus tarjetas BanBif vienen con todas las opciones desactivadas, por lo que ser\xE1 necesario que las configures si deseas realizar compras por internet o transferencias a trav\xE9s de aplicaciones como Plin o suscribirte a plataformas como Netflix, Disney, Spotify entre muchas m\xE1s."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/TK11aMDO94o?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "11. Comparte tu número de cuenta y CCI",
  parrafo: "Descubre c\xF3mo compartir tu n\xFAmero de cuenta y CCI directamente desde tu BanBif App.\n    Selecciona la opci\xF3n \u201CCompartir Cuenta\u201D que aparece debajo de cada uno de tus productos y, \xA1listo! ya puedes compartir tu n\xFAmero de cuenta y CCI para recibir dinero en tus cuentas.\n    ",
  respuestas: [],
  video: "https://www.youtube.com/watch?v=dw2XtHST-Xs&feature=emb_title&ab_channel=BanBif    "
}, {
  titulo: "12. Conoce cómo verificar el saldo de tu cuenta",
  parrafo: "Aprende c\xF3mo verificar el saldo de tus cuentas o las cuotas del pr\xE9stamo que solicitaste.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Selecciona la opci\xF3n \u201CMis productos\u201C.", "\xA1Y listo! Desde este apartado podr\xE1s verificar los saldos y tus productos vigentes.\n      Si deseas ver los movimientos e historial de algunos de tus productos, solo selecciona uno de ellos y presiona la opci\xF3n \u201CMovimientos\u201C que se encuentra en la parte superior derecha."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Qxgi4H6RdSg?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "13. Realiza transferencias",
  parrafo: "En BanBif puedes realizar tus transferencias las 24 horas del d\xEDa, por ello te mostramos los pasos para hacerlo:",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Selecciona la opci\xF3n \u201CTransferir\u201D.", "Puedes elegir entre transferir entre tus cuentas BanBif, a otras cuentas BanBif y a otros bancos.", "Completa la informaci\xF3n solicitada (monto a transferir y cuenta de destino).", "Ingresa la clave token que te llegar\xE1 por SMS o Email.", "\xA1Y listo! Ya terminaste tu transferencia, recuerda que puedes realizarla a cualquier hora del d\xEDa."],
  video: ""
}, {
  titulo: "14. ¿Cómo puedo pagar mis servicios?",
  parrafo: "\xBFSab\xEDas que puedes pagar tus servicios desde tu celular? Aprende a realizar estos pagos a trav\xE9s de tu BanBif App.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Elige la opci\xF3n \u201DPagar\u201D.", "Selecciona \u201DServicios\u201D.", "Busca el servicio que desees pagar.", "Ingresa tu c\xF3digo de pago (tel\xE9fono, nro. de documento, suministro, etc).", "Se te mostrar\xE1 la deuda pendiente, o en todo caso te indicar\xE1 que coloques el monto a cancelar.", "Selecciona el medio de pago.", "Seleccionar \u201CSiguiente\u201D y confirmar con la clave SMS/Email token.", "\xA1Y listo! Ya realizaste tu operaci\xF3n."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OMD7MJMeDTc?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "15. Realiza el pago de tus préstamos desde tu BanBif App",
  parrafo: "\xA1Contamos con las herramientas para que pagues lo que necesites sin salir de tu casa! ",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Elige la opci\xF3n \u201DPagar\u201D.", "Elige la opci\xF3n \u201CPr\xE9stamos\u201D.", "Selecciona el Pr\xE9stamo a pagar y la cuenta donde se cargar\xE1 el importe a pagar.", "Confirma los datos y \xA1Listo! pagaste tu pr\xE9stamo."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/mJYdJ1yTmSY?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "16. Paga todas tus Tarjetas de Crédito BanBif desde tu BanBif App",
  parrafo: "\xA1Pagos r\xE1pidos y desde casa! Conoce c\xF3mo pagar tu Tarjeta de Cr\xE9dito BanBif desde tu app.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Elige la opci\xF3n \u201DPagar\u201D.", "Puedes pagar tu Tarjeta de Cr\xE9dito BanBif y tambi\xE9n las de los otros bancos.      ", "Elige la Tarjeta a pagar.", "Selecciona la moneda, el importe y la cuenta.", "\xA1Y listo! Pagaste tu Tarjeta de Cr\xE9dito BanBif al instante."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/mJYdJ1yTmSY?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "17. Paga todas tus Tarjetas de Crédito de otros bancos desde tu BanBif App",
  parrafo: "Descubre c\xF3mo realizar los pagos de tu tarjeta de cr\xE9dito de otros bancos a trav\xE9s de tu Banbif App.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Elige la opci\xF3n \u201CPagar\u201D.", "Escoge la opci\xF3n \u201CTarjetas de Otros Bancos\u201D.", "Elige el banco, tarjeta, monto a pagar y cuenta a cargar.", "Confirma tu pago.", "\xA1Y listo! Pagaste tu Tarjeta de otro banco.", "Si deseas, comparte tu comprobante."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dYthR9qIp0I?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "18. Activa tu Cuenta de Ahorro 100% digital",
  parrafo: "Descubre c\xF3mo activar tu Cuenta de Ahorro 100% Digital a trav\xE9s de la BanBif App.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CIdentificaci\xF3n\u201D.", "Registra tu huella que se va a validar.", "Haz clic en \u201CEmpezar\u201D.", "Sigue las instrucciones hasta tener la confirmaci\xF3n de verificaci\xF3n.", "Perm\xEDtele al dispositivo continuar con la validaci\xF3n.", "Espera hasta que el sistema env\xEDe el mensaje de confirmaci\xF3n", "Responde las preguntas de verificaci\xF3n.", "Confirma los productos contratados.", "\xA1Y listo! BanBif termin\xF3 de validar tu identidad. Tu cuenta de Ahorro Digital ya se encuentra activa."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/I2R-mnDL8LA?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "19. Abre una cuenta Depósito a Plazo con nosotros",
  parrafo: "Descubre aqu\xED c\xF3mo abrir tu cuenta de Dep\xF3sito a Plazo a trav\xE9s del Banbif App.    ",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CCuentas Click\u201D.", "Haz clic en \u201CAbre Dep\xF3sito a Plazo\u201D.", "Despliega el tipo de producto que vas a crear.", "Selecciona la moneda de tu Dep\xF3sito a Plazo.", "Ingresa el monto con el que deseas abrir tu Dep\xF3sito a Plazo.", "Elige el plazo.", "Elige la cuenta de donde se cargar\xE1 el importe para tu Dep\xF3sito a Plazo.\n      ", "Confirma los datos.", "Valida el correo a donde te llegar\xE1n los datos de tu Dep\xF3sito a Plazo.", "Revisa la simulaci\xF3n.", "Acepta las condiciones del contrato.", "Confirma la apertura de tu Dep\xF3sito a Plazo.", "\xA1Y listo! Ya cuentas con tu Dep\xF3sito a Plazo."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/WVqEHHRSZPs?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "20. Haz tus retiros del cajero sin Tarjeta",
  parrafo: "Con HOLAbank puedes programar tus retiros desde tu celular. Aprende c\xF3mo en este video.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CRetiros Sin Tarjeta\u201D.", "Elige la opci\xF3n Para m\xED o Para otra persona. En caso sea Para otra persona, se deber\xE1 ingresar el n\xFAmero de documento de identidad del beneficiario.", "Selecciona la cuenta de la que quieres retirar.", "Coloca el monto a retirar.", "Ingresa la clave SMS token que te llegar\xE1.", "Selecciona obtener Clave Temporal.", "Anota tu Clave Temporal o comp\xE1rtela v\xEDa SMS o correo electr\xF3nico.      ", "Ya en el cajero BanBif, selecciona la opci\xF3n \u201CRetirar sin Tarjeta\u201D.", "Ingresa tu n\xFAmero de celular y la Clave Temporal.", "\xA1Y listo! Ya puedes retirar tu dinero sin tarjeta."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/JjdMKXryyB0?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "21. Usa nuestro Ahorro Programado",
  parrafo: "Es un servicio que te permite realizar de manera autom\xE1tica y por el tiempo que desees, transferencias peri\xF3dicas de dinero entre tus cuentas de ahorro BanBif. Recuerda que es indispensable que cuentes con al menos con 2 cuentas de ahorro en la misma moneda.\n    <br/> <br/>A continuaci\xF3n te ense\xF1amos c\xF3mo activarlo:",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ve a la secci\xF3n de men\xFA e ingresa a \u201COpciones de ahorro\u201D.", "Selecciona la opci\xF3n \u201CAhorro Programado\u201D.", "Completa todos los campos requeridos con tu informaci\xF3n y cuentas.", "\xA1Y listo! Ya puedes programar tus ahorros de forma muy sencilla cada vez que lo desees y durante el tiempo que lo necesites."],
  video: ""
}, {
  titulo: "22. Ahorro Vuelto con tu Tarjeta de Débito",
  parrafo: "Disfruta de este servicio que te permitir\xE1 redondear tus compras, generando un ahorro autom\xE1tico con este redondeo.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ingresa a la barra de men\xFA y haz clic en \u201COpciones de ahorro\u201D", "Selecciona la opci\xF3n \u201CAhorro Vuelto\u201D.      ", "Completa todos los campos requeridos con tu informaci\xF3n.", "\xA1Y listo! Ya puedes ahorrar de forma muy sencilla mientras compras; adem\xE1s, el dinero que vas guardando en tu otra cuenta de ahorros va generando intereses mes a mes."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qZe7UqQ26Nc?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "23. Configura tus notificaciones de consumo en Tarjeta de Débito y Crédito",
  parrafo: "Para poder observar las notificaciones de consumo en tus tarjetas BanBif, solo tienes que realizar una transferencia y autom\xE1ticamente se enviar\xE1 un correo a tu mail asociado con nosotros. Mira los pasos para Transferir:",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CServicios de mis Tarjetas\u201D.", "Haz clic en \u201CMis notificaciones de tarjetas\u201D", "Ahora podr\xE1s observar las notificaciones disponibles para cada uno de tus productos.", "En el men\xFA desplegable de cada producto, selecciona la opci\xF3n \u201CEditar\u201D.", "Configura y personaliza los distintos campos que deseas visualizar para tus notificaciones.", "Haz clic en \u201CGuardar cambios\u201D.", "\xA1Y listo! Tus notificaciones han sido actualizadas y personalizadas a tu gusto. Cada vez que realizar alguna operaci\xF3n, te llegar\xE1 un aviso directamente a tu email asociado."],
  video: ""
}, {
  titulo: "24. Aprende a usar tus servicios de pagos con QR",
  parrafo: "Puedes realizar tus pagos escaneando el c\xF3digo QR en tu establecimiento favorito. Mira el video y descubre c\xF3mo.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Selecciona la opci\xF3n \u201CAprende a usar tu Tarjeta de D\xE9bito Virtual desde tu celulares QR\u201D.", "Escanea el c\xF3digo QR que est\xE1 en el establecimiento donde quieres pagar. ", "Elige la tarjeta con la que deseas pagar.", "Ingresa la clave token que te llegar\xE1 por SMS.", "Confirma el Nombre y monto a pagar en el establecimiento.", "\xA1Y listo! Ya puedes realizar tus pagos con QR."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/3ELuDhbXY_E?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}, {
  titulo: "25. Aprende a usar tu Tarjeta de Débito Virtual desde tu celular",
  parrafo: "Conocer c\xF3mo usar tu Tarjeta de D\xE9bito Virtual y realizar compras m\xE1s seguras sin salir de casa.",
  respuestas: ["Inicia sesi\xF3n en tu BanBif App con tu n\xFAmero de documento y clave.", "Ingresa a la barra de men\xFA y selecciona \u201DMis productos\u201D.", "Encuentra y selecciona tu \u201DTarjeta D\xE9bito Virtual\u201D.", "Visualiza las \u201DCuentas afiliadas a tu Tarjeta D\xE9bito Virtual\u201D", "Selecciona \u201DVer datos\u201D.", "Ingresa la clave token que te llegar\xE1 por SMS.", "Visualiza los datos de tu Tarjeta D\xE9bito Virtual.", "\xA1Y listo! Al comprar por internet, solo ingresa los datos de tu Tarjeta D\xE9bito Virtual al pagar."],
  video: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/GWhTxTN0WKQ?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}];
var dataDigital = [{
  titulo: "1. ¿Olvidaste tu clave o bloqueaste tu acceso?",
  parrafo: "Al detectar el intento de ingreso de una clave errada por 3 veces consecutivas, por temas de seguridad, autom\xE1ticamente se proceder\xE1 con el bloqueo temporal del usuario. En caso no recuerdes tu clave digital, podr\xE1s recuperarlo a trav\xE9s de los siguientes pasos:\n      ",
  respuestas: ["Inicia sesi\xF3n en tu Banca por Internet <a href=\"http://www.banbif.com.pe\"> www.banbif.com.pe</a> en la secci\xF3n HOLAbank. \n      ", "Ingresa a la opci\xF3n \u201C\xBFOlvidaste tu contrase\xF1a o bloqueaste tu acceso?", "Completa tus datos en la Solicitud de Nueva Clave (<i>incluyendo n\xFAmero de tarjeta y clave de cajero</i>).", " Confirma que se haya enviado una contrase\xF1a temporal a tu correo personal. (<i>en caso no recuerdes cual\n        es tu correo electr\xF3nico que registraste en el Banco o deseas actualizarla,\n        consulta con nuestra Banca Telef\xF3nica al 01 631 9000 para Lima o 0 801 0 0456\n        para Provincias, o en todo caso ac\xE9rcate a cualquiera de nuestras Oficinas a\n        nivel nacional</i>)", "Ingresa nuevamente a tu Banca por Internet usando la contrase\xF1a temporal.", "Una vez ingresado, autom\xE1ticamente se te solicitar\xE1 generar una nueva contrase\xF1a \xA1y listo!\n      <br/>\n      <br/>\n      Recuerda que, para el proceso de \u201CRestablecer tu clave digital\u201D, deber\xE1s tener a\n      la mano tu n\xFAmero de tarjeta y la clave secreta de 4 d\xEDgitos de la misma. En\n      caso hayas olvidado tu clave de tu tarjeta, deber\xE1s tramitar una nueva en\n      nuestras Oficinas."],
  video: ""
}, {
  titulo: "2. Cambia tu contraseña temporal y genera tu propia clave digital ",
  parrafo: "Una vez que ya cuentes con tu contrase\xF1a temporal y el sistema te pide que generas una nueva, deber\xE1s tener en cuenta lo siguiente:\n      ",
  respuestas: ["Tu nueva clave debe contar con m\xEDnimo 8 caracteres y m\xE1ximo 10. ", "Debe estar conformado por: al menos una letra may\xFAscula, una letra min\xFAscula, un n\xFAmero y un caracter especial (p.e: -, _, #, $, &, @, \xA1, !, ?, \xBF, \u201C, /, etc.)", "\xA1Y listo! Ya cuentas con tu propia clave digital.\n      <br />\n      <br />\n      Recuerda que el env\xEDo de una contrase\xF1a temporal se puede realizar solo una vez\n      al d\xEDa. Si solicitas otra clave temporal en el transcurso del d\xEDa, el sistema no\n      te permitir\xE1 seguir con el proceso. Podr\xE1s realizar otra solicitud al d\xEDa\n      siguiente"],
  video: ""
}, {
  titulo: "3. ¿Qué operaciones puedo hacer en la Banca por Internet?",
  parrafo: "A trav\xE9s de nuestra Banca por Internet, puedes realizar diferentes operaciones:\n      ",
  respuestas: ["Transferencias entre cuentas propias, a otras cuentas BanBif, a otros bancos y al exterior.", "Pagar tus tarjetas BanBif, tarjetas de otros Bancos, Tarjetas Diners, tus pr\xE9stamos y diferentes servicios", "Env\xEDo de dinero PLIN.", "Activa y desactiva tus servicios/notificaciones de tus tarjetas.", "Acceder a las diferentes ofertas de productos que tenemos para ti.", "Gestionar tus operaciones frecuentes y programadas, as\xED como revisar tu historial de operaciones.", "Comprar y vender d\xF3lares.", "Ahorra tus vueltos y programa tus ahorros.", "Realiza retiros sin tarjetas.", "Abre cuentas de ahorro y dep\xF3sitos a plazo.", "Revisa el tipo de cambio.", "Administrar tus cuentas, tarjetas y PLIN."],
  video: ""
}, {
  titulo: "4. Afíliate a la Clave SMS Token para que realices todas tus operaciones digitales",
  parrafo: "La Clave SMS Token es un elemento de seguridad que podr\xE1s utilizar para confirmar algunas operaciones que vas a realizar a trav\xE9s de HOLAbank como por ejemplo: PLIN, transferencias, pagos, etc. El SMS Token est\xE1 conformado por 6 d\xEDgitos generados aleatoriamente y lo recibir\xE1s en tu celular y/o correo electr\xF3nico cada vez que realices una operaci\xF3n.\n      <br/> Para afiliarte a la Clave SMS Token, cuentas con 2 opciones:\n      ",
  respuestas: ["Si cuentas con una Tarjeta de D\xE9bito o Cr\xE9dito BanBif, puedes\n      afiliarte directamente desde la Banca Telef\xF3nica (<i>01 631 9000 para Lima o 0 801\n      0 0456 para Provincias</i>).", "En caso no cuentes con una Tarjeta con nosotros, deber\xE1s acercarte a la Oficina m\xE1s cercana a tu disposici\xF3n para confirmar tu n\xFAmero y solicitar la afiliaci\xF3n."],
  video: ""
}, {
  titulo: "5. ¿Qué es PLIN y cómo afiliarse?",
  parrafo: "PLIN es la nueva forma de cobrar y pagar desde el app de BBVA, Interbank, Scotiabank, BanBif y otras entidades solamente usando tu n\xFAmero de celular o con c\xF3digo QR sin necesidad de contar con el n\xFAmero de cuenta ni c\xF3digo interbancario.\n      <br/>Para m\xE1s informaci\xF3n, puedes ingresar a <a href=\"http://www.plin.pe\" target=\"_blank\" rel=\"noopener noreferrer\">www.plin.pe</a>\n      <br/> <br/> Descubre c\xF3mo afiliarte a PLIN antes de realizar tus operaciones:",
  respuestas: ["Inicia sesi\xF3n en tu Banca por Internet <a href=\"http://www.banbif.com.pe\" target=\"_blank\" rel=\"noopener noreferrer\">www.banbif.com.pe</a> en la\n      secci\xF3n HOLAbank con tu n\xFAmero de documento y clave.", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CAdministrar\u201D.", "Selecciona la opci\xF3n \u201CConfigurar PLIN\u201D.", "En la secci\xF3n de \u201CBanco para recibir dinero\u201D, selecciona a BanBif como el banco principal. Adem\xE1s, puedes colocar tambi\xE9n tu n\xFAmero de cuenta para enviar dinero. Es importante tambi\xE9n que registres tu n\xFAmero de celular para que lo puedas vincular con PLIN."],
  video: ""
}, {
  titulo: "6. ¿Cómo envío dinero por PLIN?",
  parrafo: "",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CTransferir\u201D.", "Selecciona la opci\xF3n \u201CPlin\u201D.", "Coloca el n\xFAmero telef\xF3nico destinatario al que enviar\xE1s dinero.\n      ", "Ingresa el importe (m\xE1ximo hasta S/500 por operaci\xF3n y m\xE1ximo S/1500 al d\xEDa). ", "Confirma tu operaci\xF3n.", "Ingresa tu Clave SMS Token y selecciona el bot\xF3n \u201CValidar c\xF3digo\u201D.", "\xA1Plin y listo!"],
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rCOHxVZoBbg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
  titulo: "7. Paga tu Tarjeta de Crédito BanBif",
  parrafo: "¡Pagos rápidos y desde casa! Conoce cómo pagar tu Tarjeta de Crédito BanBif desde tu app.",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Elige la opci\xF3n \u201DPagar\u201D", "Selecciona la opci\xF3n \u201DTarjeta de Cr\xE9dito BanBif\u201D.", "Elige la Tarjeta a pagar.", "Selecciona la moneda, el importe y la cuenta.\n      ", "\xA1Y listo! Pagaste tu Tarjeta de Cr\xE9dito BanBif al instante. "],
  video: ""
}, {
  titulo: "8. Paga otras Tarjetas de Crédito BanBif ",
  parrafo: "¡Pagos rápidos y desde casa! Conoce cómo pagar tu Tarjeta de Crédito BanBif desde tu app.",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Elige la opci\xF3n \u201DPagar\u201D", "Selecciona la opci\xF3n \u201CMis Tarjetas BanBif\u201D.", "Digita la tarjeta a pagar.", "Selecciona el monto a pagar y la cuenta origen a debitar.\n      ", "\xA1Y listo! Pagaste tu Tarjeta de Cr\xE9dito BanBif al instante. "],
  video: ""
}, {
  titulo: "9. Paga todas tus Tarjetas de Crédito de cualquier banco",
  parrafo: "Descubre cómo realizar los pagos de tu Tarjeta de Crédito de cualquier banco a través de nuestra Banca por Internet:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Elige la opci\xF3n \u201DPagar\u201D", "Escoge la opci\xF3n \u201CTarjetas de Otros Bancos\u201D.", "Elige el banco, tarjeta, monto a pagar y cuenta a cargar.", "Confirma tu pago.", "\xA1Y listo!"],
  video: ""
}, {
  titulo: "10. Aprende a realizar tus Pagos de Servicios",
  parrafo: "Aprende a realizar tus pagos de servicios a través de la Banca por Internet. Sigue estos pasos:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", 'Elige la opción “Pagar”', 'Selecciona la opción “Servicios”.', "Busca el servicio que desees pagar", "Finalmente, ingresa tu código de pago (nro. de telefóno, documento, suministro, etc.)", 'Se te mostrará la deuda pendiente. En todo caso, indica el monto a cancelar.', "Selecciona el medio de pago", 'Continúa y confirma tu operación con la Clave SMS Token.', '¡Y listo! Ya realizaste tu operación'],
  video: ''
}, {
  titulo: "11. Realiza tus transferencias",
  parrafo: "En BanBif puedes realizar tus transferencias las 24 horas del día, por ello te mostramos los pasos para hacerlo:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Selecciona la opci\xF3n \u201CTransferir\u201D.", "Puedes elegir entre transferir entre tus cuentas BanBif, a otras cuentas BanBif y otros bancos.", "Completa la informaci\xF3n solicitada (monto a transferir y cuenta de destino).", "Ingresa la clave token que te llegar\xE1 por SMS o Email.", "\xA1Y listo! Ya terminaste tu transferencia, recuerda que puedes realizarla a cualquier hora del d\xEDa."],
  video: ""
}, {
  titulo: "12. Realiza tus pagos de préstamos",
  parrafo: "¡Contamos con las herramientas para que pagues lo que necesites sin salir de tu casa!",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Elige la opci\xF3n \u201DPagar\u201D.", "Elige la opci\xF3n \u201DPr\xE9stamos\u201D", "Selecciona el pr\xE9stamo a pagar y la cuenta donde se cargar\xE1 el importe a pagar.", "Confirma los datos y \xA1listo! con eso ya completaste tu operaci\xF3n."],
  video: ""
}, {
  titulo: "13. Activa y desactiva tus servicios adicionales de Tarjetas",
  parrafo: "¿Quieres activar o desactivar tus servicios adicionales de Tarjeta de Crédito o Débito? Aquí te enseñamos los pasos para hacerlo:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n: \u201CServicios de mis tarjetas\u201D.", "Luego haz clic en \u201CActivar o desactivar servicios y notificaciones de Tarjetas\u201D y luego en \u201CMis servicios de Tarjetas\u201D.", "Una vez all\xED, podr\xE1s visualizar las diferentes tarjetas con las que cuentas, y podr\xE1s hacer clic en el \xEDcono de editar para configurarlas.", "Para Tarjetas de D\xE9bito encontrar\xE1s las siguientes opciones: \u201CCompras en exterior\u201D, \u201CCompras por internet\u201D y \u201CDisposici\xF3n de efectivo en el exterior\u201D.", "Para Tarjetas de Cr\xE9dito encontrar\xE1s las siguientes opciones: \u201CCompras en el exterior\u201D, \u201CCompras por Internet\u201D, \u201CDisposici\xF3n de efectivo\u201D y \u201CSobregiro\u201D.\n      <br/><br/>\n      Recuerda, tus tarjetas BanBif vienen con todas las opciones desactivadas, por lo que ser\xE1 necesario que las configures si deseas realizar compras por internet o transferencias a trav\xE9s de aplicaciones como PLIN o suscribirte a plataformas como Netflix, Disney, Spotify entre muchas m\xE1s."],
  video: ""
}, {
  titulo: "14. Configura tus notificaciones de consumo en Tarjetas",
  parrafo: "Para poder configurar y personalizar las notificaciones de consumo en tus tarjetas BanBif. Solo debes seguir los siguientes pasos:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CAdministrar\u201D.", "Haz clic en \u201CNotificaciones\u201D", "Ahora podr\xE1s observar las notificaciones disponibles para cada uno de tus productos.\n      ", "En el men\xFA desplegable de cada producto, selecciona la opci\xF3n \u201CEditar\u201D", "Configura y personaliza los distintos campos que deseas visualizar para tus notificaciones.", "Haz clic en \u201CConfirmar\u201D.", "\xA1Y listo! Tus notificaciones han sido actualizadas y personalizadas a tu gusto. Cada vez que realizar alguna operaci\xF3n, te llegar\xE1 un aviso directamente a tu email asociado."],
  video: ""
}, {
  titulo: "15. Conoce cómo visualizar tus Estados de Cuenta",
  parrafo: "Aprende a revisar los estados de cuenta de tus Tarjetas de Crédito con los siguientes pasos:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Selecciona el producto que desees visualizar.", "Haz clic en el bot\xF3n de descarga que se encuentra en la parte derecha superior de tu cuenta.", "Exporta tus estados de cuenta en versi\xF3n PDF, Excel o CSV.", "\xA1Y listo! Ya tienes a la mano tus Estados de Cuenta."],
  video: ""
}, {
  titulo: "16. Haz tus retiros del cajero sin Tarjeta",
  parrafo: "Con HOLAbank puedes programar tus retiros desde tu casa. Aprende cómo a través de estos pasos: pasos:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CRetiros Sin Tarjeta\u201D.", "Elige la opci\xF3n \u201CPara m\xED\u201D o \u201CPara otra persona\u201D. En caso sea para otra persona, se deber\xE1 ingresar el n\xFAmero de documento del beneficiario.", "Selecciona la cuenta a cargo de la que quieres retirar.", "Coloca la moneda y el monto a retirar.", "Ingresa la clave SMS/Email token que te llegar\xE1.", "Selecciona la opci\xF3n \u201CObtener Clave Temporal\u201D.", "Anota tu Clave Temporal o comp\xE1rtela v\xEDa SMS o correo electr\xF3nico.", "Ya en el cajero BanBif, selecciona la opci\xF3n \u201CRetirar sin Tarjeta\u201D.", "Ingresa tu n\xFAmero de celular y la Clave Temporal.", "\xA1Y listo! Ya puedes retirar tu dinero sin tarjeta\n      <br/><br/>\n      De tratarse el retiro para otras personas: Solo elige la opci\xF3n \u201CPara otra persona\u201D e ingresa su n\xFAmero de celular, luego sigue los mismos pasos descritos anteriormente.\n      "],
  video: ""
}, {
  titulo: "17. Conoce nuestro Ahorro Vuelto",
  parrafo: "Disfruta de este servicio que te permitirá redondear tus compras generando un ahorro automático con este redondeo:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA e ingresa a \u201COpciones de ahorro\u201D. ", "Selecciona la opci\xF3n \u201CAhorro Vuelto\u201D.", "Completa todos los campos requeridos con tu informaci\xF3n.", "\xA1Y listo! Ya puedes ahorrar de forma muy sencilla mientras compras; adem\xE1s, el dinero que vas guardando en tu otra cuenta de ahorros va generando intereses"],
  video: ""
}, {
  titulo: "18. Abre una cuenta Depósito a Plazo con nosotros",
  parrafo: "Disfruta de este servicio que te permitirá redondear tus compras generando un ahorro automático con este redondeo:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201DCuentas Click\u201D.", "Selecciona la opci\xF3n \u201DAbrir Dep\xF3sito a Plazo\u201D.", "Despliega el tipo de producto que vas a crear.", "Selecciona la moneda de tu Dep\xF3sito a Plazo.", "Ingresa el monto con el que deseas abrir tu Dep\xF3sito a Plazo y elige el plazo.", "Elige la cuenta de donde se cargar\xE1 el importe para tu Dep\xF3sito a Plazo.", "Confirma los datos.", "Valida el correo a donde te llegar\xE1n los datos de tu Dep\xF3sito a Plazo.", "Revisa la simulaci\xF3n.", "Acepta las condiciones del contrato.", "Confirma la apertura de tu Dep\xF3sito a Plazo \xA1y listo!."],
  video: ""
}, {
  titulo: "19. Abre una Cuenta de Ahorro Digital sin necesidad de ir al banco",
  parrafo: "Abrir una cuenta de ahorro es tan sencillo que puedes hacerlo desde tu Banca por Internet:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201CCuentas y Dep\xF3sitos Click\u201D.", "Selecciona la opci\xF3n \u201DCuentas y Dep\xF3sitos Click\u201D.", "Selecciona la opci\xF3n \u201DAbre cuentas de ahorro\u201D.", "Completa el requisito requerido de poseer \xFAnicamente la nacionalidad peruana.", "Elige la cuenta que deseas abrir en la opci\xF3n \u201CTipo de producto\u201D. Por ejemplo: \u201DCuenta Conveniente\u201D.", "Elige la cuenta de donde sacar tus fondos.", "Digita el monto de apertura.", "Selecciona \u201CContinuar\u201D.", "Valida tu correo donde llegar\xE1 tu confirmaci\xF3n.", "Verifica los datos para tu nueva cuenta.", "Acepta las condiciones del contacto.", "Selecciona \u201CConfirmar\u201D.", "\xA1Y listo! Ya cuentas con tu nueva Cuenta de ahorros."],
  video: ""
}, {
  titulo: "20. Programa tus operaciones",
  parrafo: "Te mostramos cómo hacerlo desde la Banca por Internet:",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA y ve a la opci\xF3n \u201COperaciones Frecuentes y Programadas\u201D.", "Selecciona la opci\xF3n \u201COperaciones Programadas\u201D.", "Da clic en programar nueva transacci\xF3n.", "Elige la opci\xF3n que desees. Puedes programar: Transferencias, Pagos de tarjetas, Pago de pr\xE9stamos o Pago de servicios.", "Configura la frecuencia de ejecuci\xF3n del pago.", "Contin\xFAa el proceso.", "\xA1Y listo! Ya tienes tus operaciones programadas y se ejecutar\xE1n en las fechas que seleccionaste."],
  video: ""
}, {
  titulo: "21. Revisa tu historial de transacciones",
  parrafo: "",
  respuestas: ["Inicia sesi\xF3n en la Banca por Internet <a href=\"https://www.banbif.com.pe\">www.banbif.com.pe</a> en la secci\xF3n HOLAbank con tu n\xFAmero de documento y clave", "Ingresa a la barra de men\xFA y selecciona la opci\xF3n \u201COperaciones Frecuentes y Programadas\u201D.", "Selecciona la opci\xF3n \u201DHistorial\u201D.", "Puede configurar los filtros para clasificar las operaciones que deseas ver, por ejemplo, rangos de fechas, estado de la transacci\xF3n, operaciones frecuentes, etc.", "\xA1Y listo! Ya puedes revisar todo el historial de transacciones que realizaste.\n      Si lo deseas, puedes descargar tu historial en formato pdf usando la opci\xF3n \u201CDescarga\u201D que se encuentra en la parte superior derecha."],
  video: ""
}];