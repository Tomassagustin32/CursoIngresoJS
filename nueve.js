//d) El promedio del peso de todos los animales.	
//f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta;
	var temperaturasPares=0;
	var animalMasPesado;
	var animalesBajoCero=0;
	var pesoMaximo;
	var pesoMinimo;
	var bandera=0;
	var contador=0;
	var sumaPesos=0;
	var pesoMaximoBajoCero;

	while(respuesta!='no'){
		contador++;
		animal=prompt("Ingrese el nombre del animal #"+contador);
		peso=parseInt(prompt("Ingrese el peso del animal #"+contador))
		while(peso<1 || peso>1000){
			peso=parseInt(prompt("ERROR. Ingrese un peso valido"));
		}
		
		temperatura=parseInt(prompt("Ingrese la temperatura del animal #"+contador));
		while(temperatura<-30 || temperatura>30){

			temperatura=parseInt(prompt("ERROR. Ingrese una temperatura valida"));

		}

		
		if(temperatura % 2 == 0){

			temperaturasPares++;
		}
		if(contador==1)
		{
			masPesado=peso;
			masPesadoNombre=nombre;
			masPesadoTemperatura=temperatura;

		}else
		{	

			if(peso>masPesado)
			{
				masPesado=peso;
				masPesadoNombre=nombre;
				masPesadoTemperatura=temperatura;

			}

		}





		if(temperatura<0)
		{
			animalesBajoCero++;
			
			if(animalesBajoCero==1)
			{
				pesoMaximoBajoCero=peso;
				pesoMinimoBajoCero=peso;
			}else
			{
				if(peso>pesoMaximoBajoCero)
				{
					pesoMaximoBajoCero=peso;
				}
				if(peso<pesoMinimoBajoCero)
				{
					pesoMinimoBajoCero=peso;
				}

			}

		}
		sumaPesos=sumaPesos+peso;
		
		

		

			
	respuesta=prompt("Desea continuar? (si/no)");

	}

	promedio= sumaPesos/contador;
	
	document.write("<br> Temperaturas pares : "+temperaturasPares);
	document.write("<br> El animal mas pesado es : "+masPesado);
	document.write("<br> La cantidad de animales bajo cero es : "+animalesBajoCero);
	document.write("<br> Promedio de peso de todos los animales : "+promedio);
	document.write("<br> El peso maximo es : "+pesoMaximoBajoCero);
	document.write("<br> El peso minimo es : "+pesoMinimoBajoCero);
}
