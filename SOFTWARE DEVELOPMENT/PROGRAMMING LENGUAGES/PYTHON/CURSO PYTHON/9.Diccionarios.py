# 4) Diccionarios = dict

# Los diccionarios son un tipo de estructuras de datos que permiten guardar un conjunto no ordenado de pares clave-valor, existiendo las claves únicas dentro de un mismo diccionario (es decir, que no pueden tener dos elementos con una misma clave). El diccionario se declara entre los caracteres '{ }' y los elementos se separan por comas (',').
# Se pueden almacenar listas e incluso otros diccionarios
# #  Los elementos almacenados no están ordenados. El orden es indiferente a la hora de almacenar información en un diccionario. 
# Los diccionarios denominados dict para Python, son estructuras de datos muy extendidos en otros lenguajes de programación, aunque en otros lenguajes como java se les denominan con distintos nombres como "Map".
# Ejemplo de diccionarios
# # Defino la variable 'futbolistas' como un diccionario, ese sera el nombre del diccionario y se abren parentesis y dentro de estos se inicia la estructura de clave valor.

# Ejemplo 1
futbolistas = dict()
futbolistas = {
13 : "Mina", 21 : "Lucumi",

17 : "Fabra", 11 : "Cuadrado",

9 : "Falcao", 19 : "Muriel",

15 : "Uribe", 10 : "James Rodriguez",

16 : "Lerma", 5 : "Wilmar Barrios",

3 : "Murillo"
}


print(futbolistas)
print(futbolistas[10])


# Ejemplo 2
paises = {"Alemania":"Berlin",
"Italia":"Roma",
"Canada":"Otawa",
"Colombia":"Bogota"}

print(paises)
print(paises["Colombia"])

# Como agregar mas elementos al diccionario ya hecho

paises["Brasil"]="Brasilia"
print(paises)
paises["Brasil"]="Rio de janeiro"
print(paises)

# Como eliminar 
del paises["Italia"]
print(paises)

tuplaDic = ("Medellín","Bogota","Cali")
diccionarioTupla = {
    tuplaDic[0]:"Medellín",
    tuplaDic[1]:"Bogota",
    tuplaDic[2]:"Cali"
}








