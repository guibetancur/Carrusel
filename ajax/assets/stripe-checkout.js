
import STRIPE_KEYS from './stripe-keys.js'
/* ********** Curso JavaScript: 129. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (1/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 130. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (2/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 131. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (3/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 132. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (4/4) - #jonmircha ********** */
const d = document,
  $tacos = d.getElementById('tacos'),
  $template = d.getElementById('taco-template').content,
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
  }
let prices, products

Promise.all([
  fetch('https://api.stripe.com/v1/products', fetchOptions),
  fetch('https://api.stripe.com/v1/prices', fetchOptions)
]).then(responses => Promise.all(responses.map((res) => res.json())))
  .then(json => {
    products = json[0].data
    prices = json[1].data
console.log(products,prices)
    // let moneyFormat = num => `$${num.slice(0, -2)}.${num.slice(-2)}`
    let moneyFormat = num => `$${(num/100).toLocaleString('es-MX')}`

    prices.forEach(el => {
      let productData = products.filter((product) => product.id === el.product)
      // console.log(productData)
      $template.querySelector('.taco').setAttribute('data-price', el.id)
      $template.querySelector('img').src = productData[0].images[0]
      $template.querySelector('img').alt = productData[0].name
      $template.querySelector('figcaption').innerHTML = `
        ${productData[0].name}
        <br>
        <!--${moneyFormat(el.unit_amount_decimal)} ${el.currency}-->
        ${moneyFormat(el.unit_amount)} ${el.currency}
      `

      let $clone = d.importNode($template, true)
      $fragment.appendChild($clone)
    });
    $tacos.appendChild($fragment)
  })
  .catch((err) => {
    let message = err.statusText || 'Ocurrió un error inesperado al conectarse a la API de Stripe'
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`
  })


// fetch('https://api.stripe.com/v1/products',{
//   headers: {
//     // propio de stripe...
//     Autorization: `Bearer ${STRIPE_KEYS}`,
//   },
// }).then((res) => {
//   console.log(res)
//   return res.json()
// })
// .then((json) => {
//   console.log(json)
// })

d.addEventListener('click', e => {
  if (e.target.matches('.taco *')) {
    let price = e.target.parentElement.getAttribute('data-price')
    // lineitems acepta arreglo con varios items, el modo es suscripción para pagos periódicos
    Stripe(STRIPE_KEYS.public)
    .redirectToCheckout({
      lineItems: [{price: price, quantity: 1}],
      mode: 'subscription',
      successUrl: 'http://127.0.0.1:5500/ajax/assets/stripe-success.html',
      cancelUrl: 'http://127.0.0.1:5500/ajax/assets/stripe-cancel.html'
    })
    .then(res => {
      if (res.error) {
        $tacos.insertAdjacentHTML('afterend',res.error.message)
      }
    })
  }
})