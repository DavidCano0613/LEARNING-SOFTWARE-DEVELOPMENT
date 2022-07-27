# BUCLES PYTHON
# Conceptos claves:
# Se denominan ciclos repetitivos o iterativos a aquellos que agrupan un bloque de instrucciones para ser ejecutado un determinado número de veces. Este número puede ser fijo (definido por el programador) o puede ser variable (dependiendo de algún valor o condición en el programa).
#  La estructura de un bloque esta formada por dos partes, la declaración del bucle y el cuerpo del bucle (linea de código dentro del bucle) El bloque de instrucciones que se repite se denomina cuerpo del bucle y cada repetición se denomina una iteración.

# 1) Ciclos determinados:
# Los ciclos determinandos son donde sabemos apriori exactamente el número de iteraciones que va a hacer el bucle.
# Ciclo FOR 
# Es determinado
# La estructura for o "para" se usa en aquellos casos en los cuales se tiene certeza de la cantidad de veces que se desea ejecutar un bloque de instrucciones.

# Su sintaxis es: for variable in elemento a recorrer: cuerpo del bucle.

# Esta estructura de control iterativa se utiliza en situaciones en las que se desea que una variable de control tenga un valor inicial y un valor final predefinidos. No es necesario definir la variable de control antes del bucle, aunque se puede utilizar una variable ya definida previamente en el programa.

# El bucle for se puede usar para recorrer los items de cualquier secuencia (cadena, lista, tupla, conjunto, diccionario) y ejecutar un bloque de código sobre ese item. En cada iteración se tiene acceso a un único elemento de la secuencia.

# Ejemplos con FOR

# Ejemplo 1 recorriendo una cadena de carácteres:  
# nombre = "Juan David Cano"
# for i in nombre:
#     print(i)

# Ejemplo 2 recorriendo una lista: 
# for i in ["Hello","World","David"]:
#     print(i)

# Ejemplo 3 recorriendo una tupla: 
# animales = ('leon', 'tigre', 'cocodrilo')
# for animal in animales:
#     print("El animal es: {0}, tamaño de palabra es:", len(animal))

# Ejemplo 4 recorriendo un conjunto: 


# Ejemplo 5 recorriendo un diccionario: 



#  Validando un correo:
# for i in "Juan David Paniagua":
#     print(i)
#     print("Hola")


# 2 Ciclos indeterminados. 
# Ciclo While
# Son bucles son indeterminados ya que no se sabe apriori el número de veces que ejecutara el código que tienen en su interior
# Su sintaxis es muy similar a la de in if solo que cambia la palabra reservada while: While condición: cuerpo del bucle.

# Ejemplo 1
# i = 0 
# while i < 100:
#     i +=2
#     print(i)

# Ejemplo 2
# Ejemplo 3
# Ejemplo 4
# Ejemplo 5

# Hallado la raíz cuadrada usando el concepto de importación de una clase que se va usar y usando el bucle while


# 3) Intrucciones de control para bucles. 

# 1) Continue 
# Lo que hace es saltar a la siguiente iteración del bucle, es decir donde se ponga continue, ignorara esa iteración.

# for letra in "python":
#     if letra == "h":
#         continue
#     print("Viendo la letra: " + letra)

# nombre = "Juan David"
# for i in nombre:
#     if i == " ":
#         continue 
# print(i)
# print(nombre.len())


# 2) Else
# El else dentro de los bucles es similar al sentido que tiene un else en un condicional


# 3) Break
#  El break lo que hace es romper el bucle, es decir donde ponga  esta sentencia el bucle finaliza. 

# while True:
#     texto = input("Ingrese una frase: ")
#     if texto == "salir":
#         break
#     print(texto)

# numero = 10
# contador = 0
# while contador < 10:
#     contador +=1
#     print(contador)
#     if contador == 5:
#         break
    


# 4) Pass 
# Lo que hace es devolver null, es como si no se ejecutara el bucle, son casos muy excasos, en casos por ejemplo donde se define una clase que sea nula o para cuando se va dejar para despues el desarrollo del bucle. 



# 5) End
# Lo que hace es agregar cualquier string al final de la salid del print, ejemplo

# for i in [2,1,3]:
#     print("Hola mundo", end="\t")



# 6) RANGE
# En el ciclo iterativo for se puede usar la función range, para indicar un rango de valores. Es similiar a usar el contador en otros bucles for como en javascript for(i=i; i=f;; i++)
# En su sintaxis puede recibir 3 parámetros
# Es posible indicar solo un valor final, en caso tal, el ciclo inicia en 0.

# Ejemplos 

# 1)
# n = 5
# for i in range(n): 
#     print(i+1)

# 2)
# for i in range(5):
#     print(f"Valor de la variable {i+1}")

# 3)
# for i in range(5,50,3):
#     print(f"Valor de la variable {i}")

# 4) pares e impares hasta el 20
# for i in range(1,20,2):
#     print(f"Valor de la variable {i}")

# for j in range(0,20,2):
#     print(f"Valor de la variable {j}")


# 5)
# for i in range(2, 5):
#      print(i, i ** 3)


# 6) Tablas de multiplicar del 1 al 10 
# for i in range(1, 11):
#     for j in range(1, 11):
#         print(i*j, end="\t")
#     print("")

# 7)
# n = int(input("Introduce la altura del triángulo (entero positivo): "))
# for i in range(1, n+1, 2):
#     for j in range(i, 0, -2):
#         print(j, end=" ")
#     print("")


# 8)
# n = int(input("Introduce un número entero positivo mayor que 2: "))
# for i in range(2, n):
#     if n % i == 0:
#         break
# if (i + 1)  == n:
#     print(str(n) + " es primo")
# else: 
#     print(str(n) + " no es primo")

# 9)
# word = input("Introduce una palabra: ")
# for i in range(len(word)-1, -1, -1):
#     print(word[i])

# 10)
# frase = input("Introduce una frase: ")
# letra = input("Introduce una letra")
# acumulador = 0
# for i in frase:
#     if i == letra:
#         acumulador += 1
# print("La letra '%s' aparece %2i veces en la frase '%s'." % (letra, contador, frase))


# 11)
# for i in range(1,10):
#     for j in range(1,11):
#         res = i*j
#         print(i,"x",j,"es: ",res)

# uso del parámetro sep 
# print(1,2,3,4,5,6,7, sep="-")
# print(1,2,3,4,5,6,7, sep=",")
# print(1,2,3,4,5,6,7, sep=".")
# print(1,2,3,4,5,6,7, sep="")

# 12
frutas = ["papaya","mango","mora","kiwi","uva"]
precio = [1.56,1.34,1.23,3,2.5]
print("Lista de frutas con precio menor a 1.50")
for i in range(len(frutas)):
    fruta=frutas[i]
    precios=precio[i]
    if precios < 1.50:
        print(fruta)

