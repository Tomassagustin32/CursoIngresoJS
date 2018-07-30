function mostrar()
{
	var contador;
	var respuesta;
	var numero;
	var positivo;
	var negativo;
	
	contador=0;
	positivo=0;
	negativo=1;

	respuesta='si';

	while(respuesta != "n")
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero *");
		numero=parseInt(numero);
		respuesta=prompt("Desea seguir ingresando numeros? (si/no)");
		if(numero > 0)
		{
			positivo=positivo+numero;
		}
			if(numero < 0) {
				
				negativo=negativo*numero;
			}
		}
		

	
	
	document.getElementById('suma').value="la suma es "+positivo;
	document.getElementById('producto').value="el producto es "+negativo;

}//FIN DE LA FUNCIÓN