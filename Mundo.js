

class DispositoE{

    constructor(tipoEntr, marca){

        this._tipoEntr = tipoEntr;
        this._marca = marca;


    }

    get tipoEntr(){
        return this._tipoEntr;
    }

    set tipoEntr(tipoEntr){
    this._tipoEntr = tipoEntr;


    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
    this._marca = marca;
    }





}


class Raton extends DispositoE{

    static contadorR = 0;

    constructor(tipoEntr, marca, tipoRaton){

        super(tipoEntr, marca);
        this._idRaton =  ++Raton.contadorR;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
         
        return `Raton: ${this._idRaton} - ${this._tipoEntr} - ${this._marca}`;
    }

    }


    class Teclado extends DispositoE{
        static contadorT = 0;

        constructor(tipoEntr, marca, tipoTeclado){
        super(tipoEntr, marca);
        this._idTeclado = ++Teclado.contadorT;
        
        }

        get idTeclado(){
            return this._idTeclado;
        }

        toString(){

            return `Teclado: ${this._idTeclado} - ${this._tipoEntr} - ${this._marca}`;
        }


    

    }

    class Monitor extends DispositoE{
        static contadorM = 0;

        constructor(tipoEntr, marca, tamano){
            super(tipoEntr, marca);
        this._idMonitor = ++Monitor.contadorM;
        this._marca = marca;
        this._tamano = tamano;
        }

        get idMonitor(){
            return this._idMonitor;
        }

        toString(){

            return `Monitor: ${this._idMonitor} - ${this._tipoEntr} - ${this._marca} - ${this._tamano}`;
        }

    }


    class Computadora{ 

        static contadorC = 0;

        constructor(tipoEntr, marca, ram, procesador, discoDuro, raton, teclado, monitor){
            this._idComputadora = ++Computadora.contadorC;
            this._tipoEntr = tipoEntr;
            this._ram = ram;
            this._procesador = procesador;
            this._discoDuro = discoDuro;
            this._raton = raton;
            this._teclado = teclado;
            this._monitor = monitor;

        }

        toString(){
            return  `Computadora: ${this._idMonitor} - ${this._tipoEntr} - ${this._marca} - ${this._ram} - ${this._procesador} - ${this._discoDuro} - ${this._raton} - ${this._teclado} - ${this._monitor}`;
        }


    }



    let raton1 = new Raton("USB", "Logitech");

    console.log(raton1.toString());

    let teclado1 = new Teclado("Bluethooth", "Logitech");
    let teclado2 = new Teclado("USB", "evegea");

    console.log(teclado1.toString());
    console.log(teclado2.toString());


    let monitor1 = new Monitor( "LG", 15);
    let monitor2 = new Monitor( "Samsung", 20);
    console.log(monitor1.toString());
    console.log(monitor2.toString());

    let computadora1 = new Computadora("USB", "LG", "4GB", "i7", "500GB", raton1, teclado1, monitor1);
    let computadora2 = new Computadora("USB", "LG", "4GB", "i7", "500GB", raton1, teclado1, monitor1);

     console.log(computadora1.toString());
        console.log(computadora2.toString());