function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;


	while(contador < 5)
	{
		numero=parseInt(prompt("Ingrese 5 numeros"));
		acumulador=acumulador + numero;
		contador=contador + 1;
	}

	promedio=acumulador/5;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN