function mostrar()
{

	var sexo = prompt("ingrese F ó M .");

	sexo=sexo.toLowerCase();

	while(sexo != "f" && sexo != "m")
	{
		sexo=prompt("su sexo no es m o f. Ingrese un sexo valido");	
		sexo=sexo.toLowerCase();
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN