/*
function saludar(nombre) {
    console.log('hola$(nombre)');
}
function despedir()
function darBienvenida(mensaje, mycallbackfuntion, myfuntion2) {
    console.log(mensaje);
    mycallbackfuntion('Fanny');
    myfunction2('lic');

}
darBienvenida('Bienvenido a Academy', saludar)*/

function saludar(nombre) {
    console.log('hola $(nombre)');
}
function despedir() {
    console.log('hasta luego');
}
function darBienvenida(mensaje, myfunction, myfunction2) {
}
function hello(Mundo) {
}
var hola = function () {
}
setTimeout(hola, 1000)


function hola(callback) {
    callback();
}
function showAlert() {
    alert('Alert');
}
function hola(callback) {
    console.log("adios");
    callback();
}

it("checks something of the DOM", function (done) {
    foo1();
    foo2();
    foo3();
    function ontimeout() {
        expect(parseInt(element.innerhtml)).toEqual(x);
        done();
    }
    setTimeout(ontimeout, 1000);

});