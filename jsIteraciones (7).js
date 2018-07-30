function mostrar()
{
/*
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;
	
	contador=0;
	acumulador=0;

	while(respuesta != "no")
	
	
	{
		
		numero=parseInt(prompt("Ingrese  numeros"));
		acumulador=acumulador + numero;
		acumulador=parseInt(acumulador);
		contador= contador + 1;
		contador=parseInt(contador);
		respuesta=prompt("Desea continuar?");	
	}

	promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
*/

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;
	
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta != "n")
	{
		numero=prompt("Ingrese un numero *"+contador);
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador=contador+1;

		respuesta=prompt("Desea seguir ingresando numeros? (si/no)");
	}	

	promedio=acumulador/contador;
	
	document.getElementById('suma').value="la suma es "+acumulador;
	document.getElementById('promedio').value="el promedio es "+promedio;

}//FIN DE LA FUNCIÓN