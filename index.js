import {clientes}  from "./clientes.js";
import {cuentaCorriente} from "./cuentaCorriente.js"

const cliente = new clientes("Leonardo", "13804050", "123224");
const cliente2 = new clientes("Maria", "987654", "4567");
const cuentaDeLeonardo = new cuentaCorriente(cliente, "1", "001");//cuentaDeLeonardo.cliente = cliente;//Esta linea enlaza la clase cuentaCorriente con clientes
const cuentaDeMaria = new cuentaCorriente(cliente2, "2", "002");
    console.log(cuentaDeLeonardo.cliente);
    console.log(cuentaDeMaria.cliente);

let saldo = cuentaDeLeonardo.verSaldo();
saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(cuentaCorriente.cantidadCuenta);


/*let parametroValor = 100;
console.log("parametro valor", parametroValor);

cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);
console.log("parametro valor", parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log("Cuenta de maria", cuentaDeMaria);
console.log("El saldo actual es (cuentaDeMaria) " + saldoMaria);
const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual es (cuentaDeLeonardo) " + saldoLeonardo);*/