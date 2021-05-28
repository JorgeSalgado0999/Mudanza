class Caja {
    constructor(codigo, categoria, objetos) {
        this.codigo = codigo;
        this.categoria = categoria;
        this.objetos = objetos;
      }
    get codigo(){
        return this.codigo;
    }
    get categoria(){
        return this.categoria;
    }
    get objetos(){
        return this.objetos;
    }
}



class Objeto {
     constructor(importante, nombre, fragil) {
         this.importante = importante;
         this.nombre = nombre;
         this.fragil = fragil;
       }
     get importante(){
         return this.importante;
     }
     get nombre(){
         return this.nombre;
     }
     get fragil(){
         return this.fragil;
     }
     set fragil(fragil){
         this.fragil = fragil;
     }
 }

class Mudanza {
    constructor(codigo, estado, cajas, domicilioEntrega, domicilioSalida, empaquetador) {
        this.codigo = codigo;
        this.estado = estado;
        this.cajas = cajas;
        this.domicilioEntrega = domicilioEntrega,
        this.domicilioSalida = domicilioSalida
      }
    get codigo(){
        return this.codigo;
    }
    get categoria(){
        return this.categoria;
    }
     get domicilioEntrega(){
        return this.domicilioEntrega;
    }
      get domicilioSalida(){
        return this.domicilioSalida;
    }
    get objetos(){
        return this.objetos;
    }
    set estado(estadoActulizado){
        this.estado = estadoActualizado;
    }
    set empaquetador(nombre){
        this.empaquetador = nombre;
    }
}

class Usuario {
    constructor(codigo, nombre, foto, categoria) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.foto = foto;
        this.categoris = categoria;
      }
    get codigo(){
        return this.codigo;
    }
    get categoria(){
        return this.categoria;
    }
    get nombre(){
        return this.nombre;
    }
      get foto(){
        return this.foto;
    }
}
class Domicilio {
    constructor(calle, numero, colonia, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
      }
    get calle(){
        return this.calle;
    }
    get numero(){
        return this.numero;
    }
    get colonia(){
        return this.nombre;
    }
      get codigoPostal(){
        return this.codigoPostal;
    }
}
