/*Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )
*/

function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var temperaturasPares=0;
	var marcaMasPesado;
	var productosBajoCero=0;
	var pesoMaximo;
	var pesoMinimo;
	var bandera=0;
	var contador=0;
	var sumaPesos=0;

	while(respuesta!='no'){
		contador++;
		marca=prompt("Ingrese la marca del producto #"+contador);
		peso=parseInt(prompt("Ingrese el peso del producto #"+contador))
		
		sumaPesos=sumaPesos+peso;
		while(peso<1 || peso>100){

			peso=parseInt(prompt("ERROR. Ingrese un peso valido"));
		}
		
		temperatura=parseInt(prompt("Ingrese la temperatura del producto #"+contador));

		while(temperatura<-30 || temperatura>30){

			temperatura=parseInt(prompt("ERROR. Ingrese una temperatura valida"));

		}

			if(temperatura % 2){

				temperaturasPares++;
			}


			if(temperatura<0){

				productosBajoCero++;
			}

			if(bandera==0){

				pesoMaximo=peso;
				pesoMinimo=peso;
				marcaMasPesado=marca;
				bandera=1;
			}

			if(peso>pesoMaximo){

				pesoMaximo=peso;
				marcaMasPesado=marca;
			}

			if(peso<pesoMinimo){

				pesoMinimo=peso;
			}
	respuesta=prompt("Desea continuar? (si/no)");

	}

	document.write("<br> Temperaturas pares : "+temperaturasPares);
	document.write("<br> El producto mas pesado es : "+marcaMasPesado);
	document.write("<br> La cantidad de productos bajo cero es : "+productosBajoCero);
	document.write("<br> Promedio de peso de todos los productos : "+sumaPesos/contador);
	document.write("<br> El peso maximo es : "+pesoMaximo);
	document.write("<br> El peso minimo es : "+pesoMinimo);
}
