Algoritmo ejercicio5
	Escribir "Ingrese sus tres notas parciales";
	Leer nota1, nota2, nota3; 
	promedio = ((nota1 + nota2 + nota3)/3);
	Escribir "Ingrese la calificación del examen final";
	Leer examenFinal; 
	Escribir "Ingrese la calificación del trabajo final";
	Leer trabajoFinal; 
	notaMateria = ((promedio*0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15));
	Escribir "Su nota definitiva en la asignatura de algoritmos es de: ", notaMateria;
FinAlgoritmo
