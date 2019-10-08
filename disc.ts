export class Cd {
    private cancion: Cancion [];
    private contador: number;
    contructor() {
        this.cancion = [];
        this.contador = 1;
    }
    public agregarListaCancion(cancion: Cancion):void{
        this.cancion.push(cancion);
        this.contador++;
    }
}

export class Cancion {
    private nombre: string;
    private autor: string;
    private genero: string;
    constructor(nombre: string, autor: string, genero: string) {
        this.nombre = nombre;
        this.autor = autor;
        this.genero = genero;
    }
}
