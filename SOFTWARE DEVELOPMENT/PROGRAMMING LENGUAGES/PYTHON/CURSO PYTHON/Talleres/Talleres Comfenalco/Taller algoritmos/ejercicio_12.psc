Algoritmo ejercicio_12
	Escribir "Ingrese los nombres de los inversores";
	leer name1, name2, name3;
	Escribir "Ingrese el monto de la inversi�n de cada uno";
	leer inversion1, inversion2, inversion3;
	totalInversion = inversion1 + inversion2 + inversion3;
	primerInversor = (inversion1*100)/totalInversion;
	segundoInversor = (inversion2*100)/totalInversion;
	tercerInversor = (inversion3*100)/totalInversion;
	Escribir "De una inversi�n total de: ", totalInversion;
	Escribir "El inversi�n # 1: ", name1, "invirtio un porcentaje de: ", primerInversor;
	Escribir "El inversi�n # 2: ", name2, "invirtio un porcentaje de: ", segundoInversor;
	Escribir "El inversi�n # 3: ", name3, "invirtio un porcentaje de: ", tercerInversor;
FinAlgoritmo
