// import api from './helpers/wp_api.js'
// import {ajax} from './helpers/ajax.js'
import {Header} from './components/Header.js'
import { Main } from './components/Main.js'
import {Loader} from './components/Loader.js'
// import { PostCard } from './components/PostCard.js'
import { Router } from './components/Router.js'
import { infinite_scroll } from './helpers/infinite_scroll.js'

// export default function App() {
//   document.getElementById('root').innerHTML = '<h1>Welcome to Vanilla JS</h1>'

//     ajax({
//       url: api.POSTS,
//       cbSuccess: (posts) => console.log(posts)
//     })

//     ajax({
//       url: api.CATEGORIES,
//       cbSuccess: (categories) => console.log(categories)
//     })
// }

export function App() {
    const $root = document.getElementById('root')

    $root.innerHTML = null // Para que no repita las cabeceras
    $root.appendChild(Header())
    $root.appendChild(Main())
    $root.appendChild(Loader())

    Router()
    infinite_scroll()
}

