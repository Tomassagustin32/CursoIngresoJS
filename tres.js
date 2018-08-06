function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=parseInt(prompt("Ingrese el precio"));
	descuento=parseInt(prompt("Ingrese el porcentaje de descuento"));

	descuento=precio*descuento/100;

	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal;
}	

