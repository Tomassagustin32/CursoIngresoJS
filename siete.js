function mostrar()
{
	var hombres;
	var mujeres;
	var contador;
	var sexo;
	var edad;
	var mayor=0;
	var menor=0;
	var nombre;
	var nombreMayor;
	var nombreMenor;

	bandera=0
	contador=0;
	mujeres=0;
	hombres=0;

	while(contador<3)
	{
		contador++;
		nombre=prompt("Ingrese su nombre #"+contador);
		sexo=prompt("Ingrese su sexo (f/m) #"+contador);
		edad=parseInt(prompt("Ingrese su edad #"+contador));

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR.Ingrese f o m");
			
		}
		while(edad<0 || edad>100)
		{
			edad=parseInt(prompt("ERROR.Ingrese una edad valida"));
		}
			if(sexo=="f")
			{
				mujeres++;
			}
			if(sexo=="m")
			{
				hombres++;
			}
			if(edad<18)
			{
				menor++;
			}
			if(edad>17)
			{
				mayor++;
			}	
			if(bandera==0)
			{
				nombreMenor=edad;
				nombreMayor=edad;

			}
			if(nombreMayor>edad)
			{
				edad=nombreMayor;
			}
			if(nombreMenor<edad)
			{
				edad=nombreMenor;
			}
			
			
	}
	document.write("<br> la cantidad de mayores es : "+mayor);
	document.write("<br> la cantidad de menores es : "+menor);
	document.write("<br> la cantidad de hombres es : "+hombres);
	document.write("<br> la cantidad de mujeres es : "+mujeres);
	document.write("<br> el nombre del mayor es : "+nombreMayor);
	document.write("<br> el nombre del menor es : "+nombreMenor);
}
