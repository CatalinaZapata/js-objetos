import {clientes}  from "./clientes.js";
import {cuentaCorriente} from "./cuentaCorriente.js"

const cliente = new clientes();
    cliente.nombreCliente = "Leonardo";
    cliente.dniCliente = "13804050";
    cliente.rutCliente = "123224";

const cuentaDeLeonardo = new cuentaCorriente();
    cuentaDeLeonardo.numero = "1";
    cuentaDeLeonardo.agencia = "001";
    cuentaDeLeonardo.cliente = cliente;//Esta linea enlaza la clase cuentaCorriente con clientes

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log("El saldo actual es (cuentaDeLeonardo) " + saldo);

const cliente2 = new clientes();
    cliente2.nombreCliente = "Maria";
    cliente2.dniCliente = "987654";
    cliente2.rutCliente = "4567";

const cuentaDeMaria = new cuentaCorriente();
    cuentaDeMaria.numero = "2";
    cuentaDeMaria.agencia = "002";
    cuentaDeMaria.cliente = cliente2;

let parametroValor = 100;
console.log("parametro valor", parametroValor);

cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);
console.log("parametro valor", parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log("Cuenta de maria", cuentaDeMaria);
console.log("El saldo actual es (cuentaDeMaria) " + saldoMaria);
const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual es (cuentaDeLeonardo) " + saldoLeonardo);