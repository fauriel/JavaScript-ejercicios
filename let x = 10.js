
//Funcion constru ctor d eobjetos tipo persona

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}


let padre = new Persona('Juan', 'Perez', 'jsjsjsj@hotmail.com');
console.log(padre);



let x = 10

console.log(x.lenght);


let persona = {
    nombre: "Juan",
    apellido: "Peraaez",
    edad: 20,
    email: "sdwsdwdw@hitmao.ocm",
    idioma: "Español",
    get lang(){
        return this.idioma.toUpperCase;
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();

    }
}

Persona.prototype.tel= "55555555";


console.log(persona.lang);
persona.lang = "Ingles";
console.log(persona.idioma);

let miObjecto = new Object();
miObjecto2 = {"nombre": "Juanqq", "apellido": "Perezqq", "edad": 200, "email": "asdsadsad"};
miObjecto2.tel = "123456789";

console.log(miObjecto2.tel);



////Call
let persona1 = {

    "nombre": "Juan",
    "apellido": "Perez",
    "edad": 20,
    "email": "sadfafs",

    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

persona1.nombreCompleto();
console.log(persona1.nombreCompleto.apply(persona));



/*
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

console.log(persona.nombre + " " +  persona.apellido);


let persona2 = new Object();

persona2.nombre = "Juaaaaan";
persona2.apellido = "Perezaaaa";

//for in

for(propiedad in persona){
    console.log(persona[propiedad]);
}
*/