/* interacción en los botones para mostrar la información correspondiente a Banca Digital y BanBif App */

const botonDigital = document.getElementById('bancaDigital')
const botonApp = document.getElementById('banbifApp')

const contenedor = document.getElementsByClassName('tutorialesContenedor')[0] //sección para tutoriales

let tituloTuto = document.getElementById('tituloTutorial')
tituloTuto.innerText = 'Banca Digital'

let descriptiontuto = document.getElementById('descriptionTutorial')
descriptiontuto.innerHTML= `La Banca por Internet de BanBif es uno de los canales principales de nuestro mundo digital HOLAbank que lo pueden encontrar a través de nuestra página web www.banbif.com.pe para que puedas usar y operar dentro nuestra Banca por Internet de manera gratuita. En caso aún no estés afiliado a este canal digital, aquí te enseñamos cómo hacerlo:
<br/>
<ul class="tutoriales__pasos">
    <li>Ingresa a www.banbif.com.pe y selecciona el botón de “HOLAbank”.</li>
    <li>Luego, ingresa a “¿No tienes un usuario de Banca por Internet? Registrate aquí”</li>
    <li>Completa los datos que te piden y listo. Puedes usar el mismo usuario y clave para ingresar a nuestra BanBif App.
    </li>
</ul>
<br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4F09unSJclk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`

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
    descriptiontuto.innerHTML= `La Banca por Internet de BanBif es uno de los canales principales de nuestro mundo digital HOLAbank que lo pueden encontrar a través de nuestra página web www.banbif.com.pe para que puedas usar y operar dentro nuestra Banca por Internet de manera gratuita. En caso aún no estés afiliado a este canal digital, aquí te enseñamos cómo hacerlo:
        <br/>
        <ul class="tutoriales__pasos">
            <li>Ingresa a www.banbif.com.pe y selecciona el botón de “HOLAbank”.</li>
            <li>Luego, ingresa a “¿No tienes un usuario de Banca por Internet? Registrate aquí”</li>
            <li>Completa los datos que te piden y listo. Puedes usar el mismo usuario y clave para ingresar a nuestra BanBif App.
            </li>
        </ul>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4F09unSJclk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    Realiza tus operaciones de forma segura desde donde estés. Ingresa con tu DNI y
    tu clave. ¿Aún no la tienes? Descárgala en tres simples pasos desde tu tienda de
    aplicaciones favoritas:
    <ul class="tutoriales__pasos">
      <li>Instala nuestra App desde Google Play, Apple Store o App Gallery</li>
      <li>
        Regístrate con tu DNI, una tarjeta de crédito o débito, la clave de cajero
        de la tarjeta que estés utilizando para registrarte, establece una
        contraseña segura ¡y listo! Puedes usar y operar nuestra BanBif App de
        manera gratuita.
      </li>
    </ul> 
        `
    insertaPreguntas(dataApp)
}
botonApp.addEventListener('click', activaApp)
