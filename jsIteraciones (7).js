function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var cotinuar;
	while(contador < 2 && respuesta != 'si')
	{
		
		numero=parseInt(prompt("Ingrese  numeros"));
		acumulador=acumulador + numero;
		contador= contador + 1;
		respuesta=prompt("Desea continuar?");
		
	}

	promedio=acumulador/5;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN