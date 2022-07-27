Algoritmo ejercicio_12
	Escribir "Ingrese los nombres de los inversores";
	leer name1, name2, name3;
	Escribir "Ingrese el monto de la inversión de cada uno";
	leer inversion1, inversion2, inversion3;
	totalInversion = inversion1 + inversion2 + inversion3;
	primerInversor = (inversion1*100)/totalInversion;
	segundoInversor = (inversion2*100)/totalInversion;
	tercerInversor = (inversion3*100)/totalInversion;
	Escribir "De una inversión total de: ", totalInversion;
	Escribir "El inversión # 1: ", name1, "invirtio un porcentaje de: ", primerInversor;
	Escribir "El inversión # 2: ", name2, "invirtio un porcentaje de: ", segundoInversor;
	Escribir "El inversión # 3: ", name3, "invirtio un porcentaje de: ", tercerInversor;
FinAlgoritmo
