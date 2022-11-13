class cliente
{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}

const cliente1 = new cliente();
    cliente1.nombreCliente = "José";
    cliente1.dniCliente = "13232";
    cliente1.numeroCuenta = "232323";
    cliente1.saldoCuenta = 5000;

const cliente2 = new cliente();
    cliente2.nombreCliente = "Leonardo";
    cliente2.dniCliente = "13804050";
    cliente2.numeroCuenta = "123434343";
    cliente2.saldoCuenta = 1000;

console.log(cliente1);
console.log(cliente2);
