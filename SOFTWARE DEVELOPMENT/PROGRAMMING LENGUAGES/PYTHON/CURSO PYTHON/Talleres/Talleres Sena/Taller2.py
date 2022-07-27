# Taller 2 Python
# Juan David Paniagua Cano
# Fecha = 15 - 11 - 2021

print("Inicio")
from datetime import date
hoy = date.today()
print("La fecha actual es: ", hoy)

print("A continuación por favor ingrese tres números diferentes")
a = int(input("Ingrese el primero "))
b = int(input("Ingrese el segundo "))
c = int(input("Ingrese el tercero "))
x = [a, b, c]
print ("El valor máxmimo es de: ", max(x))
print ("El valor minimo es de: ", min(x))
print ("La suma de los tres números es de: ", sum(x))
print()
z = float(input("Ingrese un número con decimales"))
redondeo = round(z)
print("El valor ingresado redondeado es de: ", redondeo)
print()
frase = input("Ingrese una oración")
print("La oracion en mayúscula es de: ",frase.upper())
print("La oracion en minuscula es de: ",frase.lower())
print("La oracion con mayúscula inicial es de: ", frase.capitalize())
print("La oracion con mayúsculas iniciales por cada palabra: ",frase.title())
print("La longitud de la oracion es de: ",len(frase)," caracteres")
print()
print("FIN")


