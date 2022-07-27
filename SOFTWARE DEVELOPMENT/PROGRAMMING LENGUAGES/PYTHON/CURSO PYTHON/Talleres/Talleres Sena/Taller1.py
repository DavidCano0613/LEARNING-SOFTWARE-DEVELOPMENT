# TALLER 1 PYTHON
# JUAN DAVID PANIAGUA CANO
# FECHA: 15-11-2021

from datetime import date
hoy = date.today()
print("La fecha actual de hoy es: ", hoy)
print("A continuacion por favor ingrese 2 números para realizar las 4 operaciones aritméticas básicas")
n1=int(input("Ingrese el primer número: "))
n2 = int(input("Ingrese un segundo número: "))
print("La suma de los valores ingresados es igual a: ",n1+n2,"la resta es igual a: "
,n1-n2,"la multiplicación es igual a: ",n1*n2," y finalmente la división es igual a: ",n1/n2)
