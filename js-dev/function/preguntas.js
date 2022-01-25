const preguntas = [
    {
        titulo: '¿Quieres saber más sobre la cuenta de ahorro digital?',
        respuestas: [
            'Es una cuenta de ahorros que puedes abrir y activar sin necesidad de ir a una oficina, 100% online.',
            'No cobra mantenimiento independientemente del saldo que mantengas.',
            'Te brinda una tarjeta de debito virtual, para realizar todas las compras que necesites.',
            'Puedes recoger una Tarjeta de débito física en cualquier oficina banbif.',
        ],
    },
    {
        titulo: '¡Beneficios increíbles!',
        respuestas: [
            'Es 100% digital, no necesitas acercarte a una oficina para abrirla.',
            'No cobra mantenimiento de cuenta.',
            'Sin monto mínimo de apertura.',
            'Te brinda una tarjeta de débito virtual, para realizar todas las compras que necesites.',
            'Puedes recoger una Tarjeta de débito física en cualquier oficina banbif.',
        ],
    },
    {
        titulo: 'Descubre las mejores promociones',
        respuestas: [
            '3 meses gratis de seguro de protección digital Mapfre ',
            'Te devuelve 2 meses del costo de tu suscripción de streaming (Spotify, Netflix o Disney+ entre otros.)',
            'Te devuelve 20% en tu primera compra por internet en supermercados y farmacias',
            'Accede a muchos descuentos más con ClubHola.',
        ],
    },
    {
        titulo: 'Requisitos',
        respuestas: ['DNI', 'Correo electrónico', 'Celular'],
    },
]

const contenedor = document.getElementById('preguntas')

const insertaPreguntas = (data) => {
    data.forEach((e, i) => {
        /* encabezado del panel */

        let content = document.createElement('div')
        content.classList.add('panel', 'panel-default')
        contenedor.appendChild(content)

        let postDiv = document.createElement('div')
        postDiv.classList.add('panel-heading', 'faq__encabezado')
        postDiv.setAttribute('role', 'tab')
        postDiv.setAttribute('id', `item${i}`)
        content.appendChild(postDiv)

        let panel = document.createElement('h4')
        panel.classList.add('panel-title')
        postDiv.appendChild(panel)

        let boton = document.createElement('a')
        boton.classList.add('collapsed', 'faq__nombre')
        boton.setAttribute('role', 'button')
        boton.setAttribute('data-toggle', 'collapse')
        boton.setAttribute('data-parent', '#accordion')
        boton.setAttribute('href', `#collapse${i}`)
        boton.setAttribute('aria-controls', `collapse${i}`)
        let texto = document.createElement('p')
        texto.classList.add('faq__nombre__pregunta')
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
        postBody.classList.add('panel-body', 'faq__cuerpo')
        postCollapse.appendChild(postBody)

        if (e.respuestas.length > 0) {
            let pasos = document.createElement('ul')
            pasos.classList.add('faq__pasos')
            e.respuestas.forEach((p) => {
                let paso = document.createElement('li')
                paso.innerHTML = `${p}`
                pasos.appendChild(paso)
                postBody.appendChild(pasos)
            })
        }
    })
}
insertaPreguntas(preguntas)
