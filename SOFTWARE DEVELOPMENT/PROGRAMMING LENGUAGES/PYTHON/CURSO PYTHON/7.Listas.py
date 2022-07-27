# Otros tipos de datos en Python 

# Secuencias: list, tuple y range = todos ellos son tipos de estructuras de datos compuestas y se utilizan para agrupar valores del mismo o diferente tipo.

# Listas = list
# Las listas son arreglos unidimensionales o bidimensionales de elementos donde podemos ingresar cualquier tipo de dato, para acceder a estos datos debemos usar un índice. La posición inicial es la posición 0.
# Las listas en Python son muy similares o equivalentes a  un array o vector, son prácticamente lo mismo o su utilidad es la misma. Solo hay una pequeña diferencia muy importante, la cual es que si se usa un array en Python este solo  permite tener elementos del mismo tipo de datos, las listas a diferencia de los arrays son heterogéneas, es decir, pueden almacenar elementos de diferentes tipos de datos. 
# la lista o array en python se puede expandir dinamicamte.
# En las listas al igual que en los arrays utiliza el pocisionamiento lógico.

# Ejemplo listas
# lista = [3, 4.2, 'SENA', [8,9] ,5] # Esta lista contiene int, real, cadena, list, int

# print (lista[0]) # la posición 0 de la lista contiene el valor 3
# print (lista[1]) # la posición 1 de la lista contiene el valor 4.2
# print (lista[2]) # la posición 2 de la lista contiene la cadena 'SENA'
# print (lista[3]) # la posición 3 de la lista contiene la lista [8,9]
# print (lista[4]) # la posición 4 de la lista contiene el valor 5
# print (lista[3][0]) # la posición 3,0 de la lista contiene 8
# print (lista[3][1]) # la posición 3,1 de la lista contiene 9
# print (lista[1:3]) # las posiciones de la 1 a la 3 contienen [4.2, 'SENA'] el primer numero es de donde va y el ultimo lo excluye
# print (lista[1:4]) # las posiciones de la 1 a la 4 contienen [4.2, 'SENA', [8, 9]
# print (lista[1:5]) # las posiciones de la 1 a la 5 contienen [4.2, 'SENA', [8, 9 ],5 ]
# print (lista[-2]) #Los indices negativos lo que hacen es dar la vuelta, esta practica es poco usada.

# # Metodos mas utiles para las listas en Python:

# listStudents = ["Juan David","Natalia","Daniela","Jaime",[21,23,26,42]] 

# # Len devuelva la longitud de la lista (es decir el número de elementos que contiene)
# print(listStudents.len())

# # append() inserta al final de la lista.
# print(listStudents.append("Ferney"))
# print(listStudents)

# # insert() inserta en un lugar específico, recibe dos parámetros, primero el dato y luego la posición.
# print(listStudents.insert(2,"Sancho"))
# print(listStudents)

# # extend() insertamos varios elementos pero lo  hace como si fuese otra lista
# print(listStudents.extend(["Sena",2021,"Medellin"]))
# print(listStudents)

# # index() para saber donde esta un elemento espesifico devuelve la posicion en la que esta esa posicion, es como un algoritmo de busqueda. 
# print(listStudents.index("Jaime"))

# # in este metodo devuelve un valor booleano si el elemento que se pasa como parametro esta o no en la lista, es como un algoritmo de busqueda.
# print("Juan David Paniagua" in listStudents)

# # Conversión de lista a tupla
# conversionaTupla = tuple(listStudents)
# print(conversionaTupla)

# # remove() recibe como parametro el elemento espesifico que se quiere eliminar. 
# print(listStudents.remove("Natalia"))
# print(listStudents)

# # pop() hace lo mismo que remove pero solo elimina el ultimo elemento de la lista y ademas muestra lo que elimino. 
# print(listStudents.pop())
# print()

# # count() recibe como parametro un dato y muestra cuantas veces esta ese elemento en la lista
# print(listStudents.count("Juan David"))

# # sort() Para ordenar los elementos de una lista, es como un algoritmo de ordenamiento
# listaOrdenar=[9,4,5,6,1,3,2,8,7]
# listaOrdenar.sort()
# print(listaOrdenar)

# # reverse() Invierte el orden de los elementod de una lista
# listaOrdenar.reverse()
# print(listaOrdenar)

# # Un operador muy util es la suma "+" podemos sumar listas y crear una tercer lista y tambien se puede usar * para multiplicar la lista.
# lista1=[1,2,3]
# lista2=[4,5,6,7]
# lista3=lista1+lista2
# lista4=lista1*2
# print(lista3)
# print(lista4)

# # split() Convierte una cadena de caracteres en una lista
# mensaje = "Hola buenos días"
# print(mensaje.split())


# Ejercicios de listas

# Ejercicio 1 
# materias_curso = list
# materias_curso = ["Matematicas","Fisica","Algoritmos","Ingles"]
# print(materias_curso)
# for i in materias_curso:
#     print(i)

# Ejercicio 2 
# materias_curso = ["Matematicas","Fisica","Algoritmos","Ingles"]
# for i in materias_curso:
#     print("Yo estudio la asignatura de: ",i)

# Ejercicio 3 
# materias_curso = ["Matematicas","Fisica","Algoritmos","Ingles"]
# notas = []
# for i in materias_curso:
#     notas.append(float(input("Ingrese la nota de la materia: " + i + ": ")))
    
# lon = len(materias_curso)
# for j in range(lon):
#     print("Su nota en la materia: ",materias_curso[j],"es de: ",notas[j])


# # Ejercicio 4
# loteria_numeros = []
# for i in range(10):
#     loteria_numeros.append(int(input("Introduce un número ganador: ")))
# loteria_numeros.sort()
# print("Los números ganadores son: " + str(loteria_numeros))


# # Ejercicio 5
# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# numbers.reverse()
# for number in numbers:
#     print(number, end=", ")


# # Ejercicio 6
# materias = ["Matematicas","Fisica","Lengua","Ingles","Etica"]
# ganadas = []
# perdidas = []
# for i in materias:
#     nota = float(input("Ingrese la nota para la materia " + i + ": "))
#     if nota >= 3:
#         ganadas.append(i)
#     else:
#         perdidas.append(i)

# for j in ganadas:
#     print("Ganaste la asignatura: " + j) 

# for h in perdidas: 
#     print("Perdiste la asignatura: " + h) 


# # Ejercicio 7
# word = input("Introduce una palabra: ")
# vocals = ['a', 'e', 'i', 'o', 'u']
# for vocal in vocals: 
#     times = 0
#     for letter in word: 
#         if letter == vocal:
#             times += 1
#     print("La vocal " + vocal + " aparece " + str(times) + " veces")

# # Ejercicio 8
# word = input("Introduce una palabra: ")
# reversed_word = word
# word = list(word)
# reversed_word = list(reversed_word)
# reversed_word.reverse()
# if word == reversed_word:
#     print("Es un palíndromo")
# else:
#     print("No es un palíndromo")

# # Ejercicio 9
# prices = [50, 75, 46, 22, 80, 65, 8]
# min = max = prices[0]
# for price in prices:
#     if price < min:
#         min = price
#     elif price > max:
#         max = price 
# print("El mínimo es " + str(min)) 
# print("El máximo es " + str(max))

# a = (1, 2, 3)
# b = (-1, 0, 2)
# product = 0
# for i in range(len(a)):
#     product += a[i]*b[i]
# print("El producto de los vectores" + str(a) + " y " + str(b) + " es " + str(product)) 

# # Ejercicio 10
# a = ((1, 2, 3),
#      (4, 5, 6))
# b = ((-1, 0),
#      (0, 1),
#      (1,1))
# result = [[0,0],
#           [0,0]]
# for i in range(len(a)):
#     for j in range(len(b[0])):
#         for k in range(len(b)):
#             result[i][j] += a[i][k] * b[k][j]
# for i in range(len(result)):
#     result[i] = tuple(result[i])
# result = tuple(result)
# for i in range(len(result)):
#     print(result[i])

# # Ejercicio 11
# sample = input("Introduce una muestra de números separados por comas: ")
# sample = sample.split(',')
# n = len(sample)
# for i in range(n):
#     sample[i] = int(sample[i])
# sample = tuple(sample)
# sum = 0
# sumsq = 0
# for i in sample:
#     sum += i
#     sumsq += i**2
# mean = sum/n
# stdev = (sumsq/n-mean**2)**(1/2)
# print('La media es', mean, ', y la desviación típica es', stdev)


# Ejercicio 12 
# lista = []
# n = int(input("Ingrese cuantos números quiere: "))
# for i in range(n):
#     lista.append(int(input("Ingrese un número para la posición: {} ".format(i+1))))

# Reversando solamente
# lista.reverse()
# print(lista)

# Organizando y reversando
# lista.sort()
# lista.reverse()
# print(lista)

