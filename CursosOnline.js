"use strict";
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
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(cur, est, fech, doc) {
        this.nombre = cur;
        this.descripcion = est;
        this.precio = fech;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var Curso1 = new Curso("programacion", "introduccion", 500, "Master Unique");
console.log(Curso1);
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ape, ema, doc) {
        this.nombre = nom;
        this.apellido = ape;
        this.email = ema;
        this.docente = doc;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Estudiante1 = new Estudiante("ale", "vismoke", "alevis@gmail.com", "z. central");
console.log(Estudiante1);
var Docente = /** @class */ (function () {
    function Docente(cur, ape, ema, doc) {
        this.nombre = cur;
        this.apellido = ape;
        this.email = ema;
        this.docente = doc;
    }
    return Docente;
}());
exports.Docente = Docente;
var Docente1 = new Docente("master", "unique", "masuni@gmail.com", "wonder land");
console.log(Docente1);
var Reserva = /** @class */ (function () {
    function Reserva(cur, est, fech) {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = fech;
    }
    return Reserva;
}());
exports.Reserva = Reserva;
var Reserva1 = new Reserva("programacion", "ale", "viernes 27");
console.log(Reserva1);
var Est1 = new Estudiante("Ale", "Estrada", "aleestr@gmail.com", "z. central");
var Est2 = new Estudiante("Bea", "Veizaga", "beaestr@gmail.com", "z. norte");
var Est3 = new Estudiante("Cesmar", "Paredes", "cespar@gmail.com", "z. sud");
var Est4 = new Estudiante("Delia", "Salazar", "delsal@gmail.com", "z. norte");
var Est5 = new Estudiante("Elvia", "Sanchez", "elvsanr@gmail.com", "z. este");
var Est6 = new Estudiante("Fanny", "Viza", "fanvis@gmail.com", "z. oeste");
var Est7 = new Estudiante("Gaby", "Marquina", "gabmar@gmail.com", "z. noreste");
var Est8 = new Estudiante("Hemy", "Cegarra", "hemceg@gmail.com", "z. sudeste");
var Est9 = new Estudiante("Jasmin", "Mamani", "jasman@gmail.com", "z. noroeste");
var Est10 = new Estudiante("Leidy", "Vargas", "leivar@gmail.com", "z. sudoeste");
console.log(Est1);
console.log(Est10);
console.log(Est5);
console.log(Est3);
console.log(Est7);
var Cur1 = new Curso("Python", "avanzado", 450, "Daniel Arias");
var Cur2 = new Curso("JavaScript", "avanzado", 500, "Freddy Vega");
var Cur3 = new Curso("Pycon19", "intermedio", 300, "Cevander Vega");
var Cur4 = new Curso("Diseño de Pag Web", "intensivo", 800, "Richard Claros");
var Cur5 = new Curso("Ingles", "Avanzado", 500, "Gamaliel Torrico");
console.log(Cur2);
console.log(Cur4);
console.log(Cur5);
console.log(Cur1);
var Res1 = new Reserva("JavaScrip", "Fanny Viza", "10 de enero");
var Res2 = new Reserva("Python", "Leidy Vargas", "12 de ener");
var Res3 = new Reserva("Pycon19", "Jasmin Mamani", "13 de enero");
var Res4 = new Reserva("Diseño de Pag Web", "Ale Estrada", "14 de enero");
var Res5 = new Reserva("Ingles", "Hemy Cegarra", "15 de enero");
var Res6 = new Reserva("JavaScript", "Gaby Marquina", "16 de enero");
var Res7 = new Reserva("Python", "Elvia Sanchez", "17 de enero");
var Res8 = new Reserva("Pycon19", "Bea Veizaga", "18 de enero");
var Res9 = new Reserva("Ingles", "Cesmar Paredes", "19 de enero");
var Res10 = new Reserva("JavaScript", "Delia Salazar", "20 de enero");
var Res11 = new Reserva("Ingles", "Shirley Ugarte", "21 de enero");
var Res12 = new Reserva("Diseño de Pag Web", "Neiza Salazar", "22 de enero");
console.log(Res9);
console.log(Res1);
console.log(Res4);
console.log(Res10);
console.log(Res12);
console.log(Res6);
