function mostrar()
{
	var numero;
	var contador=0;
	//declarar contadores y variables 
	var positivos=0;
	var negativos=1;
	var pares;
	var ceros;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadPositivos;
	var cantidadNegativos;
	var diferenciaPosNeg;
	var promedioPositivos;
	var promedioNegativos;
	var respuesta="si";



	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if (numero < 0)
		{
			sumaNegativos=negativos+numero;
			
		}
		if (numero >= 0)
		{
			sumaPositivos=positivos+numero;
			
		}
	respuesta=prompt("Desea continuar? (si/no)")

	}




}//FIN DE LA FUNCIÓN