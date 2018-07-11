function mostrar()
{
//tomo la edad  
//Los signos son <= (menor o igual); >=mayor o igual !=distinto
var edad;

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if (edad >= 18)
{
	alert ("Bienvenido");
}
else if (edad <18)
{
	alert ("Usted es menor de edad");
}	
}//FIN DE LA FUNCIÓN