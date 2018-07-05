function mostrar()
{
var precio;
var porcentaje;
var descuento;
var precioDescontado;
var IVA;
var precioFinal;
precio=prompt("ingrese el precio");
precio=parseInt(precio)
porcentaje=prompt("ingrese el porcentaje");
porcentaje=parseInt(porcentaje);
descuento=precio*porcentaje/100;
precioDescontado=precio-descuento;
IVA=precio*21/100;
alert("El descuento es de "+descuento+" el precio con descuento es "+precioDescontado+" y el IVA "+IVA);
precioFinal=precio-descuento+IVA;
document.getElementById('elPrecioFinal').value=precioFinal;

}
