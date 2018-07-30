function mostrar()
{

	var contador=0;
	// declarar variables
	var mayor;
	var menor;
	var respuesta='si';
	var bandera=0;
		
	while(respuesta!='no')
	{
		contador=contador+1;
		numero=prompt("ingrese un numero #"+contador);
		numero=parseInt(numero);

		
		if(bandera==0)
		{
			menor=numero;
			mayor=numero;
			bandera=1;
		}
		if(numero<menor)
		{
			menor=numero;
		}

		if(numero>mayor)
		{
			mayor=numero;
		}
		respuesta=prompt("Desea seguir ingresando numeros? (si/no)");
	}

	document.getElementById('maximo').value=mayor;
	document.getElementById('minimo').value=menor;




}//FIN DE LA FUNCIÓN