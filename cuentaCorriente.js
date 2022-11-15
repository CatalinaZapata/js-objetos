export class cuentaCorriente
{
    cliente;
    numero;
    agencia; 
    #saldo;

    constructor(){//El constructormétodo es un método especial de una clase para crear e inicializar una instancia de objeto de esa clase.
        this.cliente = null;
        this.numero = "";
        this.agencia = "";
        this.#saldo = 0;
         
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