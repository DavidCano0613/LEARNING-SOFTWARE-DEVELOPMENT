Algoritmo ejercicio_4
	Escribir "Inicio del programa";
	Escribir "Ingrese dos números para sumar: ";
	leer num1,num2;
	suma =  num1 + num2;
	si suma == 0 Entonces
		Escribir "El resultado de la suma es neutro: ",suma;
	SiNo
		Si suma > 0 Entonces
			Escribir "El resultado de la suma es positivo: ",suma;
		SiNo
			Escribir "El resultado de la suma es negativo: ",suma;
		FinSi
	FinSi
	Escribir "Fin del programa";
FinAlgoritmo
