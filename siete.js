/* 
ingreso:
maria f 15
jose m 33
pepe m 81

mostrar: 
	cantidad:
		1-de mayores de edad= 2 
		2-menores de edad= 1
		3-mujeres = 1
		4-hombres = 2
		5-nombre mayor= pepe
		6-nombre menor= maria
		7-nombre hombre menor edad= jose

*/
function mostrar()
{
	var hombreMenor;
	var mujerMenor;
	var mujerMayor;
	var hombreMayor;
	var contadorMayor;
	var contadorMenor;
	var contadorHombres;
	var contadorMujeres;
	var contador;
	var nombre;
	var edad;
	var sexo;

	contador=0;
	contadorHombres=0;
	contadorMujeres=0;
	contadorMayor=0;
	contadorMenor=0;
	
	while(contador <3)
	{
		contador++;
		nombre=prompt("Ingrese los nombres");
		
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
		while(edad <0 || edad >100)
		{
			edad=prompt("Ingrese las edades");
			edad=parseInt(edad);

		}
		
		sexo=prompt("ingrese sexo (f/m)");
		while(sexo !="f" && sexo !="m")
		{
			sexo=prompt("error.Ingrese sexo (f/m");
			
		}
			if (edad > 17)
			{
				contadorMayor++;
			}else
	{
				contadorMenor++;
			}

			if (sexo == "f")
			{
				contadorMujeres++;
			}
			if (sexo == "m")
			{
				contadorHombres++;
			}
			

	
	}
	

	document.write("<br> la cantidad de mayores es : "+contadorMayor);
	document.write("<br> la cantidad de menores es : "+contadorMenor);
	document.write("<br> la cantidad de hombres es : "+contadorHombres);
	document.write("<br> la cantidad de mujeres es : "+contadorMujeres);
}
