Algoritmo ejercicio_3 
	Escribir "Ingrese su sueldo base"
	leer sueldoBase;
	Escribir "Ingrese las 3 ventas que hizo el mes"
	leer venta1, venta2, venta3;
	totalVentas = venta1 + venta2 + venta3;
	comision = totalVentas * 0.10;
	totalSueldo = sueldoBase + comision;
	Escribir "Las comisiones por sus ventas son de: ",comision;
	Escribir "Su sueldo total es de: ",totalSueldo;
FinAlgoritmo
