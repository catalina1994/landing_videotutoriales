const dataApp = [
  {
    titulo: "1. ¿Olvidaste tu clave o bloqueaste tu acceso?",
    parrafo:
      "Al detectar el intento de ingreso de una clave errada por 3 veces consecutivas, por temas de seguridad, automáticamente se procederá con el bloqueo temporal del usuario. En caso no recuerdes tu clave digital, podrás recuperarlo a través de los siguientes pasos:",
    respuestas: [
      "Ingresa a tu BanBif App.",
      "Ingresa a la opción “¿Olvidaste tu contraseña o bloqueaste tu acceso?      ",
      "Completa tus datos en la Solicitud de Nueva Clave (incluyendo número de tarjeta y clave de cajero)",
      "Confirma que se haya enviado una contraseña temporal a tu correo personal. (en caso no recuerdes cuál es tu correo electrónico que registraste en el Banco o deseas actualizarla, consulta con nuestra Banca Telefónica al 01 631 9000 para Lima o 0 801 0 0456 para Provincias, o en todo caso acércate a cualquiera de nuestras Oficinas a nivel nacional)      ",
      "Ingresa nuevamente a tu BanBif App usando la contraseña temporal.",
      "Una vez ingresado, automáticamente se te solicitará generar una nueva contraseña ¡y listo!",
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ia1tUEOoQvA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "2. Cambia tu contraseña temporal y genera tu propia clave digital",
    parrafo: "Una vez que ya cuentes con tu contraseña temporal y el sistema te pide que generas una nueva, deberás tener en cuenta lo siguiente:",
    respuestas: [
      "Tu nueva clave debe contar con mínimo 8 caracteres y máximo 10. ",
      "Debe estar conformado por: al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (p.e: -, _, #, $, &, @, ¡, !, ?, ¿, “, /, etc.)",
      `¡Y listo! Ya cuentas con tu propia clave digital.
      <br/><br/>
      Recuerda que el envío de una contraseña temporal se puede realizar solo una vez al día. Si solicitas otra clave temporal en el transcurso del día, el sistema no te permitirá seguir con el proceso. Podrás realizar otra solicitud al día siguiente.
      `,
    ],
    video: "",
  },
  {
    titulo: "3. ¿Qué operaciones puedo hacer en la Banca por Internet",
    parrafo: "A través de nuestra Banca por Internet, puedes realizar diferentes operaciones:",
    respuestas: [
      `Transferencias entre cuentas propias, a otras cuentas BanBif, a otros bancos y al exterior.`,
      `Pagar tus tarjetas BanBif, tarjetas de otros Bancos, Tarjetas Diners, tus préstamos y diferentes servicios.`,
      `Envío de dinero PLIN.`,
      `Pago y cobro con QR para PLIN y Niubiz.`,
      `Activa y desactiva tus servicios/notificaciones de tus tarjetas.`,
      `Acceder a las diferentes ofertas de productos que tenemos para ti.`,
      `Gestionar tus operaciones frecuentes y programadas, así como revisar tu historial de operaciones.`,
      `Comprar y vender dólares.`,
      `Ahorra tus vueltos y programa tus ahorros.`,
      `Realiza retiros sin tarjetas.`,
      `Abre cuentas de ahorro y depósitos a plazo.`,
      `Revisa el tipo de cambio`,
    ],
    video: "",
  },
  {
    titulo: "4. Afíliate a la Clave SMS Token para que realices todas tus operaciones digitales",
    parrafo: `La Clave SMS Token es un elemento de seguridad que podrás utilizar para confirmar algunas operaciones que vas a realizar a través de HOLAbank como, por ejemplo: PLIN, transferencias, pagos, etc. El SMS Token está conformado por 6 dígitos generados aleatoriamente y lo recibirás en tu celular y/o correo electrónico cada vez que realices una operación.
    <br/> <br/> Para afiliarte a la Clave SMS Token, cuentas con 2 opciones: `,
    respuestas: [
      `Si cuentas con una Tarjeta de Débito o Crédito BanBif, puedes afiliarte directamente desde la Banca Telefónica (01 631 9000 para Lima o 0 801 0 0456 para Provincias).`,
      `En caso no cuentes con una Tarjeta con nosotros, deberás acercarte a la Oficina más cercana a tu disposición para confirmar tu número y solicitar la afiliación.`,
    ],
    video: "",
  },
  {
    titulo: "5. ¿Qué es PLIN?",
    parrafo: `PLIN es la nueva forma de cobrar y pagar desde el app de BBVA, Interbank,
    Scotiabank, BanBif y otras entidades solamente usando tu número de celular o con
    código QR sin necesidad de contar con el número de cuenta ni código
    interbancario. Para más información, puedes ingresar a <a href="http://www.plin.pe" target="_blank" rel="noopener noreferrer">www.plin.pe</a>. `,
    respuestas: [
    ],
    video: "",
  },
  {
    titulo: "6. ¿Cómo afiliarte a PLIN?",
    parrafo: `Descubre cómo afiliarte a PLIN antes de realizar tus operaciones: `,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Selecciona “Transferencias”, y luego “Plin”`,
      `Selecciona “Empezar” y comienza tu afiliación.`,
      `Confirma tu número de celular y elige una cuenta, desde esta podrás enviar y recibir dinero.`,
      `Acepta los “Términos y Condiciones” eligiendo el recuadro en blanco.`,
      `¡Plin y listo! ya puedes enviar y recibir dinero.`,
    ],
    video: "",
  },
  {
    titulo: "7. ¿Cómo envío dinero por PLIN?",
    parrafo: `Descubre cómo utilizar PLIN desde tu celular para enviar y recibir dinero.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Selecciona “Transferencias” y luego “Plin”.`,
      `Elige el contacto al que deseas enviar dinero.`,
      `Ingresa el importe (mínimo s/. 1 hasta s/. 500 por operación).`,
      `Confirma tu operación.`,
      `Ingresa tu clave SMS Token y selecciona el botón Validar código.`,
      `¡Plin y listo!.`,
      
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/rCOHxVZoBbg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "8. ¿Cómo pagar con Plin QR?",
    parrafo: `¡Tus pagos con Plin QR ya son una realidad! Aquí te enseñamos cómo:`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ingresa a la opción "QR".`,
      `Escanea el código QR enfocando con tu cámara el código QR del comercio o contacto.`,
      `Ingresa el monto que deseas enviar, también podrás colocar una descripción.      `,
      `Confirma los datos del destinatario y el monto.`,
      `Ingresa el código token que se enviará a tu SMS o Email.`,
      `¡Plin y listo! El comercio o contacto recibirá el dinero en su cuenta de forma inmediata.`,
    ],
    video: "",
  },
  {
    titulo: "9. ¿Cómo cobrar con Plin QR?",
    parrafo: `¡Tus cobros con Plin QR ya son una realidad! Aquí te enseñamos cómo:`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ingresa a la opción "QR".`,
      `Desde el escáner del código QR., selecciona "Mostrar mi QR Plin".`,
      `Selecciona "Compartir" para que puedas enviarlo a tus contactos.`,
      `¡Plin y listo! ya puedes recibir dinero compartiendo tu código QR.`,
    ],
    video: "",
  },
  {
    titulo: "10. Quiero activar/desactivar mis servicios adicionales de Tarjeta de Débito y Crédito",
    parrafo: `¿Quieres activar o desactivar tus servicios adicionales de Tarjeta de Crédito o Débito? Aquí te enseñamos los pasos para hacerlo:`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y contraseña.      `,
      `Selecciona el menú superior (las tres líneas blancas de la esquina superior izquierda).`,
      `En el menú, encontrarás la opción: “Servicios de mis tarjetas”. Ingresa a esta opción.`,
      `Luego, ingresa a la opción “Mis Servicios de Tarjetas”.`,
      `Una vez ahí, podrás visualizar las diferentes tarjetas con las que cuentas, y podrás hacer clic en el ícono de editar para configurarlas.`,
      `Para Tarjetas de Débito encontrarás las siguientes opciones: “Compras en exterior”, “Compras por internet” y “Disposición de efectivo en el exterior”.`,
      `Para Tarjetas de Crédito encontrarás las siguientes opciones: “Compras en el exterior”, “Compras por Internet”, “Disposición de efectivo” y “Sobregiro”.`,
      `Recuerda, tus tarjetas BanBif vienen con todas las opciones desactivadas, por lo que será necesario que las configures si deseas realizar compras por internet o transferencias a través de aplicaciones como Plin o suscribirte a plataformas como Netflix, Disney, Spotify entre muchas más.`,
      
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/TK11aMDO94o?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "11. Comparte tu número de cuenta y CCI",
    parrafo: `Descubre cómo compartir tu número de cuenta y CCI directamente desde tu BanBif App.
    Selecciona la opción “Compartir Cuenta” que aparece debajo de cada uno de tus productos y, ¡listo! ya puedes compartir tu número de cuenta y CCI para recibir dinero en tus cuentas.
    `,
    respuestas: [
      
    ],
    video: `https://www.youtube.com/watch?v=dw2XtHST-Xs&feature=emb_title&ab_channel=BanBif    `,
  },
  {
    titulo: "12. Conoce cómo verificar el saldo de tu cuenta",
    parrafo: `Aprende cómo verificar el saldo de tus cuentas o las cuotas del préstamo que solicitaste.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Selecciona la opción “Mis productos“.`,
      `¡Y listo! Desde este apartado podrás verificar los saldos y tus productos vigentes.
      Si deseas ver los movimientos e historial de algunos de tus productos, solo selecciona uno de ellos y presiona la opción “Movimientos“ que se encuentra en la parte superior derecha.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Qxgi4H6RdSg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "13. Realiza transferencias",
    parrafo: `En BanBif puedes realizar tus transferencias las 24 horas del día, por ello te mostramos los pasos para hacerlo:`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Selecciona la opción “Transferir”.`,
      `Puedes elegir entre transferir entre tus cuentas BanBif, a otras cuentas BanBif y a otros bancos.`,
      `Completa la información solicitada (monto a transferir y cuenta de destino).`,
      `Ingresa la clave token que te llegará por SMS o Email.`,
      `¡Y listo! Ya terminaste tu transferencia, recuerda que puedes realizarla a cualquier hora del día.`,
    ],
    video: "",
  },
  {
    titulo: "14. ¿Cómo puedo pagar mis servicios?",
    parrafo: `¿Sabías que puedes pagar tus servicios desde tu celular? Aprende a realizar estos pagos a través de tu BanBif App.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Elige la opción ”Pagar”.`,
      `Selecciona ”Servicios”.`,
      `Busca el servicio que desees pagar.`,
      `Ingresa tu código de pago (teléfono, nro. de documento, suministro, etc).`,
      `Se te mostrará la deuda pendiente, o en todo caso te indicará que coloques el monto a cancelar.`,
      `Selecciona el medio de pago.`,
      `Seleccionar “Siguiente” y confirmar con la clave SMS/Email token.`,
      `¡Y listo! Ya realizaste tu operación.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/OMD7MJMeDTc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "15. Realiza el pago de tus préstamos desde tu BanBif App",
    parrafo: `¡Contamos con las herramientas para que pagues lo que necesites sin salir de tu casa! `,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Elige la opción ”Pagar”.`,
      `Elige la opción “Préstamos”.`,
      `Selecciona el Préstamo a pagar y la cuenta donde se cargará el importe a pagar.`,
      `Confirma los datos y ¡Listo! pagaste tu préstamo.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mJYdJ1yTmSY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "16. Paga todas tus Tarjetas de Crédito BanBif desde tu BanBif App",
    parrafo: `¡Pagos rápidos y desde casa! Conoce cómo pagar tu Tarjeta de Crédito BanBif desde tu app.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Elige la opción ”Pagar”.`,
      `Puedes pagar tu Tarjeta de Crédito BanBif y también las de los otros bancos.      `,
      `Elige la Tarjeta a pagar.`,
      `Selecciona la moneda, el importe y la cuenta.`,
      `¡Y listo! Pagaste tu Tarjeta de Crédito BanBif al instante.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mJYdJ1yTmSY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "17. Paga todas tus Tarjetas de Crédito de otros bancos desde tu BanBif App",
    parrafo: `Descubre cómo realizar los pagos de tu tarjeta de crédito de otros bancos a través de tu Banbif App.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Elige la opción “Pagar”.`,
      `Escoge la opción “Tarjetas de Otros Bancos”.`,
      `Elige el banco, tarjeta, monto a pagar y cuenta a cargar.`,
      `Confirma tu pago.`,
      `¡Y listo! Pagaste tu Tarjeta de otro banco.`,
      `Si deseas, comparte tu comprobante.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dYthR9qIp0I?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "18. Activa tu Cuenta de Ahorro 100% digital",
    parrafo: `Descubre cómo activar tu Cuenta de Ahorro 100% Digital a través de la BanBif App.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ingresa a la barra de menú y selecciona la opción “Identificación”.`,
      `Registra tu huella que se va a validar.`,
      `Haz clic en “Empezar”.`,
      `Sigue las instrucciones hasta tener la confirmación de verificación.`,
      `Permítele al dispositivo continuar con la validación.`,
      `Espera hasta que el sistema envíe el mensaje de confirmación`,
      `Responde las preguntas de verificación.`,
      `Confirma los productos contratados.`,
      `¡Y listo! BanBif terminó de validar tu identidad. Tu cuenta de Ahorro Digital ya se encuentra activa.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/I2R-mnDL8LA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "19. Abre una cuenta Depósito a Plazo con nosotros",
    parrafo: `Descubre aquí cómo abrir tu cuenta de Depósito a Plazo a través del Banbif App.    `,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ingresa a la barra de menú y selecciona la opción “Cuentas Click”.`,
      `Haz clic en “Abre Depósito a Plazo”.`,
      `Despliega el tipo de producto que vas a crear.`,
      `Selecciona la moneda de tu Depósito a Plazo.`,
      `Ingresa el monto con el que deseas abrir tu Depósito a Plazo.`,
      `Elige el plazo.`,
      `Elige la cuenta de donde se cargará el importe para tu Depósito a Plazo.
      `,
      `Confirma los datos.`,
      `Valida el correo a donde te llegarán los datos de tu Depósito a Plazo.`,
      `Revisa la simulación.`,
      `Acepta las condiciones del contrato.`,
      `Confirma la apertura de tu Depósito a Plazo.`,
      `¡Y listo! Ya cuentas con tu Depósito a Plazo.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/WVqEHHRSZPs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "20. Haz tus retiros del cajero sin Tarjeta",
    parrafo: `Con HOLAbank puedes programar tus retiros desde tu celular. Aprende cómo en este video.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ingresa a la barra de menú y selecciona la opción “Retiros Sin Tarjeta”.`,
      `Elige la opción Para mí o Para otra persona. En caso sea Para otra persona, se deberá ingresar el número de documento de identidad del beneficiario.`,
      `Selecciona la cuenta de la que quieres retirar.`,
      `Coloca el monto a retirar.`,
      `Ingresa la clave SMS token que te llegará.`,
      `Selecciona obtener Clave Temporal.`,
      `Anota tu Clave Temporal o compártela vía SMS o correo electrónico.      `,
      `Ya en el cajero BanBif, selecciona la opción “Retirar sin Tarjeta”.`,
      `Ingresa tu número de celular y la Clave Temporal.`,
      `¡Y listo! Ya puedes retirar tu dinero sin tarjeta.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JjdMKXryyB0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "21. Usa nuestro Ahorro Programado",
    parrafo: `Es un servicio que te permite realizar de manera automática y por el tiempo que desees, transferencias periódicas de dinero entre tus cuentas de ahorro BanBif. Recuerda que es indispensable que cuentes con al menos con 2 cuentas de ahorro en la misma moneda.
    <br/> <br/>A continuación te enseñamos cómo activarlo:`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ve a la sección de menú e ingresa a “Opciones de ahorro”.`,
      `Selecciona la opción “Ahorro Programado”.`,
      `Completa todos los campos requeridos con tu información y cuentas.`,
      `¡Y listo! Ya puedes programar tus ahorros de forma muy sencilla cada vez que lo desees y durante el tiempo que lo necesites.`,
    ],
    video: "",
  },
  {
    titulo: "22. Ahorro Vuelto con tu Tarjeta de Débito",
    parrafo: `Disfruta de este servicio que te permitirá redondear tus compras, generando un ahorro automático con este redondeo.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ingresa a la barra de menú y haz clic en “Opciones de ahorro”`,
      `Selecciona la opción “Ahorro Vuelto”.      `,
      `Completa todos los campos requeridos con tu información.`,
      `¡Y listo! Ya puedes ahorrar de forma muy sencilla mientras compras; además, el dinero que vas guardando en tu otra cuenta de ahorros va generando intereses mes a mes.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qZe7UqQ26Nc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "23. Configura tus notificaciones de consumo en Tarjeta de Débito y Crédito",
    parrafo: `Para poder observar las notificaciones de consumo en tus tarjetas BanBif, solo tienes que realizar una transferencia y automáticamente se enviará un correo a tu mail asociado con nosotros. Mira los pasos para Transferir:`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ingresa a la barra de menú y selecciona la opción “Servicios de mis Tarjetas”.`,
      `Haz clic en “Mis notificaciones de tarjetas”`,
      `Ahora podrás observar las notificaciones disponibles para cada uno de tus productos.`,
      `En el menú desplegable de cada producto, selecciona la opción “Editar”.`,
      `Configura y personaliza los distintos campos que deseas visualizar para tus notificaciones.`,
      `Haz clic en “Guardar cambios”.`,
      `¡Y listo! Tus notificaciones han sido actualizadas y personalizadas a tu gusto. Cada vez que realizar alguna operación, te llegará un aviso directamente a tu email asociado.`,
    ],
    video: "",
  },
  {
    titulo: "24. Aprende a usar tus servicios de pagos con QR",
    parrafo: `Puedes realizar tus pagos escaneando el código QR en tu establecimiento favorito. Mira el video y descubre cómo.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Selecciona la opción “Aprende a usar tu Tarjeta de Débito Virtual desde tu celulares QR”.`,
      `Escanea el código QR que está en el establecimiento donde quieres pagar. `,
      `Elige la tarjeta con la que deseas pagar.`,
      `Ingresa la clave token que te llegará por SMS.`,
      `Confirma el Nombre y monto a pagar en el establecimiento.`,
      `¡Y listo! Ya puedes realizar tus pagos con QR.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3ELuDhbXY_E?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    titulo: "25. Aprende a usar tu Tarjeta de Débito Virtual desde tu celular",
    parrafo: `Conocer cómo usar tu Tarjeta de Débito Virtual y realizar compras más seguras sin salir de casa.`,
    respuestas: [
      `Inicia sesión en tu BanBif App con tu número de documento y clave.`,
      `Ingresa a la barra de menú y selecciona ”Mis productos”.`,
      `Encuentra y selecciona tu ”Tarjeta Débito Virtual”.`,
      `Visualiza las ”Cuentas afiliadas a tu Tarjeta Débito Virtual”`,
      `Selecciona ”Ver datos”.`,
      `Ingresa la clave token que te llegará por SMS.`,
      `Visualiza los datos de tu Tarjeta Débito Virtual.`,
      `¡Y listo! Al comprar por internet, solo ingresa los datos de tu Tarjeta Débito Virtual al pagar.`,
    ],
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GWhTxTN0WKQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  
];

const dataDigital = [
  {
    titulo: "1. ¿Olvidaste tu clave o bloqueaste tu acceso?",
    parrafo:
      `Al detectar el intento de ingreso de una clave errada por 3 veces consecutivas, por temas de seguridad, automáticamente se procederá con el bloqueo temporal del usuario. En caso no recuerdes tu clave digital, podrás recuperarlo a través de los siguientes pasos:
      `,
    respuestas: [
      `Inicia sesión en tu Banca por Internet <a href="http://www.banbif.com.pe"> www.banbif.com.pe</a> en la sección HOLAbank. 
      `,
      `Ingresa a la opción “¿Olvidaste tu contraseña o bloqueaste tu acceso?`,
      `Completa tus datos en la Solicitud de Nueva Clave (<i>incluyendo número de tarjeta y clave de cajero</i>).`,
      ` Confirma que se haya enviado una contraseña temporal a tu correo personal. (<i>en caso no recuerdes cual
        es tu correo electrónico que registraste en el Banco o deseas actualizarla,
        consulta con nuestra Banca Telefónica al 01 631 9000 para Lima o 0 801 0 0456
        para Provincias, o en todo caso acércate a cualquiera de nuestras Oficinas a
        nivel nacional</i>)`,
      `Ingresa nuevamente a tu Banca por Internet usando la contraseña temporal.`,
      `Una vez ingresado, automáticamente se te solicitará generar una nueva contraseña ¡y listo!
      <br/>
      <br/>
      Recuerda que, para el proceso de “Restablecer tu clave digital”, deberás tener a
      la mano tu número de tarjeta y la clave secreta de 4 dígitos de la misma. En
      caso hayas olvidado tu clave de tu tarjeta, deberás tramitar una nueva en
      nuestras Oficinas.`,
    ],
    video: "",
  },
  {
    titulo: "2. Cambia tu contraseña temporal y genera tu propia clave digital ",
    parrafo:
      `Una vez que ya cuentes con tu contraseña temporal y el sistema te pide que generas una nueva, deberás tener en cuenta lo siguiente:
      `,
    respuestas: [
      `Tu nueva clave debe contar con mínimo 8 caracteres y máximo 10. `,
      `Debe estar conformado por: al menos una letra mayúscula, una letra minúscula, un número y un caracter especial (p.e: -, _, #, $, &, @, ¡, !, ?, ¿, “, /, etc.)`,
      `¡Y listo! Ya cuentas con tu propia clave digital.
      <br />
      <br />
      Recuerda que el envío de una contraseña temporal se puede realizar solo una vez
      al día. Si solicitas otra clave temporal en el transcurso del día, el sistema no
      te permitirá seguir con el proceso. Podrás realizar otra solicitud al día
      siguiente`,
    ],
    video: "",
  },
  {
    titulo: "3. ¿Qué operaciones puedo hacer en la Banca por Internet?",
    parrafo:
      `A través de nuestra Banca por Internet, puedes realizar diferentes operaciones:
      `,
    respuestas: [
      `Transferencias entre cuentas propias, a otras cuentas BanBif, a otros bancos y al exterior.`,
      `Pagar tus tarjetas BanBif, tarjetas de otros Bancos, Tarjetas Diners, tus préstamos y diferentes servicios`,
      `Envío de dinero PLIN.`,
      `Activa y desactiva tus servicios/notificaciones de tus tarjetas.`,
      `Acceder a las diferentes ofertas de productos que tenemos para ti.`,
      `Gestionar tus operaciones frecuentes y programadas, así como revisar tu historial de operaciones.`,
      `Comprar y vender dólares.`,
      `Ahorra tus vueltos y programa tus ahorros.`,
      `Realiza retiros sin tarjetas.`,
      `Abre cuentas de ahorro y depósitos a plazo.`,
      `Revisa el tipo de cambio.`,
      `Administrar tus cuentas, tarjetas y PLIN.`,
    ],
    video: "",
  },
  {
    titulo: "4. Afíliate a la Clave SMS Token para que realices todas tus operaciones digitales",
    parrafo:
      `La Clave SMS Token es un elemento de seguridad que podrás utilizar para confirmar algunas operaciones que vas a realizar a través de HOLAbank como por ejemplo: PLIN, transferencias, pagos, etc. El SMS Token está conformado por 6 dígitos generados aleatoriamente y lo recibirás en tu celular y/o correo electrónico cada vez que realices una operación.
      <br/> Para afiliarte a la Clave SMS Token, cuentas con 2 opciones:
      `,
    respuestas: [
      `Si cuentas con una Tarjeta de Débito o Crédito BanBif, puedes
      afiliarte directamente desde la Banca Telefónica (<i>01 631 9000 para Lima o 0 801
      0 0456 para Provincias</i>).`,
      `En caso no cuentes con una Tarjeta con nosotros, deberás acercarte a la Oficina más cercana a tu disposición para confirmar tu número y solicitar la afiliación.`,
    ],
    video: "",
  },
  {
    titulo: "5. ¿Qué es PLIN y cómo afiliarse?",
    parrafo:
      `PLIN es la nueva forma de cobrar y pagar desde el app de BBVA, Interbank, Scotiabank, BanBif y otras entidades solamente usando tu número de celular o con código QR sin necesidad de contar con el número de cuenta ni código interbancario.
      <br/>Para más información, puedes ingresar a <a href="http://www.plin.pe" target="_blank" rel="noopener noreferrer">www.plin.pe</a>
      <br/> <br/> Descubre cómo afiliarte a PLIN antes de realizar tus operaciones:`,
    respuestas: [
      `Inicia sesión en tu Banca por Internet <a href="http://www.banbif.com.pe" target="_blank" rel="noopener noreferrer">www.banbif.com.pe</a> en la
      sección HOLAbank con tu número de documento y clave.`,
      `Ingresa a la barra de menú y selecciona la opción “Administrar”.`,
      `Selecciona la opción “Configurar PLIN”.`,
      `En la sección de “Banco para recibir dinero”, selecciona a BanBif como el banco principal. Además, puedes colocar también tu número de cuenta para enviar dinero. Es importante también que registres tu número de celular para que lo puedas vincular con PLIN.`,
    ],
    video: "",
  },
  {
    titulo: "6. ¿Cómo envío dinero por PLIN?",
    parrafo:"",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú y selecciona la opción “Transferir”.`,
      `Selecciona la opción “Plin”.`,
      `Coloca el número telefónico destinatario al que enviarás dinero.
      `,
      `Ingresa el importe (máximo hasta S/500 por operación y máximo S/1500 al día). `,
      `Confirma tu operación.`,
      `Ingresa tu Clave SMS Token y selecciona el botón “Validar código”.`,
      `¡Plin y listo!`,
    ],
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/rCOHxVZoBbg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    titulo: "7. Paga tu Tarjeta de Crédito BanBif",
    parrafo:"¡Pagos rápidos y desde casa! Conoce cómo pagar tu Tarjeta de Crédito BanBif desde tu app.",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Elige la opción ”Pagar”`,
      `Selecciona la opción ”Tarjeta de Crédito BanBif”.`,
      `Elige la Tarjeta a pagar.`,
      `Selecciona la moneda, el importe y la cuenta.
      `,
      `¡Y listo! Pagaste tu Tarjeta de Crédito BanBif al instante. `,
    ],
    video:
      "",
  },
  {
    titulo: "8. Paga otras Tarjetas de Crédito BanBif ",
    parrafo:"¡Pagos rápidos y desde casa! Conoce cómo pagar tu Tarjeta de Crédito BanBif desde tu app.",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Elige la opción ”Pagar”`,
      `Selecciona la opción “Mis Tarjetas BanBif”.`,
      `Digita la tarjeta a pagar.`,
      `Selecciona el monto a pagar y la cuenta origen a debitar.
      `,
      `¡Y listo! Pagaste tu Tarjeta de Crédito BanBif al instante. `,
    ],
    video:
      "",
  },
  {
    titulo: "9. Paga todas tus Tarjetas de Crédito de cualquier banco",
    parrafo:"Descubre cómo realizar los pagos de tu Tarjeta de Crédito de cualquier banco a través de nuestra Banca por Internet:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Elige la opción ”Pagar”`,
      `Escoge la opción “Tarjetas de Otros Bancos”.`,
      `Elige el banco, tarjeta, monto a pagar y cuenta a cargar.`,
      `Confirma tu pago.`,
      `¡Y listo!`,
    ],
    video:
      "",
  },
  {
    titulo: "10. Aprende a realizar tus Pagos de Servicios",
    parrafo:"Aprende a realizar tus pagos de servicios a través de la Banca por Internet. Sigue estos pasos:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      'Elige la opción “Pagar”',
      'Selecciona la opción “Servicios”.',
      "Busca el servicio que desees pagar",
      "Finalmente, ingresa tu código de pago (nro. de telefóno, documento, suministro, etc.)",
      'Se te mostrará la deuda pendiente. En todo caso, indica el monto a cancelar.',
      "Selecciona el medio de pago",
      'Continúa y confirma tu operación con la Clave SMS Token.',
      '¡Y listo! Ya realizaste tu operación'
    ],
    video:
      '',
  },
  {
    titulo: "11. Realiza tus transferencias",
    parrafo:"En BanBif puedes realizar tus transferencias las 24 horas del día, por ello te mostramos los pasos para hacerlo:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Selecciona la opción “Transferir”.`,
      `Puedes elegir entre transferir entre tus cuentas BanBif, a otras cuentas BanBif y otros bancos.`,
      `Completa la información solicitada (monto a transferir y cuenta de destino).`,
      `Ingresa la clave token que te llegará por SMS o Email.`,
      `¡Y listo! Ya terminaste tu transferencia, recuerda que puedes realizarla a cualquier hora del día.`,
    ],
    video:
      "",
  },
  {
    titulo: "12. Realiza tus pagos de préstamos",
    parrafo:"¡Contamos con las herramientas para que pagues lo que necesites sin salir de tu casa!",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Elige la opción ”Pagar”.`,
      `Elige la opción ”Préstamos”`,
      `Selecciona el préstamo a pagar y la cuenta donde se cargará el importe a pagar.`,
      `Confirma los datos y ¡listo! con eso ya completaste tu operación.`,
    ],
    video:
      "",
  },
  {
    titulo: "13. Activa y desactiva tus servicios adicionales de Tarjetas",
    parrafo:"¿Quieres activar o desactivar tus servicios adicionales de Tarjeta de Crédito o Débito? Aquí te enseñamos los pasos para hacerlo:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú y selecciona la opción: “Servicios de mis tarjetas”.`,
      `Luego haz clic en “Activar o desactivar servicios y notificaciones de Tarjetas” y luego en “Mis servicios de Tarjetas”.`,
      `Una vez allí, podrás visualizar las diferentes tarjetas con las que cuentas, y podrás hacer clic en el ícono de editar para configurarlas.`,
      `Para Tarjetas de Débito encontrarás las siguientes opciones: “Compras en exterior”, “Compras por internet” y “Disposición de efectivo en el exterior”.`,
      `Para Tarjetas de Crédito encontrarás las siguientes opciones: “Compras en el exterior”, “Compras por Internet”, “Disposición de efectivo” y “Sobregiro”.
      <br/><br/>
      Recuerda, tus tarjetas BanBif vienen con todas las opciones desactivadas, por lo que será necesario que las configures si deseas realizar compras por internet o transferencias a través de aplicaciones como PLIN o suscribirte a plataformas como Netflix, Disney, Spotify entre muchas más.`,
    ],
    video:
      "",
  },
  {
    titulo: "14. Configura tus notificaciones de consumo en Tarjetas",
    parrafo:"Para poder configurar y personalizar las notificaciones de consumo en tus tarjetas BanBif. Solo debes seguir los siguientes pasos:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú y selecciona la opción “Administrar”.`,
      `Haz clic en “Notificaciones”`,
      `Ahora podrás observar las notificaciones disponibles para cada uno de tus productos.
      `,
      `En el menú desplegable de cada producto, selecciona la opción “Editar”`,
      `Configura y personaliza los distintos campos que deseas visualizar para tus notificaciones.`,
      `Haz clic en “Confirmar”.`,
      `¡Y listo! Tus notificaciones han sido actualizadas y personalizadas a tu gusto. Cada vez que realizar alguna operación, te llegará un aviso directamente a tu email asociado.`,
    ],
    video:
      "",
  },
  {
    titulo: "15. Conoce cómo visualizar tus Estados de Cuenta",
    parrafo:"Aprende a revisar los estados de cuenta de tus Tarjetas de Crédito con los siguientes pasos:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Selecciona el producto que desees visualizar.`,
      `Haz clic en el botón de descarga que se encuentra en la parte derecha superior de tu cuenta.`,
      `Exporta tus estados de cuenta en versión PDF, Excel o CSV.`,
      `¡Y listo! Ya tienes a la mano tus Estados de Cuenta.`,
    ],
    video:
      "",
  },
  {
    titulo: "16. Haz tus retiros del cajero sin Tarjeta",
    parrafo:"Con HOLAbank puedes programar tus retiros desde tu casa. Aprende cómo a través de estos pasos: pasos:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú y selecciona la opción “Retiros Sin Tarjeta”.`,
      `Elige la opción “Para mí” o “Para otra persona”. En caso sea para otra persona, se deberá ingresar el número de documento del beneficiario.`,
      `Selecciona la cuenta a cargo de la que quieres retirar.`,
      `Coloca la moneda y el monto a retirar.`,
      `Ingresa la clave SMS/Email token que te llegará.`,
      `Selecciona la opción “Obtener Clave Temporal”.`,
      `Anota tu Clave Temporal o compártela vía SMS o correo electrónico.`,
      `Ya en el cajero BanBif, selecciona la opción “Retirar sin Tarjeta”.`,
      `Ingresa tu número de celular y la Clave Temporal.`,
      `¡Y listo! Ya puedes retirar tu dinero sin tarjeta
      <br/><br/>
      De tratarse el retiro para otras personas: Solo elige la opción “Para otra persona” e ingresa su número de celular, luego sigue los mismos pasos descritos anteriormente.
      `,
    ],
    video:
      "",
  },
  {
    titulo: "17. Conoce nuestro Ahorro Vuelto",
    parrafo:"Disfruta de este servicio que te permitirá redondear tus compras generando un ahorro automático con este redondeo:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú e ingresa a “Opciones de ahorro”. `,
      `Selecciona la opción “Ahorro Vuelto”.`,
      `Completa todos los campos requeridos con tu información.`,
      `¡Y listo! Ya puedes ahorrar de forma muy sencilla mientras compras; además, el dinero que vas guardando en tu otra cuenta de ahorros va generando intereses`,
    ],
    video:
      "",
  },
  {
    titulo: "18. Abre una cuenta Depósito a Plazo con nosotros",
    parrafo:"Disfruta de este servicio que te permitirá redondear tus compras generando un ahorro automático con este redondeo:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú y selecciona la opción ”Cuentas Click”.`,
      `Selecciona la opción ”Abrir Depósito a Plazo”.`,
      `Despliega el tipo de producto que vas a crear.`,
      `Selecciona la moneda de tu Depósito a Plazo.`,
      `Ingresa el monto con el que deseas abrir tu Depósito a Plazo y elige el plazo.`,
      `Elige la cuenta de donde se cargará el importe para tu Depósito a Plazo.`,
      `Confirma los datos.`,
      `Valida el correo a donde te llegarán los datos de tu Depósito a Plazo.`,
      `Revisa la simulación.`,
      `Acepta las condiciones del contrato.`,
      `Confirma la apertura de tu Depósito a Plazo ¡y listo!.`,
    ],
    video:
      "",
  },
  {
    titulo: "19. Abre una Cuenta de Ahorro Digital sin necesidad de ir al banco",
    parrafo:"Abrir una cuenta de ahorro es tan sencillo que puedes hacerlo desde tu Banca por Internet:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú y selecciona la opción “Cuentas y Depósitos Click”.`,
      `Selecciona la opción ”Cuentas y Depósitos Click”.`,
      `Selecciona la opción ”Abre cuentas de ahorro”.`,
      `Completa el requisito requerido de poseer únicamente la nacionalidad peruana.`,
      `Elige la cuenta que deseas abrir en la opción “Tipo de producto”. Por ejemplo: ”Cuenta Conveniente”.`,
      `Elige la cuenta de donde sacar tus fondos.`,
      `Digita el monto de apertura.`,
      `Selecciona “Continuar”.`,
      `Valida tu correo donde llegará tu confirmación.`,
      `Verifica los datos para tu nueva cuenta.`,
      `Acepta las condiciones del contacto.`,
      `Selecciona “Confirmar”.`,
      `¡Y listo! Ya cuentas con tu nueva Cuenta de ahorros.`,
    ],
    video:
      "",
  },
  {
    titulo: "20. Programa tus operaciones",
    parrafo:"Te mostramos cómo hacerlo desde la Banca por Internet:",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú y ve a la opción “Operaciones Frecuentes y Programadas”.`,
      `Selecciona la opción “Operaciones Programadas”.`,
      `Da clic en programar nueva transacción.`,
      `Elige la opción que desees. Puedes programar: Transferencias, Pagos de tarjetas, Pago de préstamos o Pago de servicios.`,
      `Configura la frecuencia de ejecución del pago.`,
      `Continúa el proceso.`,
      `¡Y listo! Ya tienes tus operaciones programadas y se ejecutarán en las fechas que seleccionaste.`,
    ],
    video:
      "",
  },
  {
    titulo: "21. Revisa tu historial de transacciones",
    parrafo:"",
    respuestas: [
      `Inicia sesión en la Banca por Internet <a href="https://www.banbif.com.pe">www.banbif.com.pe</a> en la sección HOLAbank con tu número de documento y clave`,
      `Ingresa a la barra de menú y selecciona la opción “Operaciones Frecuentes y Programadas”.`,
      `Selecciona la opción ”Historial”.`,
      `Puede configurar los filtros para clasificar las operaciones que deseas ver, por ejemplo, rangos de fechas, estado de la transacción, operaciones frecuentes, etc.`,
      `¡Y listo! Ya puedes revisar todo el historial de transacciones que realizaste.
      Si lo deseas, puedes descargar tu historial en formato pdf usando la opción “Descarga” que se encuentra en la parte superior derecha.`,
    ],
    video:
      "",
  },


  
];
