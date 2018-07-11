function mostrar()
{
//tomo la edad  
//Los signos son <= (menor o igual); >=mayor o igual !=distinto
//OPERADORES LOGICOS; OR || PIPE (uno o el otro) AND && AMPERSAND(uno y el otro)
//NOT ! (no) lo podemos usar para negar todo a su derecha
var edad;

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if (edad >= 13 && edad <=17)
{
		alert("usted es adolescente");
}
	;
}//FIN DE LA FUNCIÓN