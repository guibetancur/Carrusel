import api from './helpers/wp_api.js'
import {ajax} from './helpers/ajax.js'
import {Title} from './components/Title.js'

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
  const d = document, 
    $root = d.getElementById('root')

    $root.appendChild(Title())
}

