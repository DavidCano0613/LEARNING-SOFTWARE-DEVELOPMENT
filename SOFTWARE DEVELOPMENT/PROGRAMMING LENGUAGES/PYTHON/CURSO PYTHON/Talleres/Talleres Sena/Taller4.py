#Taller 4 Python
#AUTOR (A): Juan David Paniagua Cano
#FECHA: 27/11/2021

from datetime import date
hoy = date.today() #fecha actual

print ("Hoy es el día: ",hoy)
print()
print("EJERCICIOS DE LAS CLASES DE TRIANGULOS")
a = int(input("Digite el valor de A: "))
b = int(input("Digite el valor de B: "))
c = int(input("Digite el valor de C: "))

if a==b and a==c and b==c:
    print("EL TRIANGULO ES EQUILATERO")
elif a==b or b==c or a==c:
    print("EL TRIANGULO ES ISOCELES")
else:
    print("EL TRINGULO ES ESCALENO")
print()
animal=input("Digite un animal: ")
animal= animal.upper()
if animal == "PERRO" or "perro":
    print("Este animal es el mejor amigo del hombre:", animal)
elif animal == "GATO" or "gato":
     print("Este animal persigue a los ratones: ", animal)
elif animal == "OSO" or "oso":
    print("Este animal vive en en paises del norte: ", animal)
else:
    print("No es PERRO, no es GATO, ni es OSO... es: ", animal)
print()
print("FIN")
