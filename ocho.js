/*Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)
*/
function mostrar()
{
	var letra;
	var numero;
	var pares=0;
	var impares=0;
	var ceros=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var negativos;
	var bandera;
	var contador=0;
	var maximo=0;
	var minimo=0;
	var letraMaximo;
	var letraMinimo;
	var respuesta;
	var contadorPositivos=0;

	while(respuesta!="no"){

		contador++;
		letra=isNaN(prompt("Ingrese una letra"));
		numero=parseInt(prompt("Ingrese un numero"));
		
		while(numero>100 || numero <-100){
			numero=parseInt(prompt("Error.Ingrese un numero valido"));

		}
		if(numero>0){
			contadorPositivos++;
			acumuladorPositivos=acumuladorPositivos+numero;
		}
		

		if(numero % 2 == 0){
			pares++;

		} else{
			impares++;
		}

		if(numero == 0){
			ceros++;
		}

		if(numero<0){

			acumuladorNegativos=acumuladorNegativos+numero;
		}

		if(bandera==0 && numero>maximo){

			maximo=numero;
			letraMaximo=letra;

		}

		if(bandera==0 && numero<minimo){

			minimo=numero;
			letraMinimo=letra;
			bandera++;
		}

		if(numero>maximo){
			maximo=numero;
			letraMaximo=letra;
		}

		if(numero<minimo){
			minimo=numero;
			letraMinimo=letra;
		}
	respuesta=prompt("Desea continuar? (si/no)");
	}

	document.write("<br> La cantidad de pares es : "+pares);
	document.write("<br> La cantidad de impares es : "+impares);
	document.write("<br> La cantidad de ceros es : "+ceros);
	document.write("<br> El promedio de positivos es : "+acumuladorPositivos/contadorPositivos);
	document.write("<br> La suma de los negativos es : "+acumuladorNegativos);
	document.write("<br> El numero del maximo es : "+maximo+" y la letra es : "+letraMaximo);
	document.write("<br> El numero del minimo es : "+minimo+" y la letra es : "+letraMinimo);
}
