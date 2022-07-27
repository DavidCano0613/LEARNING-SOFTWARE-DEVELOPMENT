#Taller 3 Python
#AUTOR (A): Juan David Paniagua Cano
#FECHA: 27/11/2021

from datetime import date
hoy = date.today() #fecha actual
print("Today is; ", hoy)
a = int(input("Digite el valor de A: "))
b = int(input("Digite el valor de B: "))
if a>=b:
    print("A es mayor o igual a B")
else:
    print("A es menor que B")
print()
curso1 = str(input("Ingrese la asignatura numero 1 que cursa"))
curso2 = str(input("Ingrese la asignatura numero 2 que cursa"))
print("El curso1 es: ",curso1)
print("El curso2 es: ",curso2)
if (curso1 == "Requerimientos" or "requerimientos") and (curso2 == "Algoritmos" or "algoritmos"):
    print("Usted estudia programacion de software")
else:
    print("Usted estudia otro programa diferente a Programacion de Software")
print()
print("***  Final de Análisis del Programacion de Formacion SENA  ***")
frase=input("Digite una oración: ")
print("La frase en mayuscula es: ", frase.upper())
longitud = len(frase)
print("La longitud de la frase es: ",len(frase), "caracteres")
if longitud>10:
    print("La frase contiene mes de 10 de caracteres")
else:
    print("La frase contiene menos de 11 caracteres")
print()
print("FIN")
