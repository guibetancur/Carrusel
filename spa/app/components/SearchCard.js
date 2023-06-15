import { generaId } from '../helpers/generador.js' // Generador automático con function*
const nro = generaId() // Inicializo generador de id para cada post y lo uso en la línea 10=> nro.next().value

export function SearchCard(props) {
  let {id, title, _embedded} = props 
  let dateFormat = new Date(_embedded.self[0].date).toLocaleString()
  let slug = _embedded.self[0].slug
  return `
  <article class='post-card'>
    <h2>${nro.next().value}- ${title}</h2>
    <h4>${dateFormat}</h4>
    <p>
      <a href='#/${slug}' data-id='${id}'>Ver Publicación</a>
    </p>
    </article>
  `
}
