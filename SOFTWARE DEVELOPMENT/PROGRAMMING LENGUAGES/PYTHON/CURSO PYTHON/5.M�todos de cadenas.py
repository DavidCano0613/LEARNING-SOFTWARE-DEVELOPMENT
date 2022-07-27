# Funciones predefinidas de python 

# Existe una diversidad de funciones predefinidas en Python o funciones internas. Buttu (2016) menciona algunas de las funciones más utilizadas y conocidas:


# Métodos de cadenas
# http://pyspanishdoc.sourceforge.net/lib/string-methods.html

# Para python los string son objetos y por ende tienen metodos ya predefinidos en python. 

# Texto
texto = "juan David will be a developer"

# 1.1  Len() Calcula la longitud en caracteres de una cadena o mejor dicho, dice cuantos numeros de caracteres hay incluyendo espacios.
print(len(texto))

# 1.2 Split() Convierte una cadena en una lista

lista = texto.split()
print(lista)

# 1.3 Lower() convierte todo en minusculas
print(texto.lower())

# 1.4 Upper() convierte todo a mayusculas
print(texto.upper())

# 1.5 Capitalize() Hace que el primer caracter sea en mayuscula
print(texto.capitalize())

# 1.6 * Repite cadenas
repeticionCadena = texto*3
print(repeticionCadena)

# 1.7 Replace() Remplaza una cadena por otra
print(texto.replace("juan David is going to be a developer"))

# 1.8 Center() Centra en el ancho dado
print(texto.center(10))

# 1.9 Title() Mayúsculas iniciales
print(texto.title())

# Count() Cuenta cuentas veces esta el string
print(texto.count())

# find() Representa la posición del string
print(texto.find("David"))

# isdigit() Devuelve un booleano, comprueba si es un número o no
edad = int(input("Digite su edad"))
while(edad.isdigit()==False):
    print("Ingresaste texto, por favor ingresa un número")
    edad=int(input("Ingrese su edad"))

if edad>=18:
    print("Ingresas")
else:
    print("No ingresas")

# isalum() Comprueba si son alfanumericos
print(texto.isalnum())

# isalpha() Comprueba si hay solo letras
print(texto.isalpha())

# split() Separa por palabras utilizando espacios
print(texto.split())

# Strip Borra espacios sobrantes al principio y al final
print(texto.strip())

# rfind() Representa el indice, pero contando desde atras dentro del string
print(texto.rfind())

frase = "Hola mundo"
print(frase[1:-1])
print(frase[::-1])

email = input("Ingrese su email: ")
print(email[:email.find("@")] + "gmail.com")

