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
