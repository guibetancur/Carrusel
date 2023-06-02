//import autosImportados from './autos';
const autosArr = [
  {
    marca: "Ford Fiesta",
    modelo: 2019,
    precio: 150000,
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false
  },
  {
    marca: "Toyota Corolla",
    modelo: 2019,
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false
  }
];

let persona = {
  nombre: 'Juan',
  capacidadDePagoEnCuotas: 30000,
  capacidadDePagoTotal: 10000
}

const concesionaria = {
  /* completar */
  autos: autosArr,

  buscarAuto: function (patente) {
    let temp = this.autos.find((auto) =>
      auto.patente === patente)
    if (temp) {
      return temp;
    } else {
      return null;
    }
  },
  venderAuto: function (patente) {
    let temp = this.buscarAuto(patente);
    if (temp) {
      temp.vendido = true;
    }
  },
  autosParaLaVenta: function () {
    return this.autos.filter((auto) => auto.vendido == false);
  },
  autosNuevos: function () {
    let temp = this.autosParaLaVenta();
    return temp.filter((auto) => auto.km < 100);
  },
  listaDeVentas: function () {
    let arrVentas = this.autos.filter((auto) => auto.vendido === true);
    return arrVentas.map(auto => auto.precio);
  },
  totalDeVentas: function () {
    let ventas = this.listaDeVentas();
    return ventas.reduce((acum, precio) => acum + precio, 0);
  },
  puedeComprar: function (auto, persona) {
    let costoAuto = auto.precio;
    let costoCuota = costoAuto / 5;

    return (
      costoAuto <= persona.capacidadDePagoTotal && costoCuota <= persona.capacidadDePagoEnCuotas
    );
  },
  autosQuePuedeComprar: function () {
    let listaAutos = this.autosParaLaVenta();

    let autoParaCliente = listaAutos.filter(auto => this.puedeComprar(auto, persona));

    return autoParaCliente;
  }
};

console.log(concesionaria.puedeComprar('JJK116', persona))

// "APL123"  "JJK116"