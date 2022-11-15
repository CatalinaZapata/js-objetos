import { clientes } from "./clientes.js";
export class cuentaCorriente
{
    #cliente;
    numero;
    agencia; 
    #saldo;
    static cantidadCuenta = 0;

    set cliente(valor){
        if(valor instanceof clientes)
            this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numero, agencia){//El constructormétodo es un método especial de una clase para crear e inicializar una instancia de objeto de esa clase.
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        cuentaCorriente.cantidadCuenta++;
    }

    depositoEnCuenta(valor){
        if(valor > 0)
            this.#saldo += valor;//es un operador de suma
            return this.#saldo;
    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo)
            return this.#saldo -= valor;     
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino){//valorprimitivo,instanciaobjeto
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
    }
}