//Definición de clases
class cliente
{
    nombreCliente;
    dniCliente; 
    rutCliente;
}

class cuentaCorriente
{
    numero;
    #saldo;
    agencia; 

    constructor(){//El constructormétodo es un método especial de una clase para crear e inicializar una instancia de objeto de esa clase.
        this.#saldo = 0;
        this.numero = "";
        this.agencia = "";
    }
    
    depositoEnCuenta(valor){
        if(valor > 0)
            this.#saldo += valor;//es un operador de suma
            return this.#saldo;
    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo)
            this.#saldo -= valor;     
    }

    verSaldo(){
        return this.#saldo;
    }
}

cuentaDeLeonardo = new cuentaCorriente();
//cuentaDeLeonardo.#saldo = 10;

let saldo = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual es " + saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log("El saldo actual es " + saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(10)
console.log('El Saldo actual es '+saldo);

