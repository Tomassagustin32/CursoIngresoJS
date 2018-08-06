function mostrar()
{
	var planeta;
	var noPlaneta;
	planeta=prompt("Ingrese un planeta");

	switch(planeta){

		case('tierra'):
			alert("aca vivimos");
				break;
		case('jupiter'):
		case('neptuno'):
		case('saturno'):
		case('marte'):
		case('pluton'):
		case('urano'):
			alert("aca hace mas frio");
				break;
		case('mercurio'):
		case('venus'):
			alert("aca hace mas calor");
				break;				
		default:
			planeta=prompt("su planeta no es valido. Ingrese un planeta");
		
	

		
	}


}
