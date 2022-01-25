/* interacción en los botones para mostrar la información correspondiente a Banca Digital y BanBif App */

const botonDigital = document.getElementById('bancaDigital')
const botonApp = document.getElementById('banbifApp')

const contenedor = document.getElementsByClassName('tutorialesContenedor')[0] //sección para tutoriales

let tituloTuto = document.getElementById('tituloTutorial')
tituloTuto.innerText = 'Banca Digital'

let descriptiontuto = document.getElementById('descriptionTutorial')
descriptiontuto.innerHTML= `La banca digital en BanBif está compuesta por dos canales: BanBif App y Banca por Internet.
        <br/>El banco en tus manos a toda hora, todos los días del año y en cualquier  lugar.`

const seleccionandoOpcion = () => {
    let selector = document.getElementById('opcion')
    let seleccionado = selector.value

    if (seleccionado == '0') {
        tituloTuto.innerText = ''
        tituloTuto.innerText = 'Banca Digital'        
        contenedor.innerHTML = ''
        insertaPreguntas(dataDigital)
    } else {
        tituloTuto.innerText = ''
        tituloTuto.innerText = 'BanBif App'
        contenedor.innerHTML = ''
        insertaPreguntas(dataApp)
    }
}

const insertaPreguntas = (data) => {
    data.forEach((e, i) => {
        /* encabezado del panel */

        let content = document.createElement('div')
        content.classList.add('panel', 'panel-default')
        contenedor.appendChild(content)

        let postDiv = document.createElement('div')
        postDiv.classList.add('panel-heading', 'tutoriales__encabezado')
        postDiv.setAttribute('role', 'tab')
        postDiv.setAttribute('id', `item${i}`)
        content.appendChild(postDiv)

        let panel = document.createElement('h4')
        panel.classList.add('panel-title')
        postDiv.appendChild(panel)

        let boton = document.createElement('a')
        boton.classList.add('collapsed', 'tutoriales__nombre')
        boton.setAttribute('role', 'button')
        boton.setAttribute('data-toggle', 'collapse')
        boton.setAttribute('data-parent', '#accordion')
        boton.setAttribute('href', `#collapse${i}`)
        boton.setAttribute('aria-controls', `collapse${i}`)
        let texto = document.createElement('p')
        texto.classList.add('tutoriales__nombre__pregunta')
        texto.innerHTML = `${e.titulo}`
        boton.appendChild(texto)
        let flecha = document.createElement('div')
        flecha.classList.add('flechaDespliegue')
        boton.appendChild(flecha)
        panel.appendChild(boton)

        /* cuerpo del panel */

        let postCollapse = document.createElement('div')
        postCollapse.setAttribute('id', `collapse${i}`)
        postCollapse.classList.add('panel-collapse', 'collapse')
        postCollapse.setAttribute('role', 'tabpanel')
        postCollapse.setAttribute('aria-labelledby', `item${i}`)
        content.appendChild(postCollapse)

        let postBody = document.createElement('div')
        postBody.classList.add('panel-body', 'tutoriales__cuerpo')
        postCollapse.appendChild(postBody)

        let parrafo = document.createElement('p')
        parrafo.classList.add('tutoriales__parrafo')
        parrafo.innerHTML = `${e.parrafo}`
        postBody.appendChild(parrafo)

        if (e.respuestas.length > 0) {
            let pasos = document.createElement('ol')
            pasos.classList.add('tutoriales__pasos')
            e.respuestas.forEach((p) => {
                let paso = document.createElement('li')
                paso.innerHTML = `${p}`
                pasos.appendChild(paso)
                postBody.appendChild(pasos)
            })
        }
        let video = document.createElement('div')
        video.innerHTML = `${e.video}`
        postBody.appendChild(video)
    })
}
insertaPreguntas(dataDigital)

const activaDigital = () => {
    botonDigital.classList.add('botonActivo')
    botonApp.classList.remove('botonActivo')
    tituloTuto.innerText = ''
    tituloTuto.innerText = 'Banca Digital'
    descriptiontuto.innerHTML= `La banca digital en BanBif está compuesta por dos canales: BanBif App y Banca por Internet.
        <br/>El banco en tus manos a toda hora, todos los días del año y en cualquier  lugar.
        `
    contenedor.innerHTML = ''
    insertaPreguntas(dataDigital)
}

botonDigital.addEventListener('click', activaDigital)

const activaApp = () => {
    botonApp.classList.add('botonActivo')
    botonDigital.classList.remove('botonActivo')
    tituloTuto.innerText = ''
    tituloTuto.innerText = 'BanBif App'
    contenedor.innerHTML = ''
    descriptiontuto.innerHTML= `
        <p>Realiza tus operaciones de forma segura desde donde estés. Ingresa con tu DNI y tu clave. <br/>
        ¿Aún no la tienes? Descárgala en tres simples pasos desde tu tienda de aplicaciones favoritas: </p>
        <ul class="tutoriales__pasos">
        <li>Instálala desde Google Play, Apple Store o App Gallery</li>
        <li>Regístrate con tu DNI, una tarjeta de crédito o débito, la clave de cajero de la tarjeta que estés utilizando para registrarte, establece una contraseña segura y</li>
        <li>¡Listo! Empieza a utilizarla</li>
        </ul>
        Usar y operar en la BanBif App es totalmente gratuito. Pero ten en cuenta que algunas operaciones como transferencias interbancarias o pagos de tarjetas de otros bancos pueden tener algún costo adicional como el cobro de ITF o alguna comisión. 
        `
    insertaPreguntas(dataApp)
}
botonApp.addEventListener('click', activaApp)
