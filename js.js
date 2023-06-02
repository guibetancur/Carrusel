// Capturo elementos del DOM con interacción
let $imagen = document.getElementById('imagen'),
  $botonizq = document.getElementById('izq'),
  $botonder = document.getElementById('der')

// Registro las imágenes en un array para recorrerlos
let images = [
  "./imgs/@.JPG",
  "./imgs/BURBUJA.JPG",
  "./imgs/Cancha.jpg",
  "./imgs/Cosmo.JPG",
  "./imgs/CUBOS NARANJADOS.JPG",
  "./imgs/DADOS.JPG",
  "./imgs/Depredador.jpeg",
  "./imgs/Esferas.JPG",
  "./imgs/FIGURA.JPG",
  "./imgs/FLOR 1.JPG",
  "./imgs/GIRASOL 1.JPG",
  "./imgs/HONGUITOS.JPG",
  "./imgs/JIRAFAS.JPG",
  "./imgs/MundoCristal.JPG",
  "./imgs/NARANJA.JPG",
  "./imgs/PAISAJE.JPG",
  "./imgs/ScrableSfere.JPG",
  "./imgs/TECNOLOGÍA.JPG"
]
// Inicializo las variables de inicio y fin del carrusel
let currentImageIndex = 0,
  cantImagenes = images.length - 1

// Creo línea de recorrido o scrolling
let $posicion = document.getElementById('position')
let $otroRadio
let $activo = document.getElementsByName('radio')

// Agrego botones de radio para cada imagen
for (let i = 0; i <= cantImagenes; i++) {
  $otroRadio=document.createElement('input')
  $otroRadio.type='radio'
  $otroRadio.name='radio'
  $otroRadio.id=`${i}`
  $posicion.appendChild($otroRadio)

  $activo[i].addEventListener('click', e=> {
    currentImageIndex=parseInt(e.target.id)
    mostrarImagen()
  })
}
// activo el primer botón de radio
$activo[0].checked = true

// Defino las acciones de movimiento lateral
function izquierda() {
  currentImageIndex--
  if (currentImageIndex < 0) currentImageIndex = cantImagenes
  mostrarImagen()
}

function derecha() {
  currentImageIndex++
  if (currentImageIndex > cantImagenes) currentImageIndex = 0
  mostrarImagen()
}

function mostrarImagen() {
  $imagen.src = images[currentImageIndex]
  $activo[currentImageIndex].checked = true
}
// Llamo las funciones al hacer click en los botones
$botonizq.addEventListener('click', e => izquierda())
$botonder.addEventListener('click', e => derecha())

// Adiciono un evento para las teclas izquierda y derecha igual a los botones
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') izquierda()
  if (e.key === 'ArrowRight') derecha()
})

// Activo el salto automático cada 5 segundos
// Recordar que setInterval hace la llamada, no necesita el ()
let carrusel = setInterval(derecha, 5000)
