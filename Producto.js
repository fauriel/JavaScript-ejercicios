

class Producto{

static contadorProductos = 0;

constructor (nombre, precio, cantidad){
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
    this._cantidad = cantidad;
    
}


get idProducto(){
    return this._idProducto;
}

 get nombre(){
     return this._nombre;
 }

 set nombr(nombre){
     this._nombre = nombre;
 }

    get precio(){
        return this._precio;
    }

    set precio(precio){ 
        this._precio = precio;

    }
    
toString(){

    return `${this._idProducto} - ${this._nombre} - ${this._precio} - ${this._cantidad}`;
}
    


}

class Orden {
    static contadorORdenes = 0;

static get MAX_PRO(){
    return 5;  //Maximo de productos que puede tener una orden 
}

constructor(){
    this._idOrden = ++Orden.contadorORdenes;
    this._productos = [];
    this._contadorProductos = 0;

}


get idOrden(){
    return this._idOrden;
}

agregarProducto(producto){
    if(this._productos.length < Orden.MAX_PRO){
    this._productos.push(producto);
    this._contadorProductos++;
    }else{
        console.log("No se puede agregar mas productos");
    }


/*
    if(this._contadorProductos < Orden.MAX_PRO){
        this.productos.push(producto);
        this._contadorProductos++;
    }/**/ 

}

clacularTotal(){
    let totalVenta = 0;
    for(let producto of this._productos){
        totalVenta +=  producto.precio; // totalVenta = totalVenta + producto.precio;
    }

    return totalVenta;
}

mostrarProductos(){

    let productosOrden = "";

    for(let producto of this._productos){
        productosOrden += producto.toString() + "\n";
    }

    console.log(` Orden: ${this.idOrden} \n ${productosOrden} Total: ${this.clacularTotal()}`);
}


}

let producto1 = new Producto("Leche", 1.5, 10);
let producto2 = new Producto("Huevos", 2.5, 10);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarProductos();


