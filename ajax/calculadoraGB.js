const $botones = document.querySelectorAll('button'),
  // $display = document.getElementById('display'),
  $display = document.querySelector('.display'),
  $parcial = document.getElementById('parcial')
$botones.forEach((el) => {
  // if (isNaN(el.textContent) && el.textContent!=='.') el.setAttribute('class', 'operador')
  // else el.setAttribute('class', 'nro')
  // console.log(el.innerHTML)
  el.addEventListener('click', captura.bind(el))
})
const $operadores = document.getElementsByClassName('operador')

let cadena = '', total = '', operador = '', finNros = false, digito

function captura(nro) {
  if (typeof nro=== 'object') digito = nro.target.textContent
  else digito = nro
  switch (digito) {
    case 'C':
      cadena = '', operador = '', total = '', finNros = ''
      uncheck()
      break;
    case '=':
      total = eval(total + operador + cadena).toString()
      cadena = total, operador = ''
      uncheck()
      break
    default:
      if (isNaN(digito) && digito!=='.') {
        uncheck()
        if (typeof nro=== 'object') nro.target.setAttribute('class', 'checked')
        if (operador !== '')
          total = eval(total + operador + cadena).toString(), cadena = total
        else total = cadena, cadena = ''
        operador = digito
        finNros = true
      } else {
        if (finNros) cadena = digito, finNros = false
        else cadena += digito
      }
      break;
  }
  // $display.value = cadena, $parcial.innerHTML = total + operador
  $display.innerHTML = cadena, $parcial.innerHTML = total + operador
}

function uncheck() {
  let $checked = document.querySelector('.checked')
  if ($checked) $checked.setAttribute('class', 'operador')
}

window.addEventListener('keydown', e => {
  switch (e.key) {
    case '1': captura('1')
      break;
    case '2': captura('2')
      break;
    case '3': captura('3')
      break;
    case '4': captura('4')
      break;
    case '5': captura('5')
      break;
    case '6': captura('6')
      break;
    case '7': captura('7')
      break;
    case '8': captura('8')
      break;
    case '9': captura('9')
      break;
    case '0': captura('0')
      break;
    case '/': captura('/')
      break;
    case '*': captura('*')
      break;
    case '-': captura('-')
      break;
    case '+': captura('+')
      break;
    case '.': captura('.')
      break;
    case 'Escape': captura('C')
      break;
    case 'Enter': captura('=')
      break;
    default:
      break;
  }
})
