



class Persona{


    static contadorPersonas = 0;

    constructor(idPersona, nombre, apellido, edad){

        this._idPersona =++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
 

    get idPersona(){
    return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
this._nombre = nombre;
    }


    get apellido(){

        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad
    }

    set edad(edad){
        this._edad = edad;


    }



    toString(){
            
            return `
            ${this._idPersona} - 
            ${this._nombre} - 
            ${this._apellido} - 
            ${this._edad}`;
    }


    
}




class Empleado extends Persona{

    static contadorEmpleados = 0;
    
    constructor(sueldo){
this._idEmpleado = ++Empleado.contadorEmpleados;
this._sueldo = sueldo;


    }


    get idEmpleado(){    
        return this._idEmpleado;
    }
    
    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;


    }

    toString(){
    
        
        return `
        ${super.toString()} - 
        ${this._idEmpleado} - 
        ${this._sueldo}`; 
    }

}



class Cliente{

    static contadorCliente  = 0;

    constructor (fechaRegistro){

        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }


    get idCliente(){ 
        return this._idCliente;
    }

    get fechaRegistro(){

        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return ` ${super.toString()} - 
        ${this._idCliente} -
        ${this._fechaRegistro}`;
    }
}


let persona1 = new Persona(1, 'Juan', 'Perez', 30);
console.log(persona1.toString());
