class Caja {
    constructor(codigo, categoria, objetos) {
        this.codigo = codigo;
        this.categoria = categoria;
        this.objetos = objetos;
      }
    get codigo(){
        return this.codigo
    }
    get categoria(){
        return this.categoria;
    }
    get objetos(){
        return this.objetos;
    }
}

