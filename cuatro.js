function mostrar()
{
	var numero1;
	var numero2;
	var resultado;
	var resultadoSuma;
	var resultadoResta;

	numero1=prompt("Ingrese el numero #1");
	numero2=prompt("Ingrese el numero #2");	

	if(numero1==numero2){
		resultado=numero1+numero2;
		alert("El resultado es "+resultado);
	}
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	
	if(numero1>numero2){

		resultadoResta=numero1-numero2;
		alert("La resta es "+resultadoResta);
	}

	if(numero1<numero2 && numero1+numero2<=10){  
		resultadoSuma=numero1+numero2;
		alert("La suma es "+resultadoSuma);
	}
	
	if(numero1+numero2 > 10 && numero1<numero2){
		resultadoSuma=numero1+numero2;
		alert("La suma es "+resultadoSuma+" y supero el 10");
	}
		
}
