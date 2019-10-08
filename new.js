function saludar(nombre) {
    console.log('hola$(nombre)');
}
function darBienvenida(mensaje, mycallbackfuntion) {
    console.log(mensaje);
    mycallbackfuntion('Fanny');
}
darBienvenida('Bienvenido a Academy', saludar);
