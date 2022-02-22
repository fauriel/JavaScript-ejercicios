


class Persona{
 static contador = 0;

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
    toString(){
        return this.nombreCompleto()
    }

    //metodo estatico

    static saludar(){
        console.log("hola");
    }

    static saludar2(persona){
        console.log("hola " + persona.nombre);
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );//get nombre

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombreCompleto() );

console.log(empleado1.toString());


//persona1.saludar();

//Persona.saludar2(persona1);

console.log(Persona.contador);
console.log(Empleado.contador);