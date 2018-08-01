function mostrar()
{
	var hombres;
	var mujeres;
	var contador;
	var sexo;
	var edad;
	var mayor;
	var menor;
	var nombre;
	var nombreMayor;
	var nombreMenor;
	var nombreHombreMenor;
	var edadHombreMenor
	var Mmayor=0;
	var Mmenor=0;

	bandera=0;
	contador=0;
	mayor=0;
	menor=0;
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

		if(sexo=="f")
 			{
 				mujeres++;
 			}else{
 				hombres++;
 			
 			}
 			
 			if(edad<18){
 				
 				Mmenor++;
 			}else{
 				
				Mmayor++;
 			}	
 			
 			if(bandera==0 || edad > mayor)
 			{
 				mayor=edad;
 				nombreMayor=nombre;
 			}

 			if(bandera == 0 || edad < menor)
 			{
 				menor=edad;
 				nombreMenor=nombre;
 				bandera=1;
 			}


 			if(sexo=='m' && hombres == 1){
 				nombreHombreMenor=nombre;
 				edadHombreMenor=edad;
 			
 			}

 			if(sexo=='m' && edad<edadHombreMenor){
 				nombreHombreMenor=nombre;
 				edadHombreMenor=edad;
 			}
 	    	
	}

	

			


	document.write("<br> la cantidad de mayores es : "+Mmayor);
 	document.write("<br> la cantidad de menores es : "+Mmenor);
 	document.write("<br> la cantidad de hombres es : "+hombres);
 	document.write("<br> la cantidad de mujeres es : "+mujeres);
 	document.write("<br> el nombre del mayor es : "+nombreMayor);
 	document.write("<br> el nombre del menor es : "+nombreMenor);
 	if(hombres==0){
 		nombreHombreMenor="No se ingreso ningun hombre";

 	}
 	document.write("<br> el nombre del hombre menor es :"+nombreHombreMenor);
}
