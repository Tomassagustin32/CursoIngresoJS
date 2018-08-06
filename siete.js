function mostrar()
{
	var notas;
	var sexo;
	var contador=0;
	var varones=0;
	var bandera=0;
	var notaBaja;
	var sexoBaja;
	var acumulador=0;

	acumulador=parseInt(acumulador);

	while(contador<5){
		contador++;
		notas=parseInt(prompt("Ingrese las notas #"+contador));
		acumulador=acumulador+notas;
		sexo=prompt("Ingrese el sexo. (f/m) #"+contador);
		while(sexo!='f' && sexo!='m'){

		sexo=prompt("Error. Ingrese un sexo valido. (f/m)");
		}
		if(notas<0 || notas>10){

			notas=parseInt(prompt("Error.Ingrese una nota valida"));	
		}

		if(bandera==0 || notas<notaBaja){

			notaBaja=notas;
			sexoBaja=sexo;
			bandera++;
		}

		if(notas<notaBaja){

			notaBaja=notas;
			sexoBaja=sexo;
		}

		if(notas>=6){

			varones++;
		}

	}

	

	alert("El promedio de las notas es : "+acumulador/5);
	alert("La nota mas baja es : "+notaBaja+" y su sexo es : "+sexoBaja);
	alert("Varones con nota mayor a 6 : "+varones);

}
