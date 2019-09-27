/*se necesita realizar el siguiente problema usando programcion orientada a objetos 
se desea reralizar un sistema de venta de cursos online como por ej.: platzi, etc.
para ello se necesita interactuar con el estudiante, profesores de los mismos se necesita
registrar su informacion basica como nombre, apellido, correo, por otra parte se necesita
interacturar con los cursos que se imparten, por otra parte se necesita registrar
su precio, nombre, descripcion, fianlmente se desea guardar el nombre 
de los estudiantes que compraron algun curso. un estudiante o profesor puede tener
una o mas direcciones, al mismo tiempo una docente esta compuesta por la siguiente
informacion: ciudad, barrio, calle. para los profesores en particular se necesita 
guardar su profesion*/

export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: string;

    public constructor(cur: string, est: string, fech: number, doc: string) {
        this.nombre = cur;
        this.descripcion = est;
        this.precio = fech;
        this.docente = doc;
    }
}
let Curso1: Curso = new Curso("programacion", "introduccion", 500, "Master Unique")
console.log(Curso1);
export class Estudiante {
    private nombre: string;
    private apellido: string;
    private email: string;
    private docente: string;

    public constructor(nom: string, ape: string, ema: string, doc: string) {
        this.nombre = nom;
        this.apellido = ape;
        this.email = ema;
        this.docente = doc;
    }
}
let Estudiante1: Estudiante = new Estudiante("ale", "vismoke", "alevis@gmail.com", "z. central")
console.log(Estudiante1);

export class Docente {
    private nombre: string;
    private apellido: string;
    private email: string;
    private docente: string;

    public constructor(cur: string, ape: string, ema: string, doc: string) {
        this.nombre = cur;
        this.apellido = ape;
        this.email = ema;
        this.docente = doc;
    }
}
let Docente1: Docente = new Docente("master", "unique", "masuni@gmail.com", "wonder land")
console.log(Docente1);

export class Reserva {
    private curso: string;
    private estudiante: string;
    private fecha: string;



    public constructor(cur: string, est: string, fech: string) {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = fech;
    }
}
let Reserva1: Reserva = new Reserva("programacion", "ale", "viernes 27")
console.log(Reserva1);

let Est1: Estudiante = new Estudiante("Ale", "Estrada", "aleestr@gmail.com", "z. central")
let Est2: Estudiante = new Estudiante("Bea", "Veizaga", "beaestr@gmail.com", "z. norte")
let Est3: Estudiante = new Estudiante("Cesmar", "Paredes", "cespar@gmail.com", "z. sud")
let Est4: Estudiante = new Estudiante("Delia", "Salazar", "delsal@gmail.com", "z. norte")
let Est5: Estudiante = new Estudiante("Elvia", "Sanchez", "elvsanr@gmail.com", "z. este")
let Est6: Estudiante = new Estudiante("Fanny", "Viza", "fanvis@gmail.com", "z. oeste")
let Est7: Estudiante = new Estudiante("Gaby", "Marquina", "gabmar@gmail.com", "z. noreste")
let Est8: Estudiante = new Estudiante("Hemy", "Cegarra", "hemceg@gmail.com", "z. sudeste")
let Est9: Estudiante = new Estudiante("Jasmin", "Mamani", "jasman@gmail.com", "z. noroeste")
let Est10: Estudiante = new Estudiante("Leidy", "Vargas", "leivar@gmail.com", "z. sudoeste")
console.log(Est1);
console.log(Est10);
console.log(Est5);
console.log(Est3);
console.log(Est7);


let Cur1: Curso = new Curso("Python", "avanzado", 450, "Daniel Arias")
let Cur2: Curso = new Curso("JavaScript", "avanzado", 500, "Freddy Vega")
let Cur3: Curso = new Curso("Pycon19", "intermedio", 300, "Cevander Vega")
let Cur4: Curso = new Curso("Diseño de Pag Web", "intensivo", 800, "Richard Claros")
let Cur5: Curso = new Curso("Ingles", "Avanzado", 500, "Gamaliel Torrico")
console.log(Cur2);
console.log(Cur4);
console.log(Cur5);
console.log(Cur1);


let Res1: Reserva = new Reserva("JavaScrip", "Fanny Viza", "10 de enero")
let Res2: Reserva = new Reserva("Python", "Leidy Vargas", "12 de ener")
let Res3: Reserva = new Reserva("Pycon19", "Jasmin Mamani", "13 de enero")
let Res4: Reserva = new Reserva("Diseño de Pag Web", "Ale Estrada", "14 de enero")
let Res5: Reserva = new Reserva("Ingles", "Hemy Cegarra", "15 de enero")
let Res6: Reserva = new Reserva("JavaScript", "Gaby Marquina", "16 de enero")
let Res7: Reserva = new Reserva("Python", "Elvia Sanchez", "17 de enero")
let Res8: Reserva = new Reserva("Pycon19", "Bea Veizaga", "18 de enero")
let Res9: Reserva = new Reserva("Ingles", "Cesmar Paredes", "19 de enero")
let Res10: Reserva = new Reserva("JavaScript", "Delia Salazar", "20 de enero")
let Res11: Reserva = new Reserva("Ingles", "Shirley Ugarte", "21 de enero")
let Res12: Reserva = new Reserva("Diseño de Pag Web", "Neiza Salazar", "22 de enero")
console.log(Res9);
console.log(Res1);
console.log(Res4);
console.log(Res10);
console.log(Res12);
console.log(Res6);





