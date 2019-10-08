/*crear la siguiente clase
motor: con metodos para arrancar el motor y apagarlorueda con metodos para inflar la rueda y desinflarla
ventana: con metodos para abrirla y cerrarla
puerta coche con el atributo boolean esta bloqueado
coche con un motor, cuatro ruedas y dos puertas; con los metodos que te parezcan adecuados. 
defina las siguientes interfaces: 
interface puertas: con los metodos abrir y cerrar.
puerta bloqueable: derivada de puerta, con los metodos bloquea y desbloquea
alarma: con los metodos, encender alarma, activar alarma y desactivar alarma
cree la siguiente clase:
componente de coche: con los atributos descripcion, peso y coste; y un metodo que muestre dichos atributos
aplique el uso de herencia con esta clase y las anteriores clases mencionadas. 
*/

export class Motor {
    private arrancarMotor: string;
    private apagarMotor: string;
    private inflarRueda: string;
    private desinflarRueda: string;
    contructor(arrancarMotor: string, apagarMotor: string, inflarRueda: string, desinflarRueda: string) {
        this.arrancarMotor = arrancarMotor;
        this.apagarMotor = apagarMotor;
        this.inflarRueda = inflarRueda;
        this.desinflarRueda = desinflarRueda
    }
    inicio (){
        return "Empieza" + this.arrancarMotor;
    }
    fin (){
        return "termina" + this. apagarMotor;
    }
}
export class Ventana {
    private abrir: string;1
    private cerrar: string;
    constructor(abrir: string, cerrar: string) {
        this.abrir = abrir;
        this.cerrar = cerrar;
    }
}
export class componenteCoche {
    private descripcion: string;
    private peso: number;
    private costo: number;
    constructor(descripcion: string, peso: number, costo: number) {
        this.descripcion = descripcion;
        this.peso = peso;
        this.costo = costo;
    }
}  