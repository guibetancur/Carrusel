export function* generaId() {
	let nid = 0
	while(true) {
		nid++
		yield nid  // Devuelve el valor y queda en espera
	}
}
