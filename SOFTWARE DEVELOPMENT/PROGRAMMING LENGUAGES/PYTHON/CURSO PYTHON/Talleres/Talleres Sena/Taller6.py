# Taller 6 PYTHON
# AUTOR: JUAN DAVID PANIAGUA CANO
# FECHA: 3/12/2021

print("INICIO DEL PROGRAMA")
from datetime import date
hoy = date.today() #fecha actual
print("Hoy es:", hoy)
print()
print("Taller 6 CICLOS ITERATIVOS CON LA SENTENCIA WHILE")
print()
num= int(input("Ingrese un número: "))
print("Ciclo controlado por contador")
i = 1
while i <= num:
    print(i)
    i += 1
print("Fin del ciclo")
print()
print("Ciclo controlado por evento")
i = 1
numero1=5
numero2 = int(input("Ingrese un número del 1 al 10: "))
while numero2 != numero1:
    i += 1
    numero2 = int(input("Ingrese un número del 1 al 10: "))
print("Acertaste en el intento número: ",i)
print("Fin del ciclo")
print()
print("Ciclo abortado con la sentencia break")
amistad = input("Digite el nombre de un amigo: ")
amistad = amistad.upper()
for character in amistad:
    if character=="A":
        break
print("Fin del ciclo")
print()
print("Fin del programa")

