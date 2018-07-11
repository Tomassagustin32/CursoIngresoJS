function mostrar()
{
//tomo la edad  
//Los signos son <= (menor o igual); >=mayor o igual !=distinto
var edad;

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if (edad >= 18)
{
	alert ("Usted es mayor de edad");
}
else if (edad <=12)
{
	alert ("Es un niño");
}
else 
alert ("Usted es adolescente");	
}//FIN DE LA FUNCIÓN