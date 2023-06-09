export function ajax(props) {
  // let {url, method, headers, cbSuccess, cbError } 
  let {url, cbSuccess } = props

  fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
      let message = err.statusText || `Ocurrió un error inesperado con la url: ${url}`

      document.getElementById('root').innerHTML = `
        <div class='error'>
        <p>Error ${err.status}: ${message}</p>
        </div>
      `
    })
}