# Taller 5 PYTHON
# AUTOR: JUAN DAVID PANIAGUA CANO
# FECHA: 3/12/2021

from datetime import date
hoy = date.today() #fecha actual
print("Hoy es:", hoy)
print("Taller 5 CICLOS ITERATIVOS CON LA SECUENCIA FOR")
print()
num1 = int(input("Digite el primer numero: "))
num2 = int(input("Digite el segundo numero: "))
print("Ciclo para el primer número")
for i in range(num1) : 
    print(i+1)
print("Fin del ciclo")
print()
print("Ciclo desde el primer numero hasta el segundo número")
for i in range(num1,num2):
    print(i+1)
print("Fin del ciclo")
print()
print("Ciclo desde el primero hasta el segundo numero con incrementos de 2")
for i in range(num1,num2, 2):
    print(i)
print("Fin del ciclo")
print()
empresa = input("Digite el nombre de una empresa: ")
empresa = empresa.upper()
for character in empresa:
    print(character)
print("Fin del ciclo")
print()
#Ejercicio adicional para mostrar la suma de los 100 primeros números. 
print("Ciclo para sumar los número entre 1 y 100")
numero = 1
suma = 0 
for i in range(0,99,+1):
    numero+=1
    suma = suma + numero
print(suma)
print("Fin del ciclo")
print("FIN DEL PROGRAMA")
